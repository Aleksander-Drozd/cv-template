import React from 'react';

import {SectionHeader} from '../common';
import EducationEntry from './EducationEntry/EducationEntry';

const educationData = [
    {
        start: '2014',
        end: '2018',
        academy: 'Harvard University',
        major: 'Computer science',
        degree: "Engineer's degree",
        achievements: ["Chancellor's Scholarship"],
    },
    {
        start: '2018',
        end: '2019',
        academy: 'Harvard University',
        major: 'Computer science',
        degree: "Master's degree",
        achievements: ["Chancellor's Scholarship"],
    },
];

const Education = () => (
    <>
        <SectionHeader title={'Education'} />
        {educationData.map(entry => (
            <EducationEntry key={entry.start} {...entry} />
        ))}
    </>
);

export default Education;
