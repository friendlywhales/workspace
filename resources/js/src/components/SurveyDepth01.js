import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
//import "./styles.css";
import "survey-react/survey.css";
import AppContainer from './AppContainer';

class SurveyDepth01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }
  render() {
    let json = {
      "pages": [
        {
            "navigationTitle": "Satisfaction",
            "navigationDescription": "Your feedback",
            "questions": [
                {
                    "type": "matrix",
                    "name": "Quality",
                    "title": "Please indicate if you agree or disagree with the following statements",
                    "columns": [
                        {
                            "value": 1,
                            "text": "Strongly Disagree"
                        }, {
                            "value": 2,
                            "text": "Disagree"
                        }, {
                            "value": 3,
                            "text": "Neutral"
                        }, {
                            "value": 4,
                            "text": "Agree"
                        }, {
                            "value": 5,
                            "text": "Strongly Agree"
                        }
                    ],
                    "rows": [
                        {
                            "value": "affordable",
                            "text": "Product is affordable"
                        }, {
                            "value": "does what it claims",
                            "text": "Product does what it claims"
                        }, {
                            "value": "better then others",
                            "text": "Product is better than other products on the market"
                        }, {
                            "value": "easy to use",
                            "text": "Product is easy to use"
                        }
                    ]
                }
              ]
            }
          ]
     };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      console.warn("설문끝??????")
    ) : null;
    return (
      <div>
        <AppContainer>
          {surveyRender}
          {onCompleteComponent}
        </AppContainer>
      </div>
    );
  }
}

export default SurveyDepth01;