import React, { useState, useEffect } from "react";
import { Styled } from "./Project.styled";
import Grid from "@mui/material/Grid";
import { GridColumn } from "../../element/GridColumn/GridColumn";
import Image from "next/image";
import Link from "next/link";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { fetchProjects } from "../../../../utils/fetchProjects";
import type { ProjectType } from "../../../../types/type";
import { urlForThumbnail } from "../../../../utils/imageProcess";

const Project = () => {
  const [Project, setProject] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const projects = await fetchProjects();
        setProject(projects);
        setLoading(false);
      } catch (e) {
        console.log("Error", e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <GenericSpinner diameter={50} />
      </div>
    );
  }

  return (
    <Styled.Main id="project">
      <h1 className="text-center text-4xl p-4 font-bold"> Projects </h1>
      <div className="flex justify-center h-full w-full gap-4">
        {Project.map((Data, index) => (
          <Grid
            key={index}
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          >
            <GridColumn xs={12} md={6} lg={4}>
              <Link href={Data.linkToBuild}>
                <Styled.Card>
                  <Image
                    src={urlForThumbnail(Data.image)}
                    alt={Data.title}
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <h1 className="text-2xl p-1 font-semibold">{Data.title}</h1>
                  <h1 className="text-lg font-normal">{Data.summary}</h1>
                  <div className="p-2 flex">
                  {/* <Image
                    src={urlForThumbnail(Data.technologies)}
                    alt={Data.title}
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  /> */}
                  Technologys
                  </div>
                </Styled.Card>
              </Link>
            </GridColumn>
          </Grid>
        ))}
      </div>
    </Styled.Main>
  );
};

export default Project;
