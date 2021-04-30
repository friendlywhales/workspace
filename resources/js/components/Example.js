import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';


Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    questions: [
        {
            name: "name",
            type: "text",
            title: "Please enter your name:",
            placeHolder: "Jon Snow",
            isRequired: true,
            autoComplete: "name"
        }, {
            name: "birthdate",
            type: "text",
            inputType: "date",
            title: "Your birthdate:",
            isRequired: true,
            autoComplete: "bdate"
        }, {
            name: "color",
            type: "text",
            inputType: "color",
            title: "Your favorite color:"
        }, {
            name: "email",
            type: "text",
            inputType: "email",
            title: "Your e-mail:",
            placeHolder: "jon.snow@nightwatch.org",
            isRequired: true,
            autoComplete: "email",
            validators: [
                {
                    type: "email"
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("root"));