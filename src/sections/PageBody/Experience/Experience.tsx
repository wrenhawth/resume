import * as React from "react";
import moment from "moment";

import { SectionName } from "../../../components/SectionName";
import { JobItem } from "./components/JobItem";
import { Mono } from "../../../components/Mono";
import { styled } from "../../../utils/theme";
import { HeaderIcon } from "../../../components/HeaderIcon";

interface ExperienceProps {
}

export interface Job {
    companyName: string;
    startDate: Date;
    endDate?: Date;
    jobTitle: string;
    bullets: React.ReactNode[];
}

const Stack = styled(Mono)`
    font-style: italic;
    color: ${props => props.theme.secondaryColor};
    white-space: nowrap;
    margin-left: 0.5em;
`;

const jobs: Job[] = [
    {
        companyName: "GoGuardian",
        startDate: moment().year(2022).month("July").toDate(),
        jobTitle: "Senior Software Engineer",
        bullets: [
            <>
                Lead a team of Front-End engineers in developing features and improving the accessibility of GoGuardian Admin, an application for K-12 schools to manage their student's web filtering and safety.
                <Stack>(Typescript, React, Redux, styled-components)</Stack>
            </>,
            <>
                Developed an interface for an LLM in Streamlit that allowed stakeholders to more efficiently categorize web sites that were previously uncategorized by the web categorization data pipelines, reducing the rate of uncategorized student browsing by a factor of 5.
                <Stack>(Python, StreamLit)</Stack>
            </>,
            <>
                Mentored junior engineers on coding best practices, pitfalls, and developing apps with a focus on extensibility, reliability, and efficiency.
            </>
        ]
    },
    {
        companyName: "98point6",
        startDate: moment().year(2019).month("August").toDate(),
        endDate: moment().year(2022).month("July").toDate(),
        jobTitle: "Senior Software Enginner",
        bullets: [
            <>
                
                Developed the React/Redux-based Clinician Console app used by medical professionals to interact with, diagnose, and treat patients in a telehealth setting. Worked to shape the development of the app to leverage development best practices for performance, maintainability, reliability, and usability. 
                <Stack>(Typescript, React, Redux, styled-components) </Stack>
            </>, 
            <>
                Transitioned the type-checking system for three large web clients from Flow to Typescript. This change of type-checking systems significantly improved type safety, reduced build times by 50%, and increased developer ability to deliver features for the company's web applications. A focus on mentoring and education, alongside automated tooling, empowered other developers to smoothly transition and more efficiently use the new language features. 
                <Stack>(Typescript, Flow)</Stack>
            </>,
            // <>
            //     Used a combination of automated tooling, developer education, and manual code updates to transition the company's web clients from Flow to Typescript. The change of type-checking systems significantly improved type safety, reduced build times by 50%, and increased developer velocity for the Clinician Console, Patient Web App, and Internal Commercial tools. This transition was carried out while these apps were in active development and a focus on mentoring and education empowered the other developers to smoothly transition and more efficiently use the new language features. 
            //     <Stack>(Typescript, Flow)</Stack>
            // </>,
            <>
                Created utilities to integrate the Clinician Console with a new GraphQL-based back-end, creating a bridge between the front-end console and the queries and mutations needed to retrieve and manipulate medical data. 
                <Stack>(GraphQL, react-query, urql, graphql-codegen)</Stack>
            </>,
        ]
    },
    {
        companyName: "Polly",
        startDate: moment().year(2017).month("August").toDate(),
        endDate: moment().year(2019).month("August").toDate(),
        jobTitle: "Software Enginner",
        bullets: [
            <>
                Developed front-end application in React for managing and analyzing the results of surveys.
                Coordinated, maintained, and documented code standards for the component library, improving developer output, component performance,
                and the consistency of the user experience. These component performance optimizations, combined with other front-end optimizations, reduced average load time by 50%. <Stack> (TypeScript, React, SCSS, MongoDB)</Stack>
            </>,
            <>
                Developed large-scale back end software for processing user events from Slack integration.
                Wrote back-end web-application software to process millions of AWS SQS events each month to quickly
                respond to user input in Slack. Refactored code to improve throughput and reduce customer wait time due to API rate limiting.
                <Stack> (Node.js, MongoDB, AWS SQS, AWS Lambda)</Stack>
            </>
        ]
    },
    {
        companyName: "CSRA / 42Six Solutions",
        startDate: moment().year(2014).month("October").toDate(),
        endDate: moment().year(2017).month("August").toDate(),
        jobTitle: "Software Engineer",
        bullets: [
            <>Developed and maintained case-management system web-app for processing refugee applications. Hardened security within the application to better protect data of applicants and employees.<Stack>(Java, C#, T-SQL)</Stack></>,
            <>Created Angular.js webapp that pulled data from a RESTful JSON service and presented the results in a user-friendly
            and customizable format, resulting in a strong and competitive proposal for the company. <Stack>(Node.js, ES5, AngularJS)</Stack></>,
            <>Modified machine learning workflows to properly use Apache Spark features for more reliable and efficient distributed processing, increasing performance. Increased configurability of the workflows through modifying the front-end used for launching and viewing the results of jobs. <Stack>(Python, Spark, Django, AngularJS)</Stack></>,
        ]
    }
];

export function Experience(props: ExperienceProps): JSX.Element {
    const jobList = jobs.map((j) =>
        <JobItem key={j.companyName} job={j} />
    );
    return (
        <div>
            <HeaderIcon type="briefcase" /><SectionName>Experience</SectionName>
            {jobList}
        </div>
    );
}
