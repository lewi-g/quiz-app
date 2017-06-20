// Render => User Action => State Changes => Render => ...
// what does the app need to answer all the questions?
// how does the app react to the user?

//let questions = [question1, question2, question3];

//user selectedAnswer is going to give us a number = index
var iState = {
    view: 'start',
    questions: [{
    	que: "What is the capital city of NY state?",
    	ans: ['NYC', 'Albany', 'Buffalo', 'Staten Island'],
    	ansKey: 1
			}, 
			{
    	que: "What is the capital city of Bulgaria?",
    	ans: ['Sofia', 'Serbia', 'Bucharest', 'Vienna'],
    	ansKey: 0
			},
			{
    	que: "What continent is Iran in?",
    	ans: ['United States', 'Europe', 'Asia', 'Antarctica'],
    	ansKey: 2
			}],
		currentQueIndex:0,
		score:0,
		lastAnswerCorrect: false,
}
 
// state modifier functions

function changeView(state, view) {
    iState.view = 'view';
}


function evaluateChoice(state, userSelectedAnswer) {
    if (userSelectedAnswer === state.questions[iState.currentQueIndex].ansKey) {
        state.score++;
        changeView(state, 'correct')
    } else {
    	changeView(state, 'wrong')
    }
     currentQueIndex++; 
}





/// Render functions

function appStart() {
    $('button').on('click', function(event) {
        changeQuestionView();
        render();
    })
    $('form.question-form').on('submit', function(event) {
    	 event.preventDefault();
    	 let answer= $("input[type=radio][name=choice]:checked").val();
    	 console.log(answer);
    })
    render();
    renderQuestion();
    userSelectedAnswer();

}



function render() {
    var selector = '.' + iState.view
    $('.page').removeClass('current');
    $(selector).addClass('current');
}

function renderQuestion() {
    $('button').on('click', function() {
			 // let clickCount = 0; 

       for (let i=0; i<iState.questions.length; i++) {
// input type= radio  name
        let questionTemplate = `
        <h2>${iState.questions[i].que}</h2>
            <input type="radio" val="0" name="choice">${iState.questions[i].ans[0]}</input>
            <input type="radio" val="1" name="choice">${iState.questions[i].ans[1]}</input>
            <input type="radio" val="2" name="choice">${iState.questions[i].ans[2]}</input>
            <input type="radio" val="3" name="choice">${iState.questions[i].ans[3]}</input>
            <br>
            <br>
            <button type="submit" class="next-question">Was I right?</button>`;
            
        $('form.question-form').append(questionTemplate);
     }
//      clickCount++
    })
}

function renderEvaluation(state, userSelectedAnswer) {
	let correctAnswerTemplate = `
		<h3> You got it Right!<h3>
		<button class="next-question">Move on to next Quesiton! </button>`;
	let wrongAnswerTemplate = `
		<h3> Ooops! You got it wrong. The correct answer is ${ansKey}<h3>
		<button class="next-question">Move on to next Quesiton! </button>`;
		if (evaluateChoice(state, userSelectedAnswer)) {
			 $('div.correct').append(questionTemplate);
		}

}


// Event Listeners

function userSelectedAnswer() {
	$
}


// function userSelectedAnswer() {
// 	$('input').on('click', function(event) {
// 		console.log($(event.target).attr('id'));
// for 		$( "input[type=radio][name=baz]:checked" ).val();
// 		// find the corresponding answer to the id of the input 
// 	// })
// }












$(appStart);





