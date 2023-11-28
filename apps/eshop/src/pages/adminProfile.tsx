import { ReactReduxContext } from "react-redux";
import { ReactReduxContextValue } from "react-redux";
import React from "react";
import AdminProfileLayout from "@/components/layouts/AdminProfileLayout";
import Head from "next/head";
import metaData from "../../public/meta.json";
import Footer from "@/components/ui/features/footer/Footer";
import AdminAccountHeader from "@/components/ui/features/AdminDashboard/Header/AdminHeader";
import AdminSidebar from "@/components/ui/features/AdminDashboard/Sidebar/AdminSidebar";
import AdminProfileOverview from "@/components/ui/features/AdminProfileOverview";

const AdminProfile = () => {
  return (
    <div>
      <Head>
        <title>Beach Limo: Admin profile</title>
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
      <AdminProfileLayout
        sidebar={<AdminSidebar />}
        header={<AdminAccountHeader />}
        footer={<Footer />}
      >
        <div className="min-h-screen flex justify-center items-center bg-white text-black">
          <AdminProfileOverview />
        </div>
      </AdminProfileLayout>
    </div>
  );
};

export default AdminProfile;
