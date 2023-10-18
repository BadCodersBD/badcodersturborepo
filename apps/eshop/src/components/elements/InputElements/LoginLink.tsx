import Link from "next/link";
import { useRouter } from "next/router";

export const LoginLink = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <p className="pt-1 text-sm font-light text-white">
      {title}
      <Link
        href="/login"
        // onClick={(e) => {
        //   e.preventDefault();
        //   router.push("");
        // }}
        className="ml-1 font-medium text-green-500 hover:text-green-700 hover:underline"
      >
        Login here
      </Link>
    </p>
  );
};
