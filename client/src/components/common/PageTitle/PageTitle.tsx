import React from 'react';
import styles from './PageTitle.module.scss';

interface PageTitleProps {
    title: string;
}

const PageTitle = (props: PageTitleProps) => {
    const { title } = props;
    
    return <div className={`${styles.page_title}`}>{title}</div>;
};

export default React.memo(PageTitle);
