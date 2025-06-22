// src/pages/Home.jsx
import { useEffect, useState } from 'react'

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Users List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map(user => (
          <li key={user.id} className="bg-gray-100 p-4 rounded shadow">
            <p className="font-bold">{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
