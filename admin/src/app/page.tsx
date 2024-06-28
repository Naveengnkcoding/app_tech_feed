import { Metadata } from "next";
import React from "react";
import Login from "@/components/Login/Login";

export const metadata: Metadata = {
  title:
    "Yaskawa",
};

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
