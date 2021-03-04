import React from 'react';

import SectionHeader from '../common/SectionHeader/SectionHeader';
import ExperienceEntry from './ExperienceEntry/ExperienceEntry';

const experienceData = [
    {
        start: '10.2018',
        end: '06.2019',
        position: 'Frontend deleveloper',
        company: 'Soft creators',
        bulletPoints: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi',
            'assumenda at autem commodi cumque delectus deleniti distinctio dolor',
            'dolore ea enim, error et harum hic impedit iste laboriosam, laborum',
            'maxime natus neque quae quaerat ullam vero vitae voluptas voluptatem',
        ],
    },

    {
        start: '10.2018',
        end: '06.2019',
        position: 'Frontend deleveloper',
        company: 'Soft creators',
        bulletPoints: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi',
            'assumenda at autem commodi cumque delectus deleniti distinctio dolor',
            'dolore ea enim, error et harum hic impedit iste laboriosam, laborum',
            'maxime natus neque quae quaerat ullam vero vitae voluptas voluptatem',
        ],
    },
];

const Experience = () => (
    <>
        <SectionHeader title={'Experience'} />
        {experienceData.map(entry => (
            <ExperienceEntry key={entry.start} {...entry} />
        ))}
    </>
);

export default Experience;
