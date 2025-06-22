// src/components/Navbar.jsx
function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">MyReactApp</h1>
      <ul className="flex gap-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
