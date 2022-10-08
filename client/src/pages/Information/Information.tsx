import React from 'react';
import { Logo, PageTitle } from '@/components/common';
import { ContentLayout } from '@/layouts';
import { CopyRight, DescriptionWrapper, SiteDescription } from './components';
import styles from './Information.module.scss';

const Information = () => {
    return (
        <ContentLayout>
            <PageTitle title="Information" />
            <ContentLayout>
                <DescriptionWrapper>
                    <Logo classname={`${styles.logo_box}`} width='200px' height='140px' />
                    <SiteDescription />
                </DescriptionWrapper>
                <CopyRight />
            </ContentLayout>
        </ContentLayout>
    );
};

export default Information;