import React from "react";
import { Styled } from "./Experience.styled";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

const Experience = () => {
  return (
    <Styled.Main id="experience">
        <h1 className="text-center font-semibold text-4xl pb-2">Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="06/2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<AssuredWorkloadIcon />}
        >
          <h1 className="vertical-timeline-element-title text-2xl">Executive Software Engineer</h1>
          <h4 className="vertical-timeline-element-subtitle">Akij venture group</h4>
          <h4 className="vertical-timeline-element-subtitle">Dhaka, Bangladesh</h4>
          <p>
            Full stack Web development, front-end development, back-end development, deployment, testing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="01/2023 - 06/2023"
          contentStyle={{ background: "rgb(229, 243, 33)", color: "#000" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<AssuredWorkloadIcon />}
        >
          <h3 className="vertical-timeline-element-title text-2xl">{'Software Engineer ( Intern )'}</h3>
          <h4 className="vertical-timeline-element-subtitle">
           Akij Venture Group
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
           Dhaka, Bangladesh
          </h4>
          <p>
            React js, Next js, MongoDB, Tailwind, Styled Component, JavaScript, html, Css, Git, Github, Sanity, Strapi
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2022"
          contentStyle={{ background: "rgb(26, 179, 12)", color: "#000" }}
          iconStyle={{ background: "rgb(11, 179, 11)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title text-2xl">
            Lovey professional University
          </h1>
          <h1 className="vertical-timeline-element-title text-xl">
            Jalandhar, Punjab, India
          </h1>
          <h1 className="vertical-timeline-element-subtitle pt-1">Bachelor Of Technology in Computer Science & Engineering</h1>
          <p>Software development, Software Testing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2017"
          contentStyle={{ background: "rgb(6, 151, 156)", color: "#000" }}
          iconStyle={{ background: "rgb(6, 151, 156)", color: "#FFFFFF" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title text-2xl">
            Kishoreganj Model College
          </h1>
          <h1 className="vertical-timeline-element-title text-xl">
            Kishoreganj, Dhaka
          </h1>
          <h1 className="vertical-timeline-element-subtitle">Higher Secondary Certification</h1>
          <p>Major: Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2015"
          contentStyle={{ background: "rgb(223, 95, 10)", color: "#000" }}
          iconStyle={{ background: "rgb(45, 201, 14)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title text-2xl">
            Azim Uddin High School
          </h1>
          <h1 className="vertical-timeline-element-subtitle">
            Kishoreganj, Dhaka
          </h1>
          <h1 className="vertical-timeline-element-subtitle">
            Secondary School Certification
          </h1>
          <p>Major: Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </Styled.Main>
  );
};

export default Experience;
