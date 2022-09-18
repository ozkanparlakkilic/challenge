import React from 'react';
import {
    AskUsImage,
    ChallengeImage,
    EducationImage,
    FriendsImage,
    InformationImage,
    JokerImage,
    LeaderBoardImage,
    QuestionImage,
    QuizImage,
} from '../../assets';
import { ImageCard } from '../../components/common';
import { ContentLayout } from '../../layouts';
import styles from './Home.module.css';

const Home = () => {
    return (
        <ContentLayout classname={styles.extra_content_layout_style}>
            <div className={`d-flex ${styles.homepage_wrapper}`}>
                <ImageCard source={QuizImage} title="Quiz" />
                <ImageCard source={EducationImage} title="Education" />
                <ImageCard source={JokerImage} title="Joker" />
                <ImageCard source={QuestionImage} title="Question" />
                <ImageCard source={ChallengeImage} title="Challenge" />
                <ImageCard source={LeaderBoardImage} title="LeaderBoard" />
                <ImageCard source={FriendsImage} title="Friends" />
                <ImageCard source={AskUsImage} title="Ask Us" />
                <ImageCard source={InformationImage} title="Information" />
            </div>
        </ContentLayout>
    );
};

export default Home;
