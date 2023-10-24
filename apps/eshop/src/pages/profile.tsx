import react from "react";
import Head from "next/head";
import ChatBot from "@/components/ui/features/MessengerChatbot/MessengerChatbot";
import metaData from "../../public/meta.json";
import Footer from "@/components/ui/features/footer/Footer";
import UserNewDashboardLayout from "@/components/layouts/UserNewdashboardlayout";
import ManageAccountHeader from "@/components/ui/features/UserDashboard/Header/UserHeader";
import UserSidebar from "@/components/ui/features/UserDashboard/Sidebar/UserSidebar";
import UserMain from "@/components/ui/features/UserDashboard/Main/UserMain";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Beach Limo: User profile</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta name="google-site-verification" content="K81iN0RCpi5NOoiQmvPbDGfFInM19PeDj0yrYEM3P-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <UserNewDashboardLayout
        sidebar={<UserSidebar />}
        header={<ManageAccountHeader />}
        footer={<Footer />}
      >
        <div className='p-10'>
        <UserMain />
        </div>
      </UserNewDashboardLayout>
    </div>
      <ChatBot />
    </>
  );
};

export default Profile;
