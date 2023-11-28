import { Styled } from "./SidebarBody.styled";
import Image from "next/image";
import { listOfMenu } from "./SidebarBody.utils";

const SidebarBody = () => {
  const route = window.location.pathname;

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-center items-center">
      <Image src="/BeachLimo.png" alt="logo" width={200} height={200} sizes="100vw"/>
      </div>
      <div className="mt-5">
        {listOfMenu.map((menu, index) => (
          <Styled.ListItem key={index} className="mt-4 ">
            <h1 className="text-center text-2xl font-semibold">{menu.type}</h1>
            <div className="mt-2">
              {menu.listOfItems.map((item, index) => (
                <Styled.SidebarLink
                  key={index}
                  href={item.url}
                  active={item.url === route ? true : false}
                  className="flex items-center"
                >
                  <div className="mr-2">{item.icon}</div>
                  <span className="">{item.name}</span>
                </Styled.SidebarLink>
              ))}
            </div>
          </Styled.ListItem>
        ))}
      </div>
    </div>
  );
};

export default SidebarBody;
