module.exports = {
   TEST_KEY: {  
      "key":"TEST_KEY",
      "userSays":[  
         "how long have you worked with Betsy",
         "how long have you worked with Betsy"
      ],
      "action": "QUESTION_SUSPECT_DOGS",
      "contexts": ["question_suspect", "dogs"],
      "outputContexts": "QUESTION_SUSPECT",
   },
   NEW_DOGS_KEY: {  
      "key":"NEW_DOGS_KEY",
      "userSays":[  
         "how long have you worked with Betsy",
         "how long have you worked with Betsy"
      ],
      "action": "QUESTION_SUSPECT",
      "contexts": ["question_suspect_test"],
      "outputContexts": "QUESTION_SUSPECT",
   },
   NIGHTOF: {  
      "key":"NIGHTOF",
      "userSays":[  
         "how long have you worked with Betsy",
         "how long have you worked with Betsy"
      ],
      "action": "QUESTION_SUSPECT_DOGS",
      "contexts": ["question_suspect", "dogs"],
      "outputContexts": "QUESTION_SUSPECT",
   },
   
}
