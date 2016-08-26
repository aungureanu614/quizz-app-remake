var state = {
    items: [],
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    counter: 0

};

var questions = [{
    text: '<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$',
    answer: '0815',
    display: false
}, {
    text: '+0+0+0+0+0+0+0+2)+0+0+9)+7))+3)-0-0-0-0-0-0-0-9)+0+0+0+0+0+0+0+0+7)-8)+3)-6)-8)-7-0-0-0-0-0-0)',
    answer: '2B',
    display: false
}, {
    text: '*6*3p*4*3*2*0p*2*1*0pp>0*1*0p*5*4*0p*5*4*2*1*0p*4*3p*1*0p/+0p+0*6*5*2p+0*5*0p',
    answer: 'BAM128',
    display: false
}, {
    text: ']xhhhhooooooooohhhhhhxooooooooxooooooxjjjxhoooohhhxhohhhhhhhxhhhhjjjhhhxhhhhooooooooohhhhhhxjjjxxjjjjjjjxjhhhhxjhhhhhhhhjjjhh~',
    answer: 'Barely',
    display: false
}];



var addItem = function(state, question) {
    state.items.push(question);

};

var getNextQuestion = function(state, element) {
    var questionHTML = null;

    for (var i = 0; i < state.items.length; i++) {
        if (state.items[i].display) {
            state.items[i].display = false;
            state.items[i + 1].display = true;
            questionHTML = '<p>' + state.items[i + 1].text + '</p>';
        }
        break;
    }
    if (questionHTML === null) {
        state.items[0].display = true;
        questionHTML = '<p>' + state.items[0].text + '</p>';
    }

    element.html(questionHTML);

};


var renderAnswers = function(state, element) {
    var answersHTML = state.answers.map(function(answer) {

        return '<li><button type="button">' + answer + '</button></li>';
    });

    element.html(answersHTML);
};

var checkAnswer = function(state, chosenAnswer) {
    for (var i = 0; i < state.items.length; i++) {
        if (state.items[i].display) {
            if (state.items[i].answer === chosenAnswer) {
                state.counter += 1;
            }
        }
    }
};

$.each(questions, function(index, question) {

    addItem(state, question);


});
console.log(state.items);

renderAnswers(state, $('.answers'));

$(function() {

    getNextQuestion(state, $('.question'));

    $('button').on('click', function(e) {
        e.preventDefault();

        checkAnswer(state, $(this).text());
        getNextQuestion(state, $('.question'));
    });
});
