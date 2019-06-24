import * as React from "react";

import { styled } from "../../../utils/theme";

interface NameProps {
    fullName: string;
    jobTitle: string;
}

export const NameHeader = styled.h1`
    font-family: ${props => props.theme.headerFont};
    margin-top: 0;
`;

export const TitleHeader = styled.h2`
    font-family: ${props => props.theme.headerFont};
`;

export function ResumeTitle(props: NameProps): JSX.Element {
    return (
        <div>
            <NameHeader>{props.fullName}</NameHeader>
            <TitleHeader>{props.jobTitle}</TitleHeader>
        </div>
    );
}
