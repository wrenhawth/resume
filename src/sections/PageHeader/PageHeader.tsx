import * as React from "react";
import styled from "styled-components/macro";

import { ResumeTitle } from "./components/ResumeTitle";
import { ContactDetails } from "./components/ContactDetails";

interface PageHeaderProps {
}

const HeaderGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.white};
    padding-top: 1em;
    padding-left: 1em;
    -webkit-print-color-adjust: exact !important;
`;

export function PageHeader(props: PageHeaderProps): JSX.Element {

    return (
        <HeaderGrid>
            <ResumeTitle
                fullName="Joshua Robusto"
                jobTitle="software engineer"
            />
            <ContactDetails
                email="joshuarobusto@gmail.com"
                phone="+14438676452"
                github="https://github.com/jrobusto"
            />
        </HeaderGrid>
    );
}
