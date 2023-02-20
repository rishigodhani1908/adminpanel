import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Index from "./Index"
import Sidebar from "./Sidebar"

function Dasboard() {
  const [loader, setloader] = useState(true);

  setTimeout(() => {
    setloader(false);
  }, 1200);
  return (
    <>
      <div className={loader ? "wrapper h-100" : "wrapper"}>
        {
          loader ?
            <div className="preloader flex-column justify-content-center align-items-center">
              <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
            </div>
            : null

        }
        <Header />
        <Index />
        <Footer />
        <Sidebar />
      </div>

    </>
  )
}
export default Dasboard