import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './Loading.css';

interface LoadingProps {
    style?: Object;
    classname?: string;
}

const Loading = (props: LoadingProps) => {
    const { style, classname } = props;

    return (
        <div className={`${classname} d-flex justify-content-center align-items-center h-100`} style={style}>
            <FaSpinner className="fa-spin spinner" />
        </div>
    );
};

export default Loading;
