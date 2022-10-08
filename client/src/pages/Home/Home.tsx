import React from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@/assets';
import { ImageCard } from '@/components/common';
import { ContentLayout } from '@/layouts';
import styles from './Home.module.scss';

const Home = () => {

    const navigate = useNavigate();

    return (
        <ContentLayout classname={styles.extra_content_layout_style}>
            <div className={`${styles.homepage_wrapper}`}>
                <ImageCard source={QuizImage} title="Quiz" onClick={() => navigate("quiz-list")} />
                <ImageCard source={EducationImage} title="Education" />
                <ImageCard source={JokerImage} title="Joker" />
                <ImageCard source={QuestionImage} title="Question" />
                <ImageCard source={ChallengeImage} title="Challenge" />
                <ImageCard source={LeaderBoardImage} title="LeaderBoard" />
                <ImageCard source={FriendsImage} title="Friends" />
                <ImageCard source={AskUsImage} title="Ask Us" />
                <ImageCard source={InformationImage} title="Information" onClick={() => navigate("information")}/>
            </div>
        </ContentLayout>
    );
};

export default Home;
