import * as React from "react";
import moment from "moment";

import { SectionName } from "../../../components/SectionName";
import { JobItem } from "./components/JobItem";
import { Mono } from "../../../components/Mono";
import { styled } from "../../../utils/theme";
import { Icon } from "../../../components/Icon";

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
`;

const jobs: Job[] = [
    {
        companyName: "Polly",
        startDate: moment().year(2017).month("August").toDate(),
        jobTitle: "Software Enginner",
        bullets: [
            <>Developed Polly, a tool to measure important workflows and processes by collecting internal feedback through Slack
            and other platforms <Stack>(Typescript, Node, React, SCSS, MongoDB)</Stack></>,
            "Planned, organized, and maintained a component library to standardize previously disparate UX elements into a collection of consistent React components for a more intuitive user experience",
            "Surpassed a previous cap of ~2000 audience members for reliable survey delivery by improving handling of Slack API Rate Limiting",
            <>Improved emoji support for surveys so user input like <Mono>:tada:</Mono> in Slack properly shows up as 🎉 in the web app</>,
        ]
    },
    {
        companyName: "CSRA",
        startDate: moment().year(2017).month("January").toDate(),
        endDate: moment().year(2017).month("August").toDate(),
        jobTitle: "Software Engineer",
        bullets: [
            <>Developed and maintained case-management system web-app for processing refugee applications <Stack>(Java, C#, T-SQL)</Stack></>,
            <>Modified existing database stored procedures to align with code standards of maintainability</>,
            <>Hardened security within the application to better protect data of applicants and employees</>,
        ]
    },
    {
        companyName: "42Six Solutions",
        startDate: moment().year(2014).month("October").toDate(),
        endDate: moment().year(2017).month("January").toDate(),
        jobTitle: "Software Engineer",
        bullets: [
            <>Created Angular.js webapp that pulled data from a RESTful JSON service and presented the results in a user-friendly
            and customizable format, resulting in a strong and competitive proposal for the company <Stack>(Node, JS, AngularJS)</Stack></>,
            <>Modified machine learning workflows to properly use Apache Spark features for more reliable and efficient distributed processing, increasing performance <Stack>(Python, Spark)</Stack></>,
            <>Added an option to the machine learning job, both in the back-end and the frontend Angular web-app for launching and viewing the results of jobs <Stack>(Python, Django, AngularJS)</Stack></>
        ]
    }
];

export function Experience(props: ExperienceProps): JSX.Element {
    const jobList = jobs.map((j) =>
        <JobItem job={j} />
    );
    return (
        <div>
            <SectionName><Icon type="briefcase" /> Experience</SectionName>
            {jobList}
        </div>
    );
}
