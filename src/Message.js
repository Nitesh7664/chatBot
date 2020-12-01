import React from 'react'

function Message({message, type}) {

   const displayData = (
      type === "botMessage"
      ?<div className="message bot-message">
         {message}
      </div>
      :type === "errorMessage"
      ?<div className="message error-message bot-message">
         {message}
      </div>
      :<div className="message user-message">
         {message}
      </div>
      )

   return (
      <>
         {displayData}
      </>
   )
}

export default Message
