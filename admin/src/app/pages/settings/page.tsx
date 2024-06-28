import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SettingBoxes from "@/components/SettingBoxes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  // other metadata
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Settings" />

        <SettingBoxes />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
