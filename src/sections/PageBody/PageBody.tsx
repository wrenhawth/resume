import * as React from "react";

import { styled } from "../../utils/theme";
import { Experience } from "./Experience/Experience";
import { Education } from "./Education/Education";
import { Skills } from "../Skills/Skills";

interface PageBodyProps {
}

const BodyDiv = styled.div`
    padding-left: 1em;
`;

const TwoColumns = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 1em;
`

export function PageBody(props: PageBodyProps): JSX.Element {

    return (
        <BodyDiv>
            <Experience />
            <TwoColumns>
                <Education />
                <Skills />
            </TwoColumns>
        </BodyDiv>
    );
}
