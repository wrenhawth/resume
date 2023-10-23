import * as React from "react";

import { SectionName } from "../../../components/SectionName";
import { HeaderIcon } from "../../../components/HeaderIcon";
import { styled } from "../../../utils/theme";
import { SidebarHeader } from "../../../components/SidebarHeader";
import { DateRange } from "../../../components/DateRange";

interface EducationProps {
}

const SchoolGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-row-gap: 1em;
`

const EducationContext = styled.p`
display: flex;
flex-direction: column;
justify-content: space-around;
`

const Major = styled.span`
    font-style: normal;
`
const EducationDescription = styled.p`
    margin: 0;
    font-family: ${props => props.theme.bodyFont};
`;

export function Education(props: EducationProps): JSX.Element {

    return (
        <div><HeaderIcon type="school" />
            <SectionName id="Education" className="Education">Education</SectionName>
            <SchoolGrid>
                <div>
                    <SidebarHeader>Georgia Tech <DateRange>2017 - 2018</DateRange></SidebarHeader>
                    <EducationDescription>Graduate coursework including Artificial Intelligence, Robotics, &amp; Data Visualization</EducationDescription>
                </div>
                <div>
                    <SidebarHeader>University of Maryland <DateRange>2010 - 2013</DateRange></SidebarHeader>
                    <EducationContext>
                    <EducationDescription><Major>B.S. in Psychology</Major>, Minor in Computer Science</EducationDescription>
                </EducationContext>
                </div>
                
            </SchoolGrid>
        </div>
    );
}
