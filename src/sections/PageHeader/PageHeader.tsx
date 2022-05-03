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
    border-bottom: 2px dotted ${props => props.theme.primaryColor};
    color: ${props => props.theme.white};
    padding-top: 1em;
    padding-left: 1em;
    padding-bottom: 1em;
`;

export function PageHeader(props: PageHeaderProps): JSX.Element {

    return (
        <HeaderGrid>
            <ResumeTitle
                fullName="Wren Hawthorne"
                jobTitle="software engineer"
            />
            <ContactDetails
                email="wrenhawth@gmail.com"
                phone="+14438676452"
                github="https://github.com/wrenhawth"
            />
        </HeaderGrid>
    );
}
