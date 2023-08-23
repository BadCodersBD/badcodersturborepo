import React, { useState, useEffect } from "react";
import { Styled } from "./Project.styled";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { fetchProjects } from "../../../../utils/fetchServices";
import type { ProjectType } from "../../../../types/type";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <div className=" lg:flex gap-3 ">
        {Project.map((Data, index) => (
          <Grid container key={index}>
            <Grid item>
              <Link href={Data.linkToBuild}>
                <Styled.Card>
                  <Styled.CardImage
                    src={urlForThumbnail(Data.image)}
                    alt={Data.title}
                    height={0}
                    width={0}
                    sizes="100vw"
                  />
                  <h1 className="text-2xl p-1 font-semibold">{Data.title}</h1>
                  <h1 className="text-lg font-normal">{Data.summary}</h1>
                  <div className="p-2 flex">
                    {/* <Image
                    src={urlForThumbnail(Data.technologies?._ref)}
                    alt={Data.title}
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />  */}
                    Technologys
                  </div>
                </Styled.Card>
              </Link>
            </Grid>
          </Grid>
        ))}
      </div>
    </Styled.Main>
  );
};

export default Project;
