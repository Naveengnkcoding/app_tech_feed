import Image from "next/image";
import DefaultLayout from "./components/Layouts/DefaultLaout";
import ECommerce from "./components/Dashboard/E-commerce";

export default function Home() {
  return (
    <div>
        <DefaultLayout>
          <ECommerce />
        </DefaultLayout>
    </div>
  );
}
