import React from 'react';
import './Input.css';

interface Props {
    placeholder: string;
    type: string;
    style?: object;
    classname?: string | null;
    error?: boolean | null;
    errorMsg?: string | null;
    onChange: (e: any) => void;
}

const Input = (props: Props) => {
    const { placeholder, type, style, classname, onChange, error, errorMsg } = props;

    const handleOnChange = (e: any) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="w-100 d-flex flex-direction-column align-items-start">
            <input
                className={`${classname ? classname : ''} input`}
                placeholder={placeholder}
                style={style}
                type={type}
                onChange={(e) => handleOnChange?.(e)}
                autoComplete="off"
            />
            {error && <span className="error-text">{errorMsg ? errorMsg + ' *' : 'Zorunlu alan *'}</span>}
        </div>
    );
};

export default Input;
