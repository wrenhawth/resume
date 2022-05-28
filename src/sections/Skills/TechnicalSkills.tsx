import * as React from "react";
import { SectionName } from "../../components/SectionName";
import { Icon } from "../../components/Icon";
import { styled } from "../../utils/theme";

const SkillsList = styled.div`
    font-family: ${props => props.theme.headerFont};
`

const SkillsItem = styled.p`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`

const Level = styled.span`
    font-weight: normal;
`

export function TechnicalSkills(): JSX.Element {

    return (
        <div>
            <SectionName><Icon type="construct"/>Technologies</SectionName>
            <SkillsList>
                <SkillsItem><Level>Experienced</Level>: React, Redux, TypeScript, Node.js, HTML, Styled-Components</SkillsItem>
                <SkillsItem><Level>Working Knowledge</Level>: GraphQL, Docker, Storybook, Webpack, Amazon SQS, Amazon Lambda</SkillsItem>
                <SkillsItem><Level>Previous Exposure</Level>: D3.js, AngularJS, Express, Python</SkillsItem>
            </SkillsList>
        </div>
    );
}
