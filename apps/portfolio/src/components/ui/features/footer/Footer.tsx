import React from "react";
import Image from "next/image";
import { Styled } from "./Footer.styled";
import Grid from "@mui/material/Grid";
import { GridColumn } from "../../element/GridColumn/GridColumn";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <div>Design & Develop By @Rakib Khan ©2023</div>
        <div>For any Development Contact Me</div>
      </Styled.Footer>
    </>
  );
};

export default Footer;
