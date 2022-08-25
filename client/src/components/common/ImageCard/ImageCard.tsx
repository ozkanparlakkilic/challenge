import React from 'react';
import './ImageCard.css';

interface ImageProps {
    source: string;
    title: string;
    onClick?: (() => void | undefined) | undefined;
}

const ImageCard = (props: ImageProps) => {
    const { source, title, onClick } = props;
    return (
        <div className="image-wrapper">
            <div className="image-box" onClick={() => onClick?.()}>
                <img className="image" src={source} alt={title} />
                <h2 className="image-title">{title}</h2>
            </div>
        </div>
    );
};

export default ImageCard;
