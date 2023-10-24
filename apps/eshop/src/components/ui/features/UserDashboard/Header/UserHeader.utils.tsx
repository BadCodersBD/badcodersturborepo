import { useSession, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import Cookies from "universal-cookie";
import { adminSidebarToggleState } from "../../../../../utils/sidebar/adminSidebarToggle";
import { useRouter } from "next/router";

const UserHeaderUtils = () => {
  const [Adminsidebartoggle, setAdminSidebarToggle] = useRecoilState(
    adminSidebarToggleState
  );
  const cookies = new Cookies();
  const router = useRouter();
  const userData = cookies.get("userData");

  const handleSignUp = async () => {
    if (userData) {
      cookies.set("userData", null);
      await signOut({
        callbackUrl: "/",
      });
    } else {
      router.push("/");
    }
  };

  return { handleSignUp, setAdminSidebarToggle };
};

export default UserHeaderUtils;
