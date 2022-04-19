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
    white-space: nowrap;
`;

const jobs: Job[] = [
    {
        companyName: "Polly",
        startDate: moment().year(2017).month("August").toDate(),
        endDate: moment().year(2019).month("August").toDate(),
        jobTitle: "Software Enginner",
        bullets: [
            <>
                Developed front-end application in React for managing and analyzing the results of surveys.
                Coordinated and maintained the component library, improving developer output, component performance,
                and the consistency of the user experience. <Stack> (TypeScript, React, SCSS, MongoDB)</Stack>
            </>,
            <>
                Wrote documentation on code standards for component design to maintain this consistency as other engineers
                extended the library and reviewed additions to ensure components best applied React features to optimize performance.
                Combined with other front-end optimizations, this reduced average load time by 50%.
            </>,
            <>
                Developed large-scale back end software for processing user events from Slack integration.
                Wrote back-end web-application software to process millions of AWS SQS events each month to quickly
                respond to user input in Slack.
                <Stack> (Node.js, MongoDB, AWS SQS, AWS Lambda)</Stack>
            </>,
            <>
                Used the Slack API to provide data synchronization and a native, user-friendly UX for one of the most used Slack applications.
                Refactored code to improve throughput and reduce customer wait time due to API rate limiting. Added integration with Heap API to
                consistently track user actions in both Slack and the web-app.
            </>,
        ]
    },
    {
        companyName: "CSRA",
        startDate: moment().year(2017).month("January").toDate(),
        endDate: moment().year(2017).month("August").toDate(),
        jobTitle: "Software Engineer",
        bullets: [
            <>Developed and maintained case-management system web-app for processing refugee applications. <Stack>(Java, C#, T-SQL)</Stack></>,
            <>Hardened security within the application to better protect data of applicants and employees.</>,
        ]
    },
    {
        companyName: "42Six Solutions",
        startDate: moment().year(2014).month("October").toDate(),
        endDate: moment().year(2017).month("January").toDate(),
        jobTitle: "Software Engineer",
        bullets: [
            <>Created Angular.js webapp that pulled data from a RESTful JSON service and presented the results in a user-friendly
            and customizable format, resulting in a strong and competitive proposal for the company. <Stack>(Node.js, ES5, AngularJS)</Stack></>,
            <>Modified machine learning workflows to properly use Apache Spark features for more reliable and efficient distributed processing, increasing performance. <Stack>(Python, Spark)</Stack></>,
            <>Added an option to the machine learning job, both in the back-end and the frontend Angular web-app for launching and viewing the results of jobs. <Stack>(Python, Django, AngularJS)</Stack></>
        ]
    }
];

export function Experience(props: ExperienceProps): JSX.Element {
    const jobList = jobs.map((j) =>
        <JobItem key={j.companyName} job={j} />
    );
    return (
        <div>
            <SectionName><Icon type="briefcase" /> Experience</SectionName>
            {jobList}
        </div>
    );
}
