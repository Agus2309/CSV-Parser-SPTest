import Navbar from './components/Navbar'
import CsvForm from './components/CsvForm'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import CsvCardContainer, { CsvCardData } from './components/CsvCardContainer'
import { create } from 'zustand'
import { API_URL } from './config'
import { useEffect, useState } from 'react'

export const useStore = create<UserState>(set => ({
  users: false,
  setUsers: () => set(state => ({ users: !state.users }))
}))

interface UserState {
  users: boolean
  setUsers: () => void
}


function App () {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<CsvCardData[]>([])

  useEffect(() => {
    const fetchAndFilterUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/users?q=${searchTerm}`)
        if (response.ok) {
          const jsonData = await response.json()
          setFilteredUsers(jsonData.data as CsvCardData[])
        } else {
          console.error('Failed to fetch data')
        }
      } catch (error) {
        console.error('An error occurred while fetching data', error)
      }
    }

    fetchAndFilterUsers()
  }, [searchTerm])

  return (
    <>
      <Navbar/>
      <main className="min-h-screen mt-32">
        <section className='max-w-3xl mb-10 mx-auto'>
          <CsvForm/>
        </section>
        <section className='max-w-5xl mx-auto'>
          <Searchbar value={searchTerm} onChange={setSearchTerm}/>
        </section>
        <section className='mt-10'>
          <CsvCardContainer users={filteredUsers} searchTerm={searchTerm} />
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App
