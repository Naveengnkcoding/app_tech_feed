"use client";
import React from "react";
import ChartThree from "../components/Charts/ChartThree";
import ChartTwo from "../components/Charts/ChartTwo";
import ChatCard from "../components/Chat/ChatCard";
import TableOne from "../components/Tables/TableOne";
import DataStatsOne from "../components/DataStats/DataStatsOne";
import ChartOne from "../components/Charts/ChartOneC";

const Dashboard: React.FC = () => {
  return (
    <>
      <DataStatsOne />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default Dashboard;
