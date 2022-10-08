import React from 'react';
import styles from './SiteDescription.module.scss'

const SiteDescription = () => {
    return (
        <div className={`${styles.site_description}`}>
            In this application, you can solve quizzes, discuss questions, download documents and challenge your friend.
        </div>
    );
};

export default SiteDescription;
