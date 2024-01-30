import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import multer from 'multer'
import { fileUpload, searchData, deleteAllUsers } from './routes'

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.post('/api/files', upload.single('file'), fileUpload) 
app.get('/api/users', searchData)
app.delete('/api/users', deleteAllUsers)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app