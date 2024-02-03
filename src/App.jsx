import { useEffect, useState } from "react";
import "./App.css";
import Trivia from "./components/trivia";
import Timer from "./components/timer";
import Start from "./components/start";

// import "./Trivia.jsx";



function App() {
  
  const [username, setUsername] = useState(null);
  const [questionnumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");

  const data = [
    {
      id: 1,
      question: "Which of the following is the correct syntax to add the header file in the C++ program?",
      answers: [
        {
          text: "a. #include<userdefined>",
          correct: false,
        },
        {
          text: 'b. #include "userdefined.h"',
          correct: false,
        },
        {
          text: 'c. <include> "userdefined.h"',
          correct: false,
        },
        {
          text: "d. Both A and B",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following is the correct syntax to print the message in C++ language?",
      answers: [
        {
          text: 'a. cout <<"Hello world!";',
          correct: true,
        },
        {
          text: 'b. Cout << Hello world! ;',
          correct: false,
        },
        {
          text: 'c. Out <<"Hello world!;',
          correct: false,
        },
        {
          text: "d. None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which of the following is the correct identifier?",
      answers: [
        {
          text: "a. $var_name",
          correct: false,
        },
        {
          text: 'b. VAR_123',
          correct: true,
        },
        {
          text: 'c. varname@',
          correct: false,
        },
        {
          text: "d. None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which of the following is the address operator?",
      answers: [
        {
          text: "a. @",
          correct: false,
        },
        {
          text: 'b. #',
          correct: false,
        },
        {
          text: 'c. &',
          correct: true,
        },
        {
          text: "d. %",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following features must be supported by any programming language to become a pure object-oriented programming language?",
      answers: [
        {
          text: "a. Encapsulation",
          correct: false,
        },
        {
          text: 'b. Inheritance',
          correct: false,
        },
        {
          text: 'c. Polymorphism',
          correct: false,
        },
        {
          text: "d. All of the above",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "The programming language that has the ability to create new data types is called___.",
      answers: [
        {
          text: "a. Overloaded",
          correct: false,
        },
        {
          text: 'b. Encapsulated',
          correct: false,
        },
        {
          text: 'c. Reprehensible',
          correct: false,
        },
        {
          text: "d. Extensible",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Which of the following is the original creator of the C++ language?",
      answers: [
        {
          text: "a. Dennis Ritchie",
          correct: false,
        },
        {
          text: 'b. Ken Thompson',
          correct: false,
        },
        {
          text: 'c. Bjarne Stroustrup',
          correct: true,
        },
        {
          text: "d. Brian Kernighan",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which of the following is the correct syntax to read the single character to console in the C++ language?",
      answers: [
        {
          text: "a. Read ch()",
          correct: false,
        },
        {
          text: 'b. Getline vh()',
          correct: false,
        },
        {
          text: 'c. get(ch)',
          correct: true,
        },
        {
          text: "d. Scanf(ch)",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which of the following statements is correct about the formal parameters in C++?",
      answers: [
        {
          text: "a. Parameters with which functions are called",
          correct: true,
        },
        {
          text: 'b. Parameters which are used in the definition of the function',
          correct: false,
        },
        {
          text: 'c. Variables other than passed parameters in a function',
          correct: false,
        },
        {
          text: "d. Variables that are never used in the function",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "The C++ language is ______ object-oriented language.",
      answers: [
        {
          text: "a. Pure Object oriented",
          correct: false,
        },
        {
          text: 'b. Not Object oriented',
          correct: true,
        },
        {
          text: 'c. Semi Object-oriented or Partial Object-oriented',
          correct: false,
        },
        {
          text: "d. None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which of the following features is required to be supported by the programming language to become a pure object-oriented programming language?",
      answers: [
        {
          text: "a. Encapsulation",
          correct: false,
        },
        {
          text: 'b. Inheritance',
          correct: false,
        },
        {
          text: 'c. Polymorphism',
          correct: false,
        },
        {
          text: "d. All of the above",
          correct: true,
        },
      ],
    },
   
  ];

  const perfromancepyramid =[
    {id:1, points : "50"},//increase by 50
    {id:2, points : "100"},
    {id:3, points : "150"},
    {id:4, points : "200"},
    {id:5, points : "250"},
    {id:6, points : "350"},//increase by 100
    {id:7, points : "450"},
    {id:8, points : "550"},
    {id:9, points : "650"},
    {id:10, points : "750"},
    {id:11, points : "1000"},//increase by 250
    {id:12, points : "1250"},
    {id:13, points : "1500"},
    {id:14, points : "1750"},
    {id:15, points : "2000"},
    {id:16, points : "2500"},//increase by 500
    {id:17, points : "3000"},
    {id:18, points : "3500"},
    {id:19, points : "4000"},
    {id:20, points : "4500"},
    {id:21, points : "5500"},//increase by 1000
    {id:22, points : "6500"},
    {id:23, points : "7500"},
    {id:24, points : "8500"},
    {id:25, points : "9500"},
    {id:26, points : "11000"},//increase by 1500
    {id:27, points : "12500"},
    {id:28, points : "14000"},
    {id:29, points : "17000"},//increase by 3000
    {id:30, points : "20000"},
  ].reverse();
  useEffect(() => {
    questionnumber >1 &&
    setEarned(perfromancepyramid.find((m) => m.id === questionnumber -1).points);
  }, [perfromancepyramid, questionnumber]);
  return (
    
    <div className="App">
      {username ? (
        <>
        <div className="main">
        {stop ? <h1 className="endtext"> You Score: {earned} </h1>:( 
       <><div className="top">
        <div className="box"></div>
        <div className="wave"></div>
          <div className="timer"><Timer  setStop = {setStop} questionnumber={questionnumber}/></div>
        </div>
        <div className="bottom">
          <Trivia data={data} 
          setStop={setStop}
          setQuestionNumber={setQuestionNumber}
          questionnumber={questionnumber}
          />
          </div></>
          )}
      </div>
      <div className="pyramid">
      <ul className="performancelist">
        {perfromancepyramid.map((m) => (
        <li className={questionnumber === m.id ? "performancelistitem active" : "performancelistitem"}>
        {/* <span className="perfromancepointlistnumber">{m.id}</span> */}
        <span className="perfromancepoints">{m.points}</span>
        </li>
        ))}
      </ul>
    </div>
        </>
       ) :  (<Start setUsername={setUsername} />)}
      
      {/* )} */}
      </div>
  );
}

export default App;
