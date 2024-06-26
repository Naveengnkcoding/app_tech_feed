import Image from "next/image";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <div className="font-roboto scroll-smooth">
        <Login />
        <Footer />
      </div>
    </div>
  );
}
