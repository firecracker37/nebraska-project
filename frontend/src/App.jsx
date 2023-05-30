import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="">
      <div className="flex flex-col min-h-screen">
        <Header />
        <ToastContainer />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
