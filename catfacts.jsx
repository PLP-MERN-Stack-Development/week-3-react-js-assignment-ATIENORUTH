import { useState, useEffect } from 'react'

function CatFacts() {
  const [fact, setFact] = useState('Click the button to load a cat fact 🐱')
  const [loading, setLoading] = useState(false)

  const getCatFact = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://catfact.ninja/fact')
      const data = await res.json()
      setFact(data.fact)
    } catch (err) {
      setFact('Failed to fetch cat fact 😿')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">Cat Facts Generator</h2>
      <p className="mb-6 text-lg">{fact}</p>
      <button
        onClick={getCatFact}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get New Cat Fact'}
      </button>
    </div>
  )
}

export default CatFacts
