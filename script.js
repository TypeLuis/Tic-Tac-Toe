let winner = false
let player1 = true
let p1Wins = 0
let p2Wins = 0
let draws = 0
let p1Start = true

let head = document.getElementsByTagName('h1')
head[0].innerText = "Player One's turn"

let p1 = document.getElementById('Player1')
p1.innerText = `Player One Wins: ${p1Wins}`

let p2 = document.getElementById('Player2')
p2.innerText = `Player Two Wins: ${p2Wins}`

let draw = document.getElementById('draw')
draw.innerText = `Draws: ${draws}`

let buttons = document.getElementsByClassName('input')

let clear = document.getElementById('reset')

clear.addEventListener('click', function(){
    document.getElementById("B1")['style']['background-color'] = ""
    document.getElementById("B2")['style']['background-color'] = ""
    document.getElementById("B3")['style']['background-color'] = ""
    document.getElementById("B4")['style']['background-color'] = ""
    document.getElementById("B5")['style']['background-color'] = ""
    document.getElementById("B6")['style']['background-color'] = ""
    document.getElementById("B7")['style']['background-color'] = ""
    document.getElementById("B8")['style']['background-color'] = ""
    document.getElementById("B9")['style']['background-color'] = ""
    winner = false
    p1Start ? head[0].innerText = "Player One's turn" : head[0].innerText = "Player Two's turn"
    p1Start ? player1 = true : player1 = false
})

