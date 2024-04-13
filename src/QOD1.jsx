// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function QOD() {
    const questions = [
        {
            type: "radiogroup",
            name: "question1",
            title: "What should you do before operating heavy machinery?",
            choices: [
                "Check the machinery for any faults",
                "Start using it immediately",
                "Let others know after you start",
                "None of the above"
            ],
            correctAnswer: "Check the machinery for any faults",
            incorrectAnswerInfo: "Always check machinery for faults before use to prevent accidents."
        },
        {
            type: "radiogroup",
            name: "question2",
            title: "In case of a fire, what is the first thing you should do?",
            choices: [
                "Hide under a desk",
                "Call your family",
                "Evacuate and call emergency services",
                "Take photos for evidence"
            ],
            correctAnswer: "Evacuate and call emergency services",
            incorrectAnswerInfo: "Safety first: evacuate immediately and then call for help."
        },
        {
            type: "radiogroup",
            name: "question3",
            title: "What is the purpose of wearing safety goggles?",
            choices: [
                "Fashion statement",
                "Protecting your eyes from hazards",
                "Improving vision",
                "None of the above"
            ],
            correctAnswer: "Protecting your eyes from hazards",
            incorrectAnswerInfo: "Safety goggles are meant to protect your eyes from flying debris or hazardous splashes."
        },
        {
            type: "radiogroup",
            name: "question4",
            title: "How often should safety drills be conducted in the workplace?",
            choices: [
                "Once a year",
                "Monthly",
                "Weekly",
                "As deemed necessary by management"
            ],
            correctAnswer: "As deemed necessary by management",
            incorrectAnswerInfo: "Frequent drills ensure everyone knows the emergency procedures."
        },
        {
            type: "radiogroup",
            name: "question5",
            title: "What is the best practice for lifting heavy objects?",
            choices: [
                "Use your back",
                "Bend at the knees and use your legs",
                "Ask a colleague to watch while you lift",
                "Guess the weight and proceed"
            ],
            correctAnswer: "Bend at the knees and use your legs",
            incorrectAnswerInfo: "Using your legs reduces the strain on your back."
        },
        {
            type: "radiogroup",
            name: "question6",
            title: "Which is NOT a proper way to exit a building during an emergency?",
            choices: [
                "Using the elevator",
                "Taking the stairs",
                "Following the exit signs",
                "Staying calm and moving swiftly"
            ],
            correctAnswer: "Using the elevator",
            incorrectAnswerInfo: "In emergencies, elevators could malfunction. Always use the stairs."
        },
        {
            type: "radiogroup",
            name: "question7",
            title: "What should you do if you discover a leak of unknown liquid?",
            choices: [
                "Ignore it",
                "Clean it up immediately",
                "Report it to the appropriate personnel",
                "Taste it to determine the chemical"
            ],
            correctAnswer: "Report it to the appropriate personnel",
            incorrectAnswerInfo: "Unknown liquids can be hazardous. Always report them."
        },
        {
            type: "radiogroup",
            name: "question8",
            title: "Why are fire drills important?",
            choices: [
                "They are a good time to socialize",
                "They prepare employees for an emergency",
                "They are legally not required",
                "They waste time"
            ],
            correctAnswer: "They prepare employees for an emergency",
            incorrectAnswerInfo: "Fire drills ensure everyone knows how to exit safely during an emergency."
        },
        {
            type: "radiogroup",
            name: "question9",
            title: "What is the correct procedure for reporting accidents in the workplace?",
            choices: [
                "Keep it to yourself",
                "Report to a supervisor or safety officer",
                "Write it down and forget about it",
                "Wait for someone else to report it"
            ],
            correctAnswer: "Report to a supervisor or safety officer",
            incorrectAnswerInfo: "Always report accidents immediately to prevent future incidents."
        },
        {
            type: "radiogroup",
            name: "question10",
            title: "Why should spill kits be accessible in the workplace?",
            choices: [
                "They are not necessary",
                "For cleaning up messes that could cause slips",
                "Only for decoration",
                "For cooking purposes"
            ],
            correctAnswer: "For cleaning up messes that could cause slips",
            incorrectAnswerInfo: "Spill kits help prevent accidents by cleaning up hazardous spills."
        }
    ];

    const nQuestion = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[nQuestion];

    const surveyJson = {
        title: "Daily Safety Quiz",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        html: "You are about to start a daily quiz on workplace safety. <br>Please answer the questions based on best practices and guidelines.<br>Enter your name below and click <b>Start Quiz</b> to begin."
                    },
                    {
                        type: "text",
                        name: "username",
                        titleLocation: "hidden",
                        isRequired: true
                    }
                ]
            },
            {
                elements: [selectedQuestion]
            }
        ]
    };

    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        const question = sender.getQuestionByName(selectedQuestion.name);
        const correctAnswer = question.correctAnswer;
        const userAnswer = question.value;

        if (userAnswer !== correctAnswer) {
            alert(`Incorrect Answer: ${selectedQuestion.incorrectAnswerInfo}`);
        } else {
            alert("Correct Answer: Well done!");
        }
    });

    return <Survey model={survey} />;
}
