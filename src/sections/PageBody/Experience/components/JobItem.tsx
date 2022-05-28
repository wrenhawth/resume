import * as React from "react";
import { Job } from "../Experience";

import { styled } from "../../../../utils/theme";
import moment from "moment";
import { DateRange } from "../../../../components/DateRange";
import { SidebarHeader } from "../../../../components/SidebarHeader";
import { ItemTitle } from "../../../../components/ItemTitle";
interface JobItemProps {
    job: Job;
}

const JobGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`

const Accomplishments = styled.ul`
    margin-top: 0;
    font-size: .9em;
    list-style-type: square;
    list-style-position: inside;
    padding-left: 0.25em;
`;

export function JobItem(props: JobItemProps): JSX.Element {
    const start = moment(props.job.startDate).format("MMM Y");
    const bullets = props.job.bullets.map((b, i) =>
        <li key={`bullet-${i}`}>{b}</li>
    );
    const end = props.job.endDate ? moment(props.job.endDate).format("MMM Y") : "Present"
    return (
        <JobGrid>
            <div>
                <SidebarHeader>{props.job.companyName}</SidebarHeader>
                <DateRange>{start} - {end}</DateRange>
            </div>
            <div>
                <ItemTitle>{props.job.jobTitle}</ItemTitle>
                <Accomplishments>
                    {bullets}
                </Accomplishments>
            </div>
        </JobGrid>
    );
}
