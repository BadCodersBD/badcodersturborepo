import { GridColumn } from "../../element/GridColumn/GridColumn";
import Aboutlogo from "./AboutLogo/AboutLogo";
import { Styled } from "./Footer.styled";
import PaymentIcon from "./Paymenticon/PaymentIcon";
import SocialIcon from "./SocialIcon/SocialIcon";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <h1 className="w-full text-xl my-5"><AttachEmailIcon/> Email us: onebeachlimo@gmail.com</h1>
            <h1 className="w-full text-xl"><CallIcon/> Call Us: +16465174942</h1>
            <h1 className="w-full text-xl my-5">All Rights reserved By <br></br> @Beach Limo ©2023</h1>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Aboutlogo />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <div className="flex lg:justify-center">
            <div>
            <h1 className="text-2xl font-semibold my-5">Company Info</h1>
            <h1 className="text-base underline my-2">Our Service</h1>
            <h1 className="text-base underline">Our Collection</h1>
            <h1 className="text-base underline my-2">Our Brands</h1>
            <h1 className="text-base underline">Our Location</h1>
            </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <div>
              <div className="my-5">
                <PaymentIcon />
              </div>
              <div className="my-5">
                <SocialIcon />
              </div>
            </div>
          </Grid>
        </Grid>
      </Styled.Footer>
    </>
  );
};

export default Footer;
