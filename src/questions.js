// export const questions = {
//    hasQuestion: true,
//    question: [
//       "1. What are the companies that visit our campus",
//       "2. what the criteria that most company follow",
//       "3. what is my placement chances",
//       "4. what was the last year placement percentage",
//       "5. How can I improve or What should I Do"
//    ],
//    answerValue: [1, 2, 3, 4, 5],
//    answers: {
//       1: {
//          hasQuestion: false,
//          result: [
//             "TCS", "LTI", "RAW", "INFOSYS", "ACCENTURE", "EVOSYS", "SOFTLINK", "ACCENTURE", "CAPGEMINI", "PERSISTENT"
//          ]
//       },
//       2: {
//          hasQuestion: false,
//          result: [
//             "above 60%",
// 	         "0- 2 kt dead / alive",
// 	         "0- 2 yrs gap in education allowed (not bw the course)"
//          ]
//       },
//       3: {
//          hasQuestion: true,
//          question: ["Do you know any of these language(c, cpp, Java)"],
//          answerValue: ["yes", "no"],
//          answers: {
//             yes: {
//                hasQuestion: true,
//                question: ["Do you have any of these Development Skills (Web Development, Machine Learning, Android Application Development)"],
//                answerValue: ["yes", "no"],
//                answers: {
//                   yes: {
//                      hasQuestion: true,
//                      question: ["How much is you CGPA"],
//                      answerValue: ["0 - 10"],
//                      type: "cgpa",
//                      value: 2
//                   },
//                   no: {
//                      hasQuestion: true,
//                      question: ["How much is you CGPA"],
//                      answerValue: ["0 - 10"],
//                      type: "cgpa",
//                      value: 1
//                   }
//                }
//             },
//             no: {
//                hasQuestion: true,
//                question: ["Do you have any of these Development Skills (Web Development, Machine Learning, Android Application Development)"],
//                answerValue: ["yes", "no"],
//                answers: {
//                   yes: {
//                      hasQuestion: true,
//                      question: ["How much is you CGPA"],
//                      answerValue: ["0 - 10"],
//                      type: "cgpa",
//                      value: 1
//                   },
//                   no: {
//                      hasQuestion: true,
//                      question: ["How much is you CGPA"],
//                      answerValue: ["0 - 10"],
//                      type: "cgpa",
//                      value: 0
//                   }
//                }
//             }
//          }
//       },
//       4: {
//          hasQuestion: false,
//          result: [
//             "last year placement percent was 60%"
//          ]
//       },
//       5: {
//          hasQuestion: true,
//          question: ["In Which year you are?"],
//          answerValue: ["first", "second", "third", "fourth"],
//          answers: {
//             first: {
//                hasQuestion: false,
//                result: [
//                   "Choose One language from (c, cpp or java)",
//                   "learn fundamentals and start coding on coding websites such as 'HackerRank', 'hackerEarth'"
//                ]
//             },
//             second: {
//                hasQuestion: false,
//                result: [
//                   "Learn some Development Skills such as \n Web Development \n Machine Learning \n Android Development \n make and break things", 
//                   "Do Competitive Programming with any one of the language(c, cpp or java)"
//             ]
//             },
//             third: {
//                hasQuestion: false,
//                result: [
//                   "Make Some good projects so that you can present in the interview",
//                   "Participate  in Number of Hackathons and get an Exposure",
//                   "Do a Hell lot of Competitive programming"
//                ]
//             },
//             fourth: {
//                hasQuestion: false,
//                result: [
//                   "Thoroughly learn any one language (c, cpp or java)in's and out's",
//                   "Learn Computer Networking, Operating System, DBMS, MySql",
//                   "Go through the Interview question of above mentioned subjects and the choosen language",
//                   "Practice aptitude, Logical Reasoning and Grammer(basic level)"
//                ]
//             }
//          }
//       }
      
      
//    }
// }

