import React from 'react';
import styles from './Input.module.scss';
import { useCallback } from 'react';

interface Props {
    placeholder: string;
    type: string;
    name?: string;
    style?: object;
    classname?: string | null;
    error?: boolean | null;
    errorMsg?: string | null;
    onChange: (e: any) => void;
}

const Input = (props: Props) => {
    const { placeholder, type, name, style, classname, onChange, error, errorMsg } = props;

    const handleOnChange = useCallback((e: any) => {
        onChange?.(e);
    },[onChange]);

    return (
        <div className={`${styles.input_box}`}>
            <input
                className={`${classname ? classname : ''} ${styles.input}`}
                placeholder={placeholder}
                style={style}
                type={type}
                name={name}
                onChange={(e) => handleOnChange?.(e)}
                autoComplete="off"
            />
            {error && <span className={styles.error_text}>{errorMsg ? errorMsg + ' *' : 'Zorunlu alan *'}</span>}
        </div>
    );
};

export default Input;
