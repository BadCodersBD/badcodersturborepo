import React from "react";
import { WhatsAppWidget } from 'react-whatsapp-widget';

const WhatsAppChatbot = () => {
    
  return (
    <div>
      <WhatsAppWidget
        phoneNumber="8801982544392"
        message="Hello! How can we assist you today?"
        position="right"
        backgroundColor="#25d366"
        size="medium"
      />
    </div>
  );
};

export default WhatsAppChatbot;
