import React, { useState } from "react";
import { Styled } from "./GenericBanner.Styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';

const GenericBanner = (props: any) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      {open && (
        <div className="fixed bottom-0 z-50 w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3">
          <div className="flex items-center justify-evenly">
            <span className="justify-items-center text-xs text-white md:text-lg">
              {props.promotion}
            </span>
            <div className="flex items-center p-1 ">
              <Styled.shoppingButton>
                <ShoppingCartIcon />
                <span>{props.btn}</span>
              </Styled.shoppingButton>
              <Styled.Button onClick={() => setOpen((prev) => !prev)}>
                  X
              </Styled.Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenericBanner;
