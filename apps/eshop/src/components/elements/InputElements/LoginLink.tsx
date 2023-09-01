import Link from "next/link";
import { useRouter } from "next/router";

export const LoginLink = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <p className="pt-1 text-sm font-light text-black">
      {title}
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          router.push("/login");
        }}
        className="ml-1 font-medium text-green-500 hover:text-green-700 hover:underline"
      >
        Login here
      </Link>
    </p>
  );
};
