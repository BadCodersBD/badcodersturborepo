import { Data } from "./NavigationDrawer";
import { Styled } from "./Navigation.styled";
import Link from "next/link";
const NavigationMenu = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
        window.scrollTo({
            top: elem.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
        });
    }
};

  return (
    <>
      <div className="hidden py-6 lg:inline">
        {Data.map(({ name, id }, index) => (
          <Link
            className="mx-2"
            key={index}
            href={`${id}`}
            onClick={handleScroll}
          >
            <Styled.Navigation>{name}</Styled.Navigation>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavigationMenu;
