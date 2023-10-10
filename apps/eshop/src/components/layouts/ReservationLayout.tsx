import React from "react";
import BookingReservation from "../ui/features/Reservation/BookingReservation";
import Header from "../ui/features/Header/Header";
import WhatsAppChatbot from "../ui/features/WhatsAppChatbot/WhatsAppChatbot";
import GoToTopButton from "../ui/element/GoToTopButton/GoToTopButton";
import Footer from "../ui/features/footer/Footer";
import SimpleBottomNavigation from "../ui/features/BottomNavigation/BottomNavigation";

const ReservationLayout = () => {
  return (
    <div>
      <Header />
      <BookingReservation />
      <GoToTopButton />
      <WhatsAppChatbot />
      <Footer />
      <div className="inline md:hidden">
        <SimpleBottomNavigation />
      </div>
    </div>
  );
};

export default ReservationLayout;
