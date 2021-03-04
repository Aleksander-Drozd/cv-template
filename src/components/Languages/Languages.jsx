import React from 'react';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import LanguageEntry from './LanguageEntry/LanguageEntry';

const languagesData = [
    {
        label: 'English',
        level: 'B2',
    },
    {
        label: 'Spanish',
        level: 'A2',
    },
];

const Languages = () => (
    <>
        <SectionHeader title={'Languages'} aside />
        {languagesData.map(entry => (
            <LanguageEntry key={entry.label} {...entry} />
        ))}
    </>
);

export default Languages;
