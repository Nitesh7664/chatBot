import React, {useState, useEffect, useRef} from 'react'

import {questions} from './questions'
import Message from './Message'
import './style.css'

function App() {

   const [messages, setMessages] = useState([])
   const [question, setQuestion] = useState(questions)
   const [answerValue, setAnswerValue] = useState(questions.answerValue)
   const [userInput, setUserInput] = useState("")
   const initialRender = useRef(true)

   
   useEffect(() => {
      
      window.document.getElementById('messageContainer').scrollTo(0, document.getElementById('messageContainer').scrollHeight)
      if(initialRender.current)
         addDefaultMessage()
   }, [setMessages, initialRender.current, messages])

   const checkUserInput = () => {
      return answerValue.find(answer => answer == userInput)
   }

   const checkState = () => {
      console.log(question)
      console.log(answerValue)
   }

   const addDefaultMessage = () => {
      if(initialRender.current && question.type == undefined || checkUserInput()){


         const userInputMessage = {
            type: "userMessage",
            output: <div>
               {userInput}
            </div>
         }
         if(userInput !== '') setMessages(oldMessages => [...oldMessages, userInputMessage])

         if(initialRender.current){
            const botMessage = {
               type: "botMessage",
               output: <ul>
                  {
                     question.question.map((_question, index) => <li key={index}>{_question}</li>)
                  }  
               </ul>
            }
            setMessages(oldMessages => [...oldMessages, botMessage])
            setAnswerValue(question.answerValue)
            initialRender.current = false
         }
         else if(question.hasQuestion && question.answers[userInput].hasQuestion){
            const botMessage = {
               type: "botMessage",
               output: <ul>
                  {
                     question.answers[userInput].question.map((_question, index) => <li key={index}>{_question}</li>)
                  }  
               </ul>
            }
            setQuestion(question.answers[userInput])
            setAnswerValue(question.answers[userInput].answerValue)
            setMessages(oldMessages => [...oldMessages, botMessage] )
         }else{
            const botMessage = {
               type: "botMessage",
               output: <ul>
                  {
                     question.answers[userInput].result.map((_result, index) => <li key = {index}>{_result}</li>)
                  }
               </ul>
            }

            setQuestion(questions)
            setAnswerValue(questions.answerValue)
            setMessages(oldMessages => [...oldMessages, botMessage] )

            initialRender.current = true
         }
      }else if(question.type !== undefined && question.type === 'cgpa' && parseInt(userInput) > 0 && parseInt(userInput) <= 10){
         const prediction = {
            type: "botMessage",
            output: <div>
               <p>{userInput}</p>
               <p>predicted score = {`${(question.value * 100 + parseInt(userInput) * 8) / 3}`}</p>
            </div>
         }
         setMessages(oldMessages => [...oldMessages, prediction] )
         setQuestion(questions)
         setAnswerValue(questions.answerValue)
         initialRender.current = true
      }else{
         const errorMessage = {
            type: "errorMessage",
         output: <p>Invalid Input, Its Should be between {answerValue.map(answer => (answer + " "))}</p>
         }

         setMessages(oldMessages => [...oldMessages, errorMessage])
      }

      setUserInput('')
   }


   return (
      <div className = "container">
         <h1 className="header">Chat <span className="bot">Bot</span> </h1>
         <div className="message-container" id="messageContainer">
            {
               messages.map((message, index) => <Message key={index} message={message.output} type={message.type} />)
            }
         </div>
         <div className="input">
            <input type="text" name="inputText" id="" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
            <br/>
            <button onClick = {addDefaultMessage}> Submit </button>
            <button onClick = {checkState}> check State </button>
         </div>
      </div>
   )
}

export default App
