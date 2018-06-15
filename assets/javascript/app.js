$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var time = 30;
    var intervalId;
    $("button").on('click', function(){
        $("#buttonRow").hide();
        $("#questionSpace").show();
        $(".score").hide();
        timer();
        displayQuestion();

    })

    function displayQuestion(){

        for(var i=0; i< quizContent.length; i++ ){
            $('#questionSpace').append("<div id='question'>" + quizContent[i].question + "</div>");
            for(var j=0; j<quizContent[i].choices.length; j++){
                var newDiv = $("<div>");
                //$('#choices').append(quizContent[i].choices[j]);
                //newDiv.addClass("pickAnswer").attr("indexnum", j).text(quizContent[i].choices[j]);
                $('#questionSpace').append("<input type='radio' name='question-" +i+"' value='"+ quizContent[i].choices[j] +"'>"+ quizContent[i].choices[j]);
                
            }
            
        }
    }
    function timer(){
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
  
      //  The decrement function.
      function decrement() {
  
        time--;
        $("#timer").html("<h2>" + "Time Left :" + time + "</h2>");
        if (time === 0) {
          QuizEnd();
          alert("Time Up!");
        }
      }
      function QuizEnd(){
        clearInterval(intervalId);
        for(var i =0; i<quizContent.length; i++){
            var userChoice = $("form input[name='question-"+i+"']:checked").val();
            if (quizContent[i].answer === userChoice){
                correct ++;
            }else{
                incorrect++;
            }
            $("#correctScore").html("<h2>" + "Correct :" + correct + "</h2>");
            $("#incorrectScore").html("<h2>" + "Incorrect :" + incorrect + "</h2>");
        }
        
       

        $("#questionSpace").hide();
        $("#timer").hide();
        $(".score").show();
        

      }



    var quizContent=[
        // question 1
        {
            "question": "How big is the sun?",
            "choices": ["432,288 miles", "553,211 miles", "732.983 miles"],
            "answer": "32,288 miles"
        },
        // question 2
        {
            "question": "How long would it take a space shuttle (going 5 miles per second) to travel a light year?",
            "choices": ["37,200 years", "20,320 years", "60,730 years"],
            "answer": "37,200 years"
        },
        // question 3
        {
            "question": "What did Pluto get reclassified to in 2005?",
            "choices": ["A moon", "A minor planet", "A dwarf planet"],
            "answer": "A dwarf planet"
        },
        // question 4
        {
            "question": "Which two planets in the solar system do not have moons?",
            "choices": ["Saturn and Pluto", "Uranus and Mars", "Venus and Mercury"],
            "answer": "Venus and Mercury"
        },
        // question 5
        {
            "question": "What does NASA stand for?",
            "choices": ["National Aeronautics and Space Administration", "National Astronauts and Space Aerodynamics", "National Astrophysics and Space Admiration"],
            "answer": "National Aeronautics and Space Administration"
        },
        // question 6
        {
            "question": "Scientists estimate that the univers is _________ years old.",
            "choices": ["30.18 billion", "13.82 billion", "2 billion"],
            "answer": "13.82 billion"
        },
        // question 7
        {
            "question": "How many years does it take for the Sun to travel around the galaxy?",
            "choices": ["103 million years", "225 million years", "34 billion years"],
            "answer": "225 million years"
        },
        // question 8
        {
            "question": "What are Saturn's rings made of?",
            "choices": ["star dust and comet debris", "sulfur and sand", "ice and rock"],
            "answer": 2
        },
        // question 9
        {
            "question": "Unidentified type of matter that does not emit or interact with light?",
            "choices": ["dark matter", "gravity", "orbiting matter"],
            "answer": "ice and rock"
        },
        // question 10
        {
            "question": "The golden record is ____________",
            "choices": ["The planet made up of the most gold", "a record compiled by Carl Sagan for the Voyager", "the furthest humans have traveled away from Earth"],
            "answer": "a record compiled by Carl Sagan for the Voyager"
        }
    ];
    
    


});



