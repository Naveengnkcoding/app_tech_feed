import Image from "next/image";
import Login from "./Login";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

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
