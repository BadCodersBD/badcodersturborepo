import React from "react";
import Header from "../ui/features/Header/Header";
import WhatsAppChatbot from "../ui/features/WhatsAppChatbot/WhatsAppChatbot";
import GoToTopButton from "../ui/element/GoToTopButton/GoToTopButton";
import Footer from "../ui/features/footer/Footer";
import SimpleBottomNavigation from "../ui/features/BottomNavigation/BottomNavigation";
import ImageView from "../ui/features/ImageDataView";

const ImageDataLayout = () => {
	return (
		<div>
			<Header />
			<ImageView />
			<GoToTopButton />
			<WhatsAppChatbot />
			<Footer />
			<div className="inline md:hidden">
				<SimpleBottomNavigation />
			</div>
		</div>
	);
};

export default ImageDataLayout;
