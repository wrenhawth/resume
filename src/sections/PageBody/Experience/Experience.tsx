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
            <>
                Developed front-end software in React. Coordinated and maintained the component library, improving developer output
                 and the consistency of the user experience. Provided guidance for other engineers to extend the library and
                 best apply React features to optimize component performance.
                 <Stack> (TypeScript, React, SCSS, MongoDB)</Stack>
            </>,
            <>
                Developed large-scale back end software. Wrote back-end web-application software to process millions of AWS SQS events each month.
                <Stack> (Node.js, MongoDB, AWS SQS, AWS Lambda)</Stack>
            </>,
            <>
                Used the Slack API to provide data synchronization and native, user-friendly UX for one of the most used Slack applications.
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
            <>Modified existing database stored procedures to align with code standards of maintainability.</>,
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
            and customizable format, resulting in a strong and competitive proposal for the company. <Stack>(Node.js, JS, AngularJS)</Stack></>,
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
