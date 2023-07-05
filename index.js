import Dog from './Dog.js';
import dogs from './data.js';

function getNewDog() {
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}
let dog = getNewDog()

function like(){
    dog.isLiked()
    document.getElementById('like-btn').classList.add('liked')
    if(dog.hasBeenSwiped){
        setTimeout(function(){
            document.getElementById('like-btn').classList.remove('liked')
            dog = getNewDog()
            render()
        },2000)
    }
}
function nope(){
    dog.isRejected()
    document.getElementById('reject-btn').classList.add('rejected')
    if(dog.hasBeenSwiped){
        setTimeout(function(){
            document.getElementById('reject-btn').classList.remove('rejected')
            dog = getNewDog()
            render()
        },2000)
    }
}

document.getElementById('like-btn').addEventListener('click', like)
document.getElementById('reject-btn').addEventListener('click', nope)

function render(){
    document.getElementById('suggested-dog').innerHTML = dog.getDogHtml()
}
render()


