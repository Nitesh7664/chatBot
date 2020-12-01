export const questions = {
   hasQuestion: true,
   question: [
      "1. What are the companies that visit our campus",
      "2. what the criteria that most company follow",
      "3. what is my placement chances",
      "4. what was the last year placement percentage",
      "5. How can I improve or What should I Do"
   ],
   answerValue: [1, 2, 3, 4, 5],
   answers: {
      1: {
         hasQuestion: false,
         result: [
            "TCS", "LTI", "RAW", "INFOSYS", "ACCENTURE", "EVOSYS", "SOFTLINK", "ACCENTURE", "CAPGEMINI", "PERSISTENT"
         ]
      },
      2: {
         hasQuestion: false,
         result: [
            "above 60%",
	         "0- 2 kt dead / alive",
	         "0- 2 yrs gap in education allowed (not bw the course)"
         ]
      },
      3: {
         hasQuestion: true,
         question: ["Do you know any of these language(c, cpp, Java)"],
         answerValue: ["yes", "no"],
         answers: {
            yes: {
               hasQuestion: true,
               question: ["Do you have any of these Development Skills (Web Development, Machine Learning, Android Application Development)"],
               answerValue: ["yes", "no"],
               answers: {
                  yes: {
                     hasQuestion: true,
                     question: ["How much is you CGPA"],
                     answerValue: ["0 - 10"],
                     type: "cgpa",
                     value: 2
                  },
                  no: {
                     hasQuestion: true,
                     question: ["How much is you CGPA"],
                     answerValue: ["0 - 10"],
                     type: "cgpa",
                     value: 1
                  }
               }
            },
            no: {
               hasQuestion: true,
               question: ["Do you have any of these Development Skills (Web Development, Machine Learning, Android Application Development)"],
               answerValue: ["yes", "no"],
               answers: {
                  yes: {
                     hasQuestion: true,
                     question: ["How much is you CGPA"],
                     answerValue: ["0 - 10"],
                     type: "cgpa",
                     value: 1
                  },
                  no: {
                     hasQuestion: true,
                     question: ["How much is you CGPA"],
                     answerValue: ["0 - 10"],
                     type: "cgpa",
                     value: 0
                  }
               }
            }
         }
      },
      4: {
         hasQuestion: false,
         result: [
            "last year placement percent was 60%"
         ]
      },
      5: {
         hasQuestion: true,
         question: ["In Which year you are?"],
         answerValue: ["first", "second", "third", "fourth"],
         answers: {
            first: {
               hasQuestion: false,
               result: [
                  "Choose One language from (c, cpp or java)",
                  "learn fundamentals and start coding on coding websites such as 'HackerRank', 'hackerEarth'"
               ]
            },
            second: {
               hasQuestion: false,
               result: [
                  "Learn some Development Skills such as \n Web Development \n Machine Learning \n Android Development \n make and break things", 
                  "Do Competitive Programming with any one of the language(c, cpp or java)"
            ]
            },
            third: {
               hasQuestion: false,
               result: [
                  "Make Some good projects so that you can present in the interview",
                  "Participate  in Number of Hackathons and get an Exposure",
                  "Do a Hell lot of Competitive programming"
               ]
            },
            fourth: {
               hasQuestion: false,
               result: [
                  "Thoroughly learn any one language (c, cpp or java)in's and out's",
                  "Learn Computer Networking, Operating System, DBMS, MySql",
                  "Go through the Interview question of above mentioned subjects and the choosen language",
                  "Practice aptitude, Logical Reasoning and Grammer(basic level)"
               ]
            }
         }
      }
      
      
   }
}