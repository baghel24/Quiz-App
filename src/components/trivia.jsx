import { useEffect, useState } from "react";

export default function Trivia({data, setStop, questionnumber, setQuestionNumber
})
  {
    const [question, setQuestion] = useState(null);
    const [selectAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    
  
    useEffect(()=>{
      setQuestion(data[questionnumber- 1])
    },[data, questionnumber]);
    
    const delay = (duration, callback) => {
      setTimeout(() => {
        callback();
      }, duration);
    }
    const handleclick = (a) =>{
      setSelectedAnswer(a);
      setClassName("answer active");
      delay(3000, () =>
      setClassName(a.correct ? "answer correct " : "answer wrong")
      );
      delay(6000, () =>{
        if(a.correct){
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        }
        else{
          setStop(true);
        }
      }
      )
    };
  return (
    
    <div className='trivia'>
      <div className="questionnumber">Question {question?.id}:
        <div className="question">{question?.question}
        </div></div>
        <div className="answers">
          {question?.answers.map((a) =>(
          <div className= {selectAnswer===a? className : "answer"} onClick={()=> handleclick(a)}>
          {a.text}</div>
          ))}
        

        </div>
    </div>
  )
}
