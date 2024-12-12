let game = {
    techs:["css","bootstrap","electron","firebase","html",
        "javascript","jquery","mongo","node","react"],
        lockMode:false,
        fisrtCard:null,
        secondCard:null,
        setCard:function(id){
            let card = this.cards.filter(card=>card.id===id)[0];
            if(card.flipped || this.lockMode){
                return false
            } 
            if(this.fisrtCard == null){
                
                this.fisrtCard = card
                this.fisrtCard.flipped = true
            
                return true
            }else{
                this.secondCard = card
                this.secondCard.flipped = true
                this.lockMode = true
                return true
            }
            
        },
        clearCard:function(){
            setTimeout(() => {
                this.lockMode = false
                this.fisrtCard = null
                this.secondCard = null
            }, 1000);
         
        },
        checkMatch:function(){
            if(this.fisrtCard && this.secondCard ){
              if(this.fisrtCard.icon == this.secondCard.icon){
                return true
              }else{
                this.fisrtCard.flipped = false
                this.secondCard.flipped = false
              }
            }
        },
        gameOver:function(){
            return this.cards.filter(card=>!card.flipped).length == 0
         
        }
        ,
        cards:null,
        createCardsFromTechs:function(){
            this.cards = []
            this.techs.forEach(tech=>{
           
                this.cards.push(this.createPairFromTech(tech));
                
            })
       
           this.cards = this.cards.flatMap(pair=>pair);
           this.shuffleCards()
           return this.cards
        },
        createPairFromTech:function (tech){
       
            return[{
                id:this.createIdFromTech(tech),
                icon:tech,
                flipped:false
            },{
                id:this.createIdFromTech(tech),
                icon:tech,
                flipped:false
                
            },
            ]
        },
        createIdFromTech:function (tech){
            return tech+ parseInt(Math.random()*1000);
        },
        shuffleCards:function(){
            for(let i = this.cards.length-1; i> 0;i--){
                let j = Math.floor(Math.random()*(i + 1));
        
                [this.cards[i],this.cards[j]] = [this.cards[j],this.cards[i]]
            }
        },
        restartGame:function(){
           location.reload(true)
        }
}

