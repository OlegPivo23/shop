const buttons = document.querySelectorAll('.game_button');

const rock = document.querySelector('.game__button-rock');
const papper = document.querySelector('.game__button-papper');
const scissors = document.querySelector('.game__button-scissors');
let reset = document.querySelector('.game__resset');
const popapRule = document.querySelector('.game__rule');
const popapHidden = document.querySelector('.game__rule-popap');

let max = 100; min = 0;

let count = {
    win: 0,
    tie: 0,
    loss: 0,
}

popapRule.addEventListener('click', function(){
    popapHidden.classList.toggle('visible');
})

const setRock = () => {
    rock.addEventListener('click', function (){
        alert('вы нажали камень')
        let random = Math.random((max - min) + min);
        console.log(random);
        if(random <= 0.3){
            alert('Противник выбрал ножницы')
            alert('Вы победили!')
            count.win += 1;
            newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
            console.log(random);
        } else if(random <= 0.6 && random >= 0.3){
            alert('противник выбрал бумагу')
            alert('Вы проиграли')
            count.loss += 1;
            newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
            console.log(random);
        } else {
            alert('Противник выбрал камень')
            alert('Ничья!')
            count.tie += 1;
            newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
        }
    }) 
   
}

const setPapper = () => {
    papper.addEventListener('click', function (){
        alert('вы нажали бумага')
        let random = Math.random((max - min) + min);
        console.log(random);
        if(random <= 0.3){
            alert('Противник выбрал ножницы')
            alert('вы проиграли')
            count.loss += 1;
            newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
            console.log(random);
        } else if(random <= 0.6 && random >= 0.3){
            alert('противник выбрал бумагу')
            alert('ничья')
            count.tie += 1;
            newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
            console.log(random);
        } else{
            alert('Противник выбрал Камень')
            alert('Вы победили!')
            count.win += 1;
            newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
        }
    }) 
}

const setScissors = () => {
    scissors.addEventListener('click', function (){
        alert('вы нажали ножницы')
        let random = Math.random((max - min) + min);
        console.log(random);
        if(random <= 0.3){
            alert('Противник выбрал ножницы')
            alert('Ничья')
            count.tie += 1;
            newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
            console.log(random);
        } else if(random <= 0.6 && random >= 0.3){
            alert('противник выбрал бумагу')
            alert('Вы победили')
            count.win += 1;
            newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
            console.log(random);
        } else{
            alert('Противник выбрал ножницы')
            alert('Ничья!')
            count.loss += 1;
            newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
        }
    }) 
}

setPapper()
setRock()
setScissors()
let newP = document.createElement("p");
newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;
const gameButton = document.querySelector('.game__buttons');
newP.className = 'newP'
gameButton.append(newP);

reset.addEventListener('click', function() {
    alert('вы обнулили счет');
    count.tie = 0;
    count.loss = 0;
    count.win = 0;  
    newP.innerText = `Вы победили ${count.win} раз, проиграл ${count.loss} раз, сыграли в ничью ${count.tie} раз`;

})