import React from "react";
// import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AllTask from "@/components/AllTask";

export const metadata: Metadata = {
  title: "CuracaoAdmin",
  description:
    "This is Next.js Form Elements page for CuracaoAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const alltask = () => {
  return (
    <DefaultLayout>
      <AllTask />
    </DefaultLayout>
  );
};

export default alltask;
