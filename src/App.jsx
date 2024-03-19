import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar.jsx'
import Users from './components/Users.jsx'
import Posts from './components/Posts.jsx'
import Todos from './components/Todos.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <><Navbar /><Home /><Footer /></>
  }, {
    path: "/Users",
    element: <><Navbar /><Users /><Footer /></>
  }, {
    path: "/Posts",
    element: <><Navbar /><Posts /><Footer /></>
  }, {
    path: "/Todos",
    element: <><Navbar /><Todos /><Footer /></>
  }])
  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
