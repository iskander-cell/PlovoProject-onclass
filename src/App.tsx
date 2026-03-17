import { Header } from "./components/Header/Header"
import { Home } from "./pages/Home/Home"
import { Dish } from "./pages/Dish/Dish"
import { Routes, Route } from "react-router"
import { AddDish } from "./pages/AddDish/AddDish"


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dish/:id' element={<Dish/>}/>
        <Route path='/dish/create' element={<AddDish/>}/>
      </Routes>
    </>
  )
}

export default App

