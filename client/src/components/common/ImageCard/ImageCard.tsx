import React from 'react';
import styles from './ImageCard.module.scss';

interface ImageProps {
    source: string;
    title: string;
    onClick?: (() => void | undefined) | undefined;
}

const ImageCard = (props: ImageProps) => {
    const { source, title, onClick } = props;
    return (
        <div className={styles.image_wrapper}>
            <div className={styles.image_box} onClick={() => onClick?.()}>
                <img className={styles.image} src={source} alt={title} />
                <h2 className={styles.image_title}>{title}</h2>
            </div>
        </div>
    );
};

export default ImageCard;
