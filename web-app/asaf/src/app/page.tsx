import Image from "next/image";
import Login from "./Login";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <div className="font-roboto">
        <Navbar />
        <Login />
        <Footer />
      </div>
    </div>
  );
}
