import React from 'react';
import './PageTitle.css';

interface PageTitleProps {
    title: string;
}

const PageTitle = (props: PageTitleProps) => {
    const { title } = props;
    
    return <div className="page-title">{title}</div>;
};

export default React.memo(PageTitle);
