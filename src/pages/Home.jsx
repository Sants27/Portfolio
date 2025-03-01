// import { Fragment } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
        <Navbar/>
        <Hero/>
    </div>
  )
}
export default Home
