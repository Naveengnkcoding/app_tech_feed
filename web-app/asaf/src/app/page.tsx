import Image from "next/image";
import Login from "./Login";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="h-[100vh]">
        <Login />
        <Footer />
      </div>
    </div>
  );
}
