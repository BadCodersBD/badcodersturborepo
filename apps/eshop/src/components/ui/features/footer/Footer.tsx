import { GridColumn } from "../../element/GridColumn/GridColumn";
import { Styled } from "./Footer.styled";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcon from "./SocialIcon/SocialIcon";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <Grid container rowSpacing={2}>
          <Grid item lg={4}>
            <div>Design & Develop By @Rakib Khan ©2023</div>
            <div>For any Development Contact Me</div>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2}>
          <Grid item lg={4}>
            <div>Design & Develop By @Rakib Khan ©2023</div>
            <div>For any Development Contact Me</div>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2}>
          <Grid item lg={4}>
            <div>Design & Develop By @Rakib Khan ©2023</div>
            <div>For any Development Contact Me</div>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2}>
          <Grid item lg={4}>
            <div>Design & Develop By @Rakib Khan ©2023</div>
            <div>For any Development Contact Me</div>
            <SocialIcon/>
          </Grid>
        </Grid>
      </Styled.Footer>
    </>
  );
};

export default Footer;
