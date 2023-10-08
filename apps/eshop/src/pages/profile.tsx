import react from "react";
import Head from "next/head";
import ChatBot from "@/components/ui/features/MessengerChatbot/MessengerChatbot";
import metaData from "../../public/meta.json";
import ProfileLayout from "@/components/layouts/ProfileLayout";

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
        <meta
          name="google-site-verification"
          content="uF7IpXKCuelQJy81bb-K1zcDj1VXO3l366zJzWjRki8"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileLayout/>
      <ChatBot />
    </>
  );
};

export default Profile;
