class Dog {

    constructor(data){
        Object.assign(this, data)
    }

    getDogHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
            <div class="row">
                <div class="col-12 dog">
                    <img class=" avatar" src="${avatar}">
                    <div class="text-block">
                        <h2>${name}, ${age}</h2>
                        <p>${bio}</p>
                    </div>
                </div>
            </div>
            `
    }
    isLiked(){
        this.hasBeenLiked = true
        this.hasBeenSwiped = true
        document.querySelector('.dog').innerHTML += `<img class="badges" src="./images/badge-like.png">`
    }
    isRejected(){
        this.hasBeenSwiped = true
        document.querySelector('.dog').innerHTML += `<img class="badges" src="./images/badge-nope.png">`
    }
}

export default Dog 