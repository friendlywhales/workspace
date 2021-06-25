import React, { useEffect, useState } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

const Survey1 = ({ onComplete }) => {

    let surveyJson = {
        "pages": [
        {
        "name": "page1",
        "elements": [
            {
            "type": "text",
            "name": "name",
            "title": "회사명",
            // "isRequired": true,
            "autoComplete": "name"
            },
            {
            "type": "text",
            "name": "question2",
            "title": "성명",
            // "isRequired": true,
            "autoComplete": "name"
            },
            {
            "type": "text",
            "name": "question1",
            "title": "부서",
            // "isRequired": true
            },
            {
            "type": "text",
            "name": "question3",
            "title": "직위",
            // "isRequired": true
            },
            {
            "type": "text",
            "name": "question4",
            "title": "주소",
            // "isRequired": true
            },
            {
            "type": "text",
            "name": "question5",
            "title": "전화번호",
            // "isRequired": true,
            "validators": [
            {
            "type": "expression",
            "text": "###-###-####"
            }
            ],
            "autoComplete": "tel",
            "placeHolder": "010-0000-0000"
            },
            {
            "type": "text",
            "name": "email",
            "title": "E-mail:",
            // "isRequired": true,
            "validators": [
            {
            "type": "email"
            }
            ],
            "inputType": "email",
            "autoComplete": "email",
            "placeHolder": "jon.snow@nightwatch.org"
            },
            {
            "type": "text",
            "name": "question6",
            "title": "팩스(FAX)"
            },
            {
            "type": "checkbox",
            "name": "question1",
            "title": "개발분야",
            // "isRequired": true,
            "choices": [
            "의약품",
            "의료기기",
            "디지털헬스케어",
            "화장품",
            "건강기능식품",
            "동물의약품",
            "전임상시험",
            "PoC(Proof of concept)",
            "Pivotal 임상시험",
            "가교시험",
            "시판 후 임상시험",
            "리포지셔닝 임상시험",
            "연구자주도임상시험",
            "마케팅 임상시험"
            ],
            "hasOther": true,
            "otherText": "기타 (설명)"
            }
        ]
        }
        ]
    };

    return (
        <Survey.Survey
            json={surveyJson}
            showCompletedPage={false}
            onComplete={(result) => onComplete(result.data)}
        />
    );
}

export default Survey1;