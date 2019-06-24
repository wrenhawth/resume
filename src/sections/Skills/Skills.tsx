import * as React from "react";
import { SectionName } from "../../components/SectionName";
import { Icon } from "../../components/Icon";
import { styled } from "../../utils/theme";

interface SkillsProps {
}

const SkillsList = styled.p`
    font-family: ${props => props.theme.headerFont}
`;

const Level = styled.span`
    font-weight: normal;
`

export function Skills(props: SkillsProps): JSX.Element {

    return (
        <div>
            <SectionName><Icon type="construct"/> Skills</SectionName>
            <SkillsList>
                <p><Level>Experienced</Level>: React, Typescript, Node.js, HTML, SCSS, MongoDB</p>
                <p><Level>Working Knowledge</Level>: Python, SQL, Docker, Amazon SQS</p>
            </SkillsList>
        </div>
    );
}
