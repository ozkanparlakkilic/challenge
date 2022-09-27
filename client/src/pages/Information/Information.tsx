import React from 'react';
import { Logo, PageTitle } from '../../components/common';
import { ContentLayout } from '../../layouts';
import { CopyRight, DescriptionWrapper, SiteDescription } from './components';
import './Information.css';

const Information = () => {
    return (
        <ContentLayout>
            <PageTitle title="Information" />
            <ContentLayout>
                <DescriptionWrapper>
                    <Logo classname='logo-box' width='200px' height='140px' />
                    <SiteDescription />
                </DescriptionWrapper>
                <CopyRight />
            </ContentLayout>
        </ContentLayout>
    );
};

export default Information;