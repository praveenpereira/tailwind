import { Content } from "./pages/Content";
import { Footer } from "./pages/Footer";
import { Navbar } from "./pages/Navbar";

export default function Home() {
  return (
     <div>
      <Navbar/>
      <div>
      <Content/>
      </div>
      <Footer/>
     </div>

  )
}
