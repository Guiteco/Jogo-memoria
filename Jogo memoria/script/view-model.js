// let techs = ["css","bootstrap","electron","firebase","html",
//     "javascript","jquery","mongo","node","react"]
let gameBoard = document.querySelector("#gameBoard")


startGame();
function startGame(){
    display(game.createCardsFromTechs())
}


function display(){
    gameBoard.innerHTML = ""
    game.cards.forEach(tech=>{
    let card = document.createElement('div')
    card.setAttribute("class","card")
    card.setAttribute("id",tech.id)
    card.setAttribute("data-icon",tech.icon)
    card.addEventListener("click",flippedCard)

    
    let cardFront = document.createElement("div")
    let icon = document.createElement("img")
    cardFront.setAttribute("class","card-front")
    icon.setAttribute("src",`.//images/${tech.icon}.png`)
   

    let cardBack = document.createElement("div")
    cardBack.setAttribute("class","card-back")
    cardBack.innerHTML = "&lt/&gt"
  
    
    gameBoard.appendChild(card)
    cardFront.appendChild(icon)
    card.appendChild(cardFront)
    card.appendChild(cardBack)
})
}

function flippedCard(){
    if( game.setCard(this.id)){
        this.classList.add("flip")
        if(game.lockMode){
           if(game.checkMatch()){
                if(game.gameOver()){
                   document.querySelector("#gameOver").style.display = "flex"
                }
           }else{
            setTimeout(()=>{ 
                document.getElementById(`${game.fisrtCard.id}`).classList.remove("flip")
                document.getElementById(`${game.secondCard.id}`).classList.remove("flip")}
            ,1000)
           }
           game.clearCard();
        }
    }
 
  
}
