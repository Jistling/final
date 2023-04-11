var quiz = { "AWL" : [
	{
		"id" : 1,
		"question" : "What is the correct definition of the word 'sector'?",
		"options" : [
			{"a":"a part of an area of activity, especially of a country’s economy", 
			 "b":"a large area of land, usually without exact limits or borders", 
			 "c":"the line that divides two countries or areas; the land near this line"}
			],
		"answer":"a part of an area of activity, especially of a country’s economy",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "What is the correct definition of the word 'maintenance'?",
		"options" : [
			{"a":"the circumstances or situation in which people live, work or do things", 
			 "b":"the act of keeping something in good condition by checking or repairing it regularly", 
			 "c":"the mental, emotional or physical condition that a person or thing is in"}
			],
		"answer":"the act of keeping something in good condition by checking or repairing it regularly",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "What is the correct definition of the word 'interpretation'?",
		"options" : [
			{"a": "a statement that tells you how something works or makes something easier to understand", 
			 "b":"the act or process of making something clearer or easier to understand", 
			 "c":"the particular way in which something is understood or explained"}
			],
		"answer":"the particular way in which something is understood or explained",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "What is the correct definition of the word 'consistent'?",
		"options" : [
			{"a":"to continue to be something; to be still in the same state or condition", 
			 "b":"always behaving in the same way, or having the same opinions, standards",
			 "c":"developing, growing, etc. gradually and in an even and regular way"
			}
			],
		"answer":"always behaving in the same way, or having the same opinions, standards",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Choose the word that is furthest in meaning to the phrase 'derive from'.",
		"options" : [
			{"a":"stem from", 
			 "b":"descend",
			 "c":"originate",
			 "d":"emanate",
			}
			],
		"answer":"descend",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "the power or right to do something",
		"options" : [
			{"a":"legal", 
			 "b":"authority",
			 "c":"policy",
			 "d":"role"
			}
			],
		"answer":"authority",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "a careful study of a subject, especially in order to discover new facts or information about it",
		"options" : [
			{"a":"theory", 
			 "b":"data",
			 "c":"research",
			 "d":"analysis"
			}
			],
		"answer":"research",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "to make something known formally",
		"options" : [
			{"a":"issue", 
			 "b":"contract",
			 "c":"legislation"
			}
			],
		"answer":"issue",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Choose the word that cannot be used instead of the word 'interpretation'.",
		"options" : [
			{"a":"perception", 
			 "b":"assimilation",
			 "c":"comprehension",
			 "d":"None"
			}
			],
		"answer":"None",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "What is not the correct definition of the word 'function'?",
		"options" : [
			{"a":"the measurement of something by saying how much of it there is", 
			 "b":"a special activity or purpose of a person or thing",
			 "c":"to work in the correct way",
			 "d":"a quantity whose value depends on the varying values of others",
			}
			],
		"answer":"the measurement of something by saying how much of it there is",
		"score":0,
		"status": ""
	}
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.AWL.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.AWL[this.currentque].id + '.');
	
			
			$("#question").html(quiz.AWL[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.AWL[this.currentque].options[0]) {
			  if (quiz.AWL[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.AWL[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.AWL[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.AWL[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.AWL[j].score == 0) {
					res = '<span class="wrong">' + quiz.AWL[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.AWL[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.AWL[j].id + '</span> &nbsp;' + quiz.AWL[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.AWL[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.AWL[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.AWL[this.currentque].answer) {
			if(quiz.AWL[this.currentque].score == "") {
				quiz.AWL[this.currentque].score = 1;
				quiz.AWL[this.currentque].status = "correct";
		}
		} else {
			quiz.AWL[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var AWLq = new quizApp();

var selectedopt;
	$(document).ready(function() {
		AWLq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				AWLq.checkAnswer(selectedopt);
			}
			AWLq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			AWLq.checkAnswer(selectedopt);
		}
		AWLq.changeQuestion(-1);
	});