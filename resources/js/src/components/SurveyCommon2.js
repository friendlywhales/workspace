import React, { useEffect, useState } from "react";
import AppContainer from './AppContainer';
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";

const SurveyCommon2 = () => {
  const [surveyStep, setSurveyStep] = useState(1);
  const [survey1Data, setSurvey1Data] = useState(null);
  const [survey2Data, setSurvey2Data] = useState(null);

  const onSurvey1Complete = (data) => {
    setSurvey1Data(data);
    setSurveyStep(2);
  }

  const onSurvey2Complete = (data) => {
    setSurvey2Data(data);
    setSurveyStep(3);
  }

  return (
    <div>
      <AppContainer>
        {surveyStep == 1 && <Survey1 onComplete={onSurvey1Complete} />}
        {surveyStep == 2 && <Survey2 onComplete={onSurvey2Complete} />}
        {surveyStep == 3 && <div>OK!!!!</div>}
      </AppContainer>
    </div>
  );
}

export default SurveyCommon2;