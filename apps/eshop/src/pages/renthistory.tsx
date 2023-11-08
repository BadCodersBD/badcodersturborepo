import RentHistoryLayout from "@/components/layouts/RentHistoryLayout";
import React from "react";
import Head from "next/head";
import ChatBot from "@/components/ui/features/MessengerChatbot/MessengerChatbot";
import metaData from "../../public/meta.json";
import Footer from "@/components/ui/features/footer/Footer";
import ManageAccountHeader from "@/components/ui/features/UserDashboard/Header/UserHeader";
import UserSidebar from "@/components/ui/features/UserDashboard/Sidebar/UserSidebar";
import RentHistory from "@/components/ui/features/RentHistory/rentHistory";

const RentHistorypage = () => {

  return (
    <div>
      <Head>
        <title>Beach Limo: User profile</title>
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
      <RentHistoryLayout
        sidebar={<UserSidebar />}
        header={<ManageAccountHeader />}
        footer={<Footer />}
      >
        <div className="min-h-screen bg-white text-black">
        <RentHistory />
        </div>
      </RentHistoryLayout>
    </div>
  );
};

export default RentHistorypage;
