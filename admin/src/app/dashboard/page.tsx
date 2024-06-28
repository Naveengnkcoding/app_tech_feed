import next from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ECommerce from "@/components/Dashboard/E-commerce";

const Dashboard = () => {
    return(
        <div>
            <DefaultLayout>
                <ECommerce />
            </DefaultLayout>
        </div>
    )
}

export default Dashboard;