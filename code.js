//creating a countdown function to count from 10 to 1 and then blastoff

function countDown() {
    var count = 10;
    setTimeout(function () {
        document.getElementByID("countDownTimer").innerHTML = count;

    }, 1000);
    //starting countdown at 10
    document.getElementByID("CountDownTimer").innerHTML = count;
    count = count - 1;


    //then going to 9
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);

    //then 8
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);

    //then 7
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    //then 6
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    //then 5
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    //then 4
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    //then 3
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    //then 2
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    //then 1
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    //then blast off to the heavens
    setTimeout(function () {
        document.getElementByID("CountDownTimer").innerHTML = "BLAST OFF in the name of ELON MUSK";
        count = count - 1;

    }, 10000);
}

function playCraps() {
    //create DIE1 variable
    var die1;
    //create DIE2 variable
    var die2;
    var sum;

    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    sum = die1 + die2;
    document.getElementByID("die1Res").innerHTML = die1;
    document.getElementByID("die2Res").innerHTML = die2;
    document.getElementByID("sumRes").innerHTML = sum;
    //loser sequence 7 or 11
    if (sum == 7 || sum == 11) {
        document.getElementByID("crapsResults").innerHTML = " Craps! You Lose!";
    }
    //winner winner chicken dinner sequence doubles and even
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementByID("crapsResults").innerHTML = "Doubles, you win!";

    } else {
        document.getElementByID("crapsResults").innerHTML = "Push by all means try again!";

    }