export const questions = {
   hasQuestion: true,
   question: [
      "1. What are the Symptoms of cancer",
      "2. what are the effects of cancer",
      "3. what care should we take to prevent cancer or reduce effect of cancer",
      "4. Stages of cancer",
      "5. Helpline"
   ],
   answerValue: [1, 2, 3, 4, 5],
   answers: {
      1: {
         hasQuestion: true,
         question: [
            "1. Breast Cancer",
            "2. Lungs Cancer",
            "3. Cervical Cancer"
         ],
         answerValue: [1, 2, 3],
         answers:{
            1: {
               hasQuestion: false,
               result: [
                  "New lump in the breast or underarm (armpit).",
                  "Thickening or swelling of part of the breast.",
                  "Irritation or dimpling of breast skin.",
                  "Redness or flaky skin in the nipple area or the breast.",
                  "Pulling in of the nipple or pain in the nipple area.",
                  "Nipple discharge other than breast milk, including blood.",
                  "Any change in the size or the shape of the breast.",
                  "Pain in any area of the breast"
               ]
            },
            2: {
               hasQuestion: false,
               result: [
                  "Coughing that gets worse or doesn't go away.",
                  "Chest pain.",
                  "Shortness of breath.",
                  "Wheezing.",
                  "Coughing up blood.",
                  "Feeling very tired all the time.",
                  "Weight loss with no known cause."
               ]
            },
            3:{
               hasQuestion: false,
               result: [
                  "Blood spots or light bleeding between or following periods.",
                  "Menstrual bleeding that is longer and heavier than usual.",
                  "Bleeding after intercourse, douching, or a pelvic examination.",
                  "Increased vaginal discharge.",
                  "Pain during sexual intercourse.",
                  "Bleeding after menopause.",
                  "Unexplained, persistent pelvic and/or back pain."
               ]
            }
         }
      },
      2: {
         hasQuestion: true,
         question: [
            "1. Breast Cancer",
            "2. Lungs Cancer",
            "3. Cervical Cancer"
         ],
         answerValue: [1, 2, 3],
         answers:{
            1: {
               hasQuestion: false,
               result: [
                  "You may notice your breasts have changed color or size. They may also be red or swollen from the cancerous tumor. While breast cancers themselves aren't usually painful, the resulting swelling can cause breast pain. The cancer lumps may still be painful in some cases, though."
               ]
            },
            2: {
               hasQuestion: false,
               result: [
                  "You may notice your breasts have changed color or size. They may also be red or swollen from the cancerous tumor. While breast cancers themselves aren't usually painful, the resulting swelling can cause breast pain. The cancer lumps may still be painful in some cases, though."
               ]
            },
            3:{
               hasQuestion: false,
               result: [
                  "Tiredness. Many women who are treated for cervical cancer find that tiredness is a major issue, particularly if they have radiotherapy and chemotherapy. The tiredness may continue for several months, or even a year or two, after treatment has finished. Feeling tired is not only a side effect of the treatment itself."
               ]
            }
         }
      },
      3: {
         hasQuestion: true,
         question: [
            "1. Preventive Measure",
            "2. Reduce the after effects of cancer"
         ],
         answerValue: [1, 2],
         answers: {
            1: {
               hasQuestion: true,
               question: [
                  "1. Breast Cancer",
                  "2. Lungs Cancer",
                  "3. Cervical Cancer"
               ],
               answerValue: [1, 2, 3],
               answers: {
                  1: {
                     hasQuestion: false,
                     result: [
                        "Keep Weight in Check",
                        "Be Physically Active",
                        "Eat Your Fruits & Vegetables and Avoid Too Much Alcohol",
                        "Don’t Smoke",
                        "Breastfeed, If Possible",
                        "Avoid Birth Control Pills, Particularly After Age 35 or If You Smoke",
                        "Avoid Post-Menopausal Hormones",
                        "Tamoxifen and Raloxifene for Women at High Risk"
                     ]
                  },
                  2: {
                     hasQuestion: false,
                     result: [
                        "Don't smoke. If you've never smoked, don't start.",
                        "Stop smoking. Stop smoking now.",
                        "Avoid secondhand smoke.",
                        "Test your home for radon.",
                        "Avoid carcinogens at work.",
                        "Eat a diet full of fruits and vegetables.",
                        "Exercise most days of the week."
                     ]
                  },
                  3: {
                     hasQuestion: false,
                     result: [
                        "Get an HPV vaccine",
                        "That is why, to be most effective, the HPV vaccines should be given before a person becomes exposed to HPV (such as through sexual activity). These vaccines help prevent pre-cancers and cancers of the cervix"
                     ]
                  }
               }
            },
            2: {
               hasQuestion: true,
               question: [
                  "1. Breast Cancer",
                  "2. Lungs Cancer",
                  "3. Cervical Cancer"
               ],
               answerValue: [,1, 2, 3],
               answers: {
                  1: {
                     hasQuestion: false,
                     result: [
                        "Limit alcohol. The more alcohol you drink, the greater your risk of developing breast cancer. ",
                        "Don't smoke. ",
                        "Control your weight. ",
                        "Be physically active. ",
                        "Breast-feed. ",
                        "Limit dose and duration of hormone therapy. ",
                        "Avoid exposure to radiation and environmental pollution."
                     ]
                  },
                  2: {
                     hasQuestion: false,
                     result: [
                        "Don't smoke. If you've never smoked, don't start. ",
                        "Stop smoking. Stop smoking now. ",
                        "Avoid secondhand smoke. ",
                        "Test your home for radon." ,
                        "Avoid carcinogens at work. ",
                        "Eat a diet full of fruits and vegetables. ",
                        "Exercise most days of the week."
                     ]
                  },
                  3: {
                     hasQuestion: false,
                     result: [
                        "Anti-nausea medications are commonly used to help prevent vomiting during cervical cancer treatment. Steroids can be used to address a loss of appetite and blood transfusions can be used to reduce the likelihood of infection and bleeding. Over-the-counter oral medications can also make mouth sores less painful."
                     ]
                  }
               }
            }
         }
      },
      4: {
         hasQuestion: false,
         result: [
            "Stage 0 means there's no cancer, only abnormal cells with the potential to become cancer. ",
            "Stage I means the cancer is small and only in one area. ",
            "Stage II and III mean the cancer is larger and has grown into nearby tissues or lymph nodes.",
            "Stage IV means the cancer has spread to other parts of your body."
         ]
      },
      5: {
         hasQuestion: false,
         result: [
            "1800-22-1951",
            "+91-22-2413 9445 / 51",
            "info@indiancancersociety.org"
         ]
      }
      
   }
}