// src/components/Card.jsx
function Card({ title, body }) {
  return (
    <div className="bg-white p-4 rounded shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{body}</p>
    </div>
  )
}

export default Card
