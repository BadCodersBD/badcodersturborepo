import Image from "next/image";
import { Styled } from "./GrandOpening.styled";

const Brand = ({
  logoUrl,
  color,
  brandSlugan,
}: {
  logoUrl: string;
  color: any;
  brandSlugan: string;
}) => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative h-40 w-40">
        <Image src={logoUrl} alt="brand logo" fill className="object-contain" />
      </div>
      <Styled.Title
        color={color.color}
        className="text-5xl font-bold  sm:text-6xl"
      >
        Coming Soon
      </Styled.Title>
      <p className="mt-4 w-[90%] text-center font-medium">{brandSlugan}</p>
      <Styled.InputMain>
        <Styled.Input
          color={color.color}
          type="email"
          placeholder="Enter your email"
        />
        <Styled.Button color={color.color}>NOTIFY ME</Styled.Button>
      </Styled.InputMain>
    </section>
  );
};

export default Brand;
