import React from 'react';

import {SectionHeader} from '../common';
import SkillEntry from './SkillEntry/SkillEntry';

const skillsData = [
    {
        label: 'React',
        level: 80,
    },
    {
        label: 'Java',
        level: 80,
    },
    {
        label: 'React-native',
        level: 60,
    },
];

const Skills = () => (
    <>
        <SectionHeader title={'Programming skills'} />
        {skillsData.map(entry => (
            <SkillEntry {...entry} />
        ))}
    </>
);

export default Skills;
