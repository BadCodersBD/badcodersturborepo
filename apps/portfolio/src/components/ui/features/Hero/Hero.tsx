import React from "react";
import { Styled } from "./hero.styled"
import Grid from "@mui/material/Grid";
import { GridColumn } from "../../element/GridColumn/GridColumn";

const Hero = () => {

    return (
        <Styled.Main id="home">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <GridColumn xs={12} lg={6}>
            <Styled.Heading>
            Hero
        </Styled.Heading> 
            </GridColumn>
            <GridColumn xs={12} lg={6}>
            <Styled.Heading>
            Hero
        </Styled.Heading> 
            </GridColumn>
        </Grid>
        </Styled.Main>
    );
};

export default Hero;