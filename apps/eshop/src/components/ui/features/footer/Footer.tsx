import { GridColumn } from "../../element/GridColumn/GridColumn";
import { Styled } from "./Footer.styled";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcon from "./SocialIcon/SocialIcon";
import PaymentIcon from "./Paymenticon/PaymentIcon";
import Aboutlogo from "./AboutLogo/AboutLogo";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <Grid container spacing={2} >
          <Grid item lg={12} >
            <h1 className="w-full">onebeachlimo@gmail.com</h1>
            <h1 className="w-full">+16465174942</h1>
            <h1 className="w-full">All Rights reserved By @Beach Limo ©2023</h1>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Aboutlogo/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <h1 className="text-2xl font-semibold my-5">Company Info</h1>
            <h1 className="text-base underline my-2">Our Service</h1>
            <h1 className="text-base underline">Our Collection</h1>
            <h1 className="text-base underline my-2">Our Brands</h1>
            <h1 className="text-base underline">Our Location</h1>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <div >
            <div className="my-5">
            <PaymentIcon/>
            </div>
            <div className="my-5">
            <SocialIcon/>
            </div>
            </div>
          </Grid>
        </Grid>
      </Styled.Footer>
    </>
  );
};

export default Footer;
