import express from 'express'
import { Request, Response } from 'express'
import { parseCSV, searchCSV } from './csvParser'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

export const fileUpload = async (req: Request, res: Response) => {
  try {
    const fileBuffer: Buffer = (req.file as any).buffer
    console.log('Received file:', fileBuffer.toString())
    const csvData = await parseCSV(fileBuffer.toString())

    const users = csvData.map((row: any) => ({
      name: row.name,
      city: row.city,
      country: row.country,
      favorite_sport: row.favorite_sport
    }))

    console.log('Parsed CSV data:', users)

    await Promise.all(
      users.map(async user => {
        try {
          const createdUser = await prisma.user.create({ data: user })
          console.log('User created:', createdUser)
        } catch (createError) {
          console.error('Error creating user:', createError)
          throw createError
        }
      })
    )

    res.status(200).json({ message: 'The file was uploaded successfully.' })
  } catch (err) {
    console.error('Error processing file:', err)
    res.status(500).json({ message: (err as Error).message })
  } finally {
    prisma.$disconnect()
  }
}

export const searchData = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.q as string 
    let users;

    if (searchTerm) {
      const lowercaseSearchTerm = searchTerm.toLowerCase()
      users = await prisma.user.findMany({
        where: {
          OR: [
            { name: { contains: lowercaseSearchTerm } },
            { city: { contains: lowercaseSearchTerm } },
            { country: { contains: lowercaseSearchTerm } },
            { favorite_sport: { contains: lowercaseSearchTerm } }
          ]
        }
      })
    } else {
      users = await prisma.user.findMany()
    }

    console.log(users)

    res.status(200).json({ data: users })
  } catch (err) {
    res.status(500).json({ message: (err as Error).message })
  }

  process.on('beforeExit', () => {
    prisma.$disconnect();
  })

}

export const deleteAllUsers = async (req: Request, res: Response) => {
  try {
    await prisma.user.deleteMany()

    res.status(200).json({ message: 'Users deleted successfully.' })
  } catch (err) {
    console.error('Error deleting all users:', err)
    res.status(500).json({ message: (err as Error).message })
  }
  
  process.on('beforeExit', () => {
    prisma.$disconnect()
  })
}


router.post('/', fileUpload)

export default router
