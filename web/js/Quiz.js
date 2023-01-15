var myQuestions = [
    {
      question: "What does CSS stand for?",
      answers: {
        a: 'Colorful Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Creative Style Sheets'
      },
      correctAnswer: 'b'
    },
    {
      question: "Where in an HTML document is the correct place to refer to an external style sheet?",
      answers: {
        a: 'In the head section  ',
        b: 'At the end of the document',
        c: 'In the body section' 
      },
      correctAnswer: 'a'
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: {
          a: 'script',
          b: 'css',
          c: 'style'
        },
        correctAnswer: 'c'
      },
      {
        question: "How do you insert a comment in a CSS file?",
        answers: {
          a: '// this is a comment //',
          b: '/* this is a comment */ ',
          c: '// this is a comment'
        },
        correctAnswer: 'b'
      },
      {
        question: "Which property is used to change the background color?",
        answers: {
          a: 'color',
          b: 'bgcolor',
          c: 'background-color '
        },
        correctAnswer: 'c'
      },
      {
        question: "Which CSS property is used to change the text color of an element?",
        answers: {
          a: 'color ',
          b: 'text-color',
          c: 'fgcolor '
        },
        correctAnswer: 'a'
      },
      {
        question: "Which property is used to change the font of an element?",
        answers: {
          a: 'font-family   ',
          b: 'font-weight',
          c: 'font-style '
        },
        correctAnswer: 'a'
      },
      {
        question: "How do you make the text bold?",
        answers: {
          a: 'style:bold;',
          b: 'font-weight:bold;   ',
          c: 'font:bold;'
        },
        correctAnswer: 'b'
      },
      {
        question: "Which property is used to change the left margin of an element?",
        answers: {
          a: 'margin-left  ',
          b: 'indent',
          c: 'padding-left '
        },
        correctAnswer: 'a'
      },
      {
        question: "When using the padding property; are you allowed to use negative values?",
        answers: {
          a: 'no',
          b: 'yes',
          
        },
        correctAnswer: 'a'
      }
      

  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label><br>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
      }
  }