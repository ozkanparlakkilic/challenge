import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './userModel';

export interface IQuiz extends Document {
    title: string;
    description: string;
    duration: number;
    start_date: Date;
    end_date: Date;
    isFinish: boolean;
    questions: {
        title: string;
        options: { id: number; title: string; selected: false };
        answer: { id: number; point: number };
    }[];
    solvers: {
        _id: IUser['_id'];
        result: {
            correctAnswers: number;
            wrongAnswers: number;
            quizPoint: number;
            durationPoint: number;
            totalPoint: number;
        };
    }[];
}

const quizSchema: Schema<IQuiz> = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        start_date: {
            type: Date,
            required: true,
        },
        end_date: {
            type: Date,
            required: true,
        },
        isFinish: {
            type: Boolean,
            required: true,
            default: false,
        },
        questions: [
            {
                title: String,
                options: [
                    {
                        id: Number,
                        title: String,
                        selected: false,
                    },
                ],
                answer: {
                    id: Number,
                    point: Number,
                },
            },
        ],
        solvers: [
            {
                solver: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'user',
                    required: true,
                },
                result: {
                    correctAnswers: {
                        type: Number,
                        default: 0,
                        required: true,
                    },
                    wrongAnswers: {
                        type: Number,
                        default: 0,
                        required: true,
                    },
                    quizPoint: {
                        type: Number,
                        default: 0,
                        required: true,
                    },
                    durationPoint: {
                        type: Number,
                        default: 0,
                        required: true,
                    },
                    totalPoint: {
                        type: Number,
                        default: 0,
                        required: true,
                    },
                },
            },
        ],
    },
    {
        timestamps: true,
    },
);

const Quiz = mongoose.model<IQuiz>('quiz', quizSchema);

export default Quiz;
