var state = {
    items: [],
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ]

};

var questions = [{
    text: '<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$',
    answer: '0815',
    display: true
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



var renderQuestion = function(state, element) {
    var questionHTML = state.items.map(function(question) {

        return '<p>' + question.text + '</p>';
    });

    element.html(questionHTML);

};


var renderAnswers = function(state, element) {
    var answersHTML = state.answers.map(function(answer) {

        return '<li><button type="button">' + answer + '</button></li>';
    });

    element.html(answersHTML);
};



var getNextQuestion = function(state, question) {
    var getQuestion = state.items.map(function(question){
        console.log(question);
    });
        
}

$.each(questions, function(index, question) {

    addItem(state, question);
    renderQuestion(state, $('.question'));
});

renderAnswers(state, $('.answers'));






/*$(function() {

});

$('.shopping-list-add').submit(function(event) {
    event.preventDefault();
    addItem(state, $('.shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
});*/
//console.log (questions[0].text);
