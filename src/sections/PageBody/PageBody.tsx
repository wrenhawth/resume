import * as React from "react";

import { styled } from "../../utils/theme";
import { Experience } from "./Experience/Experience";
import { Education } from "./Education/Education";
import { TechnicalSkills } from "../Skills/TechnicalSkills";
import { OtherSkills } from "../Skills/OtherSkills";

interface PageBodyProps {
}

const BodyDiv = styled.div`
    padding-left: 1em;
`;

const TwoColumns = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-column-gap: 1em;
`

export function PageBody(props: PageBodyProps): JSX.Element {

    return (
        <BodyDiv>
            {/* </SplitColumns> */}
            <TwoColumns>
                <TechnicalSkills />
                <OtherSkills />
            </TwoColumns>
                <Experience />
                <Education />
        </BodyDiv>
    );
}
