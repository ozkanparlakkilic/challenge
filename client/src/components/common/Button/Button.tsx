import React from 'react';
import styles from './Button.module.scss';

interface Props {
    title: string;
    style?: object;
    classname?: string | null;
    onClick?: () => void;
}

const Button = (props: Props) => {
    const { title, style, onClick, classname } = props;

    const handlerClick = (e: any) => {
        e.preventDefault();
        onClick?.();
    };

    return (
        <button
            className={`${classname ? classname : ''} ${styles.btn}`}
            style={style}
            onClick={(e) => handlerClick(e)}
        >
            {title}
        </button>
    );
};

export default React.memo(Button);
