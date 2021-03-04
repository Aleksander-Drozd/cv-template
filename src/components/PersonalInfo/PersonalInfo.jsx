import React from 'react';

import SectionHeader from '../common/SectionHeader/SectionHeader';
import {Link} from '@react-pdf/renderer';
import PersonalInfoEntry from './PersonalInfoEntry/PersonalInfoEntry';

const personalInfoData = [
    {
        label: 'E-mail',
        value: 'example@example.com',
    },
    {
        label: 'Phone number',
        value: '+48 111 222 333',
    },
    {
        label: 'Github',
        value: <Link href={'https://github.com'}>github.com</Link>,
    },
];

const PersonalInfo = () => (
    <>
        <SectionHeader title={'Personal info'} />
        {personalInfoData.map(entry => (
            <PersonalInfoEntry {...entry} />
        ))}
    </>
);

export default PersonalInfo;
