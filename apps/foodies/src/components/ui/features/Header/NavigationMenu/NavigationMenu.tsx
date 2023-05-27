import Link from "next/link";
import { Data } from './NavigationDrawer'
import {Styled} from "./Navigation.styled";

const NavigationMenu = () => {
  return (
    <>
      <div className="hidden py-6 lg:inline">
        {Data.map(({ name, url }, index) => (
          <Link
            className="mx-2"
            key={index}
            href={`${url}`}
          >
            <Styled.Navigation>
            {name}
            </Styled.Navigation>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavigationMenu;
