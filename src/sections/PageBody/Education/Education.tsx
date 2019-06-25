import * as React from "react";

import { SectionName } from "../../../components/SectionName";
import { Icon } from "../../../components/Icon";
import { styled } from "../../../utils/theme";
import { SidebarHeader } from "../../../components/SidebarHeader";
import { DateRange } from "../../../components/DateRange";
import { ItemTitle } from "../../../components/ItemTitle";

interface EducationProps {
}

const SchoolGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-row-gap: 1em;
`

const EducationContext = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
const EducationDescription = styled.p`
    margin: 0;
    font-family: ${props => props.theme.bodyFont};
    font-style: italic;
`;

export function Education(props: EducationProps): JSX.Element {

    return (
        <div>
            <SectionName><Icon type="school" /> Education</SectionName>
            <SchoolGrid>
                <div>
                    <SidebarHeader>Georgia Tech</SidebarHeader>
                    <DateRange>2017 - 2018</DateRange>
                </div>
                <div>
                    <EducationDescription>Graduate coursework in Artificial Intelligence, Robotics, &amp; Data Visualization</EducationDescription>
                </div>
                <div>
                    <SidebarHeader>University of Maryland</SidebarHeader>
                    <DateRange>2010 - 2013</DateRange>
                </div>
                <EducationContext>
                    <ItemTitle>B.S. in Psychology</ItemTitle>
                    <EducationDescription>Minor in Computer Science</EducationDescription>
                </EducationContext>
            </SchoolGrid>
        </div>
    );
}
