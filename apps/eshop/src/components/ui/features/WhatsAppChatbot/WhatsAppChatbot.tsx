import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppChatbot = () => {
  return (
    <div>
      <FloatingWhatsApp
        accountName="Beach Limo Customer Support"
        phoneNumber="+16465174942"
        className="text-black"
        avatar="/customer.png"
        
      />
    </div>
  );
};

export default WhatsAppChatbot;
