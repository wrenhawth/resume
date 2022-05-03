import * as React from "react";

import { styled } from "../../../utils/theme";

interface NameProps {
    fullName: string;
    jobTitle: string;
}

export const NameHeader = styled.h1`
    font-family: ${props => props.theme.headerFont};
    margin-top: 0;
    margin-bottom: 0;
`;

export const Pronouns = styled.span`
    /* font-family: ${props => props.theme.bodyFont}; */
    font-size: 16px;
`
export const TitleHeader = styled.h2`
    font-family: ${props => props.theme.headerFont};
    margin-top: 0;
    margin-bottom: 0;
`;

export function ResumeTitle(props: NameProps): JSX.Element {
    return (
        <div>
            <NameHeader>{props.fullName} <Pronouns>(they/them)</Pronouns></NameHeader>
            <TitleHeader>{props.jobTitle}</TitleHeader>
        </div>
    );
}
