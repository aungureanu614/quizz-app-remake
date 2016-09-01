var state = {
    items: [],
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    question_counter: 0,
    correct: 0,
    questionHTML: null,
    count: 0
};

var {items, answers, question_counter, correct, questionHTML, count} = state;

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
    items.push(question);

};

var getNextQuestion = function(state, element) {


    while (count < items.length) {
        if (items[count].display) {
            items[count].display = false;
            question_counter += 1;
            if (items[count + 1] === undefined) {
                $('.questions-page').hide();
                $('.results-page').css('display', 'block');
                $('.score').empty().append(correct);
            } else {
                items[count + 1].display = true;
                questionHTML = '<p>' + items[count + 1].text + '</p>';
                count++;
            }
        }

        break;
    }
    if (questionHTML === null) {
        items[0].display = true;
        questionHTML = '<p>' + items[0].text + '</p>';
        question_counter += 1;
    }

    element.html(questionHTML);
    $('.question-current').empty().append(question_counter);

};


var renderAnswers = function(state, element) {
    var answersHTML = answers.map(answer => '<li><button class="answers-btn" type="button">' + answer + '</button></li>');
   

    element.html(answersHTML);
};

var checkAnswer = function(state, chosenAnswer) {

    if (items[count].display) {
        if (items[count].answer === chosenAnswer) {
            correct += 1;
        }
    }
};

function populateItems() {
    $.each(questions, (index, question) => addItem(state, question));
    
}
var resetState = function(state, element, element2) {

    items = [];
    answers = [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ];
   question_counter = 0;
    correct = 0;
    count = 0;
    questionHTML = null;

    element.css('display', 'none');
    element2.show();

    populateItems();


    getNextQuestion(state, $('.question'));
    $('.question-current').empty().append(question_counter);


};


renderAnswers(state, $('.answers'));

$(function() {
    populateItems();
    getNextQuestion(state, $('.question'));
    $('.question-current').empty().append(question_counter);

    $('.answers-btn').on('click', function(e) {
        e.preventDefault();

        checkAnswer(state, $(this).text());
        getNextQuestion(state, $('.question'));
        $('.question-current').empty().append(question_counter);

    });
    $('.restart-button').on('click', function(e) {
        e.preventDefault();
        resetState(state, $('.results-page'), $('.questions-page'));
    });
});
