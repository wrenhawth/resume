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

const Area = styled.span`
    font-family: ${props => props.theme.headerFont};
    font-weight: normal;
`

export function OtherSkills(): JSX.Element {

    return (
        <div>
            <SectionName><Icon type="star"/>Skills</SectionName>
            <SkillsList>
                <SkillsItem><Area>Leadership</Area>: Guiding and facilitating platform working group discussions on code standards and best practices</SkillsItem>
                <SkillsItem><Area>Problem Solving</Area>: Identifying and evaluating potential technical approaches for requirements through collaboration with other engineers, product, and UX designers</SkillsItem>
                <SkillsItem><Area>Mentorship</Area>: Onboarding new engineers onto the team to set them up for success. Regular 1:1s to share helpful resources and provide support and guidance for other engineers</SkillsItem>
            </SkillsList>
        </div>
    );
}
