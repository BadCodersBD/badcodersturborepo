import React, { useEffect } from "react";

const FacebookChatPlugin = ({ pageID }: any) => {
    
  useEffect(() => {
    const chatbox = document.getElementById("fb-customer-chat");
    chatbox?.setAttribute("page_id", pageID);
    chatbox?.setAttribute("attribution", "biz_inbox");

    (window as any).fbAsyncInit = () => {
      (window as any).FB.init({
        xfbml: true,
        version: "v18.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, [pageID]);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
};

export default FacebookChatPlugin;
