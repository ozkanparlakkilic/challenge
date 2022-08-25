import React from 'react';
import './HomePage.css';
import ImageCard from '../../components/common/ImageCard/ImageCard';
import QuizImage from '../../assets/quiz.png';
import AskUsImage from '../../assets/ask-us.png';
import ChallengeImage from '../../assets/challenge.png';
import QuestionImage from '../../assets/question.png';
import LeaderBoardImage from '../../assets/leaderboard.png';
import InformationImage from '../../assets/information.png';
import JokerImage from '../../assets/joker.png';
import EducationImage from '../../assets/education.png';
import Friends from '../../assets/friends.png';
import ContentLayout from '../../layouts/ContentLayout/ContentLayout';

const HomePage = () => {

    return (
        <ContentLayout classname="extra-content-layout-style">
            <div className="d-flex homepage-wrapper">
                <ImageCard source={QuizImage} title="Quiz" />
                <ImageCard source={EducationImage} title="Education" />
                <ImageCard source={JokerImage} title="Joker" />
                <ImageCard source={QuestionImage} title="Question" />
                <ImageCard source={ChallengeImage} title="Challenge" />
                <ImageCard source={LeaderBoardImage} title="LeaderBoard" />
                <ImageCard source={Friends} title="Friends" />
                <ImageCard source={AskUsImage} title="Ask Us" />
                <ImageCard source={InformationImage} title="Information" />
            </div>
        </ContentLayout>
    );
};

export default HomePage;
