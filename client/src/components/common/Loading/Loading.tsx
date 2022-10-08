import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styles from './Loading.module.scss';

interface LoadingProps {
    style?: Object;
    classname?: string;
}

const Loading = (props: LoadingProps) => {
    const { style, classname } = props;

    return (
        <div className={`${classname} ${styles.loading_box}`} style={style}>
            <FaSpinner className="fa-spin spinner" />
        </div>
    );
};

export default Loading;