for (button of buttons){
    
    const hoverly = function(event, color){
        event.target.style.backgroundColor = color
    }
    
    button.addEventListener('click', function(event){
        if(winner == false){
            if(player1 == true){
                if(event['target']['style']['backgroundColor'] != 'aqua'){
                    hoverly(event, 'orangered')
                    player1 = false
                }
            }
            else if(player1 == false){
                if(event['target']['style']['backgroundColor'] != 'orangered'){
                    hoverly(event, 'aqua')
                    player1 = true
                }
    
            }
    
            turn = player1 ? head[0].innerText = "Player One's turn" : head[0].innerText = "Player two's turn"
    
            let b1 = document.getElementById("B1")['style']['background-color'];
            let b2 = document.getElementById("B2")['style']['background-color'];
            let b3 = document.getElementById("B3")['style']['background-color'];
            let b4 = document.getElementById("B4")['style']['background-color'];
            let b5 = document.getElementById("B5")['style']['background-color'];
            let b6 = document.getElementById("B6")['style']['background-color'];
            let b7 = document.getElementById("B7")['style']['background-color'];
            let b8 = document.getElementById("B8")['style']['background-color'];
            let b9 = document.getElementById("B9")['style']['background-color'];
    
            if(b1 == 'orangered' && b2 == 'orangered'&& b3 == 'orangered'){
                head[0].innerText = 'Player One Wins!!!!!!'
                winner = true
                p1Wins++
                p1.innerText = `Player One Wins: ${p1Wins}`
                p1Start = true
                player1 = true
            }
            else if(b1 == 'orangered' && b4 == 'orangered'&& b7 == 'orangered'){
                head[0].innerText = 'Player One Wins!!!!!!'
                winner = true
                p1Wins++
                p1.innerText = `Player One Wins: ${p1Wins}`
                p1Start = true
                player1 = true
            }
            else if(b2 == 'orangered' && b5 == 'orangered'&& b8 == 'orangered'){
                head[0].innerText = 'Player One Wins!!!!!!'
                winner = true
                p1Wins++
                p1.innerText = `Player One Wins: ${p1Wins}`
                p1Start = true
                player1 = true
            }
            else if(b3 == 'orangered' && b6 == 'orangered'&& b9 == 'orangered'){
                head[0].innerText = 'Player One Wins!!!!!!'
                winner = true
                p1Wins++
                p1.innerText = `Player One Wins: ${p1Wins}`
                p1Start = true
                player1 = true
            }
            else if(b4 == 'orangered' && b5 == 'orangered'&& b6 == 'orangered'){
                head[0].innerText = 'Player One Wins!!!!!!'
                winner = true
                p1Wins++
                p1.innerText = `Player One Wins: ${p1Wins}`
                p1Start = true
                player1 = true
            }
            else if(b7 == 'orangered' && b8 == 'orangered'&& b9 == 'orangered'){
                head[0].innerText = 'Player One Wins!!!!!!'
                winner = true
                p1Wins++
                p1.innerText = `Player One Wins: ${p1Wins}`
                p1Start = true
                player1 = true
            }
            else if(b1 == 'orangered' && b5 == 'orangered'&& b9 == 'orangered'){
                head[0].innerText = 'Player One Wins!!!!!!'
                winner = true
                p1Wins++
                p1.innerText = `Player One Wins: ${p1Wins}`
                p1Start = true
                player1 = true
            }
            else if(b3 == 'orangered' && b5 == 'orangered'&& b7 == 'orangered'){
                head[0].innerText = 'Player one Wins!!!!!!'
                winner = true
                p1Wins++
                p1.innerText = `Player One Wins: ${p1Wins}`
                p1Start = true
                player1 = true
            }
    
    
            if(b1 == 'aqua' && b2 == 'aqua'&& b3 == 'aqua'){
                head[0].innerText = 'Player two Wins!!!!!!'
                winner = true
                p2Wins++
                p2.innerText = `Player Two Wins: ${p2Wins}`
                p1Start = false
                player1 = false
            }
            else if(b1 == 'aqua' && b4 == 'aqua'&& b7 == 'aqua'){
                head[0].innerText = 'Player two Wins!!!!!!'
                winner = true
                p2Wins++
                p2.innerText = `Player Two Wins: ${p2Wins}`
                p1Start = false
                player1 = false
            }
            else if(b2 == 'aqua' && b5 == 'aqua'&& b8 == 'aqua'){
                head[0].innerText = 'Player two Wins!!!!!!'
                winner = true
                p2Wins++
                p2.innerText = `Player Two Wins: ${p2Wins}`
                p1Start = false
                player1 = false
            }
            else if(b3 == 'aqua' && b6 == 'aqua'&& b9 == 'aqua'){
                head[0].innerText = 'Player two Wins!!!!!!'
                winner = true
                p2Wins++
                p2.innerText = `Player Two Wins: ${p2Wins}`
                p1Start = false
                player1 = false
            }
            else if(b4 == 'aqua' && b5 == 'aqua'&& b6 == 'aqua'){
                head[0].innerText = 'Player two Wins!!!!!!'
                winner = true
                p2Wins++
                p2.innerText = `Player Two Wins: ${p2Wins}`
                p1Start = false
                player1 = false
            }
            else if(b7 == 'aqua' && b8 == 'aqua'&& b9 == 'aqua'){
                head[0].innerText = 'Player two Wins!!!!!!'
                winner = true
                p2Wins++
                p2.innerText = `Player Two Wins: ${p2Wins}`
                p1Start = false
                player1 = false
            }
            else if(b1 == 'aqua' && b5 == 'aqua'&& b9 == 'aqua'){
                head[0].innerText = 'Player two Wins!!!!!!'
                winner = true
                p2Wins++
                p2.innerText = `Player Two Wins: ${p2Wins}`
                p1Start = false
                player1 = false
            }
            else if(b3 == 'aqua' && b5 == 'aqua'&& b7 == 'aqua'){
                head[0].innerText = 'Player two Wins!!!!!!'
                winner = true
                p2Wins++
                p2.innerText = `Player Two Wins: ${p2Wins}`
                p1Start = false
                player1 = false
            }
            if(b1 != "" && b2 != "" && b3 != "" && b4 != "" && b5 != "" && b6 != "" && b7 != "" && b8 != "" && b9 != ""){
                head[0].innerText = 'Draw!'
                winner = true
                draws++
                draw.innerText = `Draws: ${draws}`
                p1Start ? player1 = true : player1 = false
            }
        }

        
                
    })
      
    button.addEventListener('mouseover', function(event){
        if(winner == false){
            if(event['target']['style']['backgroundColor'] != 'orangered'){
                if(event['target']['style']['backgroundColor'] != 'aqua'){
                    player = player1 ? hoverly(event, 'rgba(255,70,0,.2)') : hoverly(event, 'rgba(1,255,255, .4)')
                }
            }
        }
    })
    
    button.addEventListener('mouseout', function(event){
        if(winner == false){
            if(event['target']['style']['backgroundColor'] != 'orangered'){
                if(event['target']['style']['backgroundColor'] != 'aqua'){
                    event.target.style.backgroundColor = null
                }
            }
        }
    })
}