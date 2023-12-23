import AdminDashboardLayout from "@/components/layouts/AdminDashboardLayout";
import React from "react";
import Head from "next/head";
import metaData from "../../public/meta.json";
import Footer from "@/components/ui/features/footer/Footer";
import AdminSidebar from "@/components/ui/features/AdminDashboard/Sidebar/AdminSidebar";
import AdminAccountHeader from "@/components/ui/features/AdminDashboard/Header/AdminHeader";
import AdminPendingRentDetails from "@/components/ui/features/AdminPendingRentData";

const AdminPendingRentHistoryLayout = () => {

  return (
    <>
      <Head>
        <title>Beach Limo: Admin Rent History</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta
          name="google-site-verification"
          content="K81iN0RCpi5NOoiQmvPbDGfFInM19PeDj0yrYEM3P-8"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white text-black">
      <AdminDashboardLayout
        sidebar={<AdminSidebar />}
        header={<AdminAccountHeader />}
        footer={<Footer />}
      >
        <div className="min-h-screen flex justify-center items-center">
        <AdminPendingRentDetails />
        </div>
      </AdminDashboardLayout>
      </div>
    </>
  );
};

export default AdminPendingRentHistoryLayout;
