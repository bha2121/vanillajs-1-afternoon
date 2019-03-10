console.log('index.js is working')

let ticTacBoard = []

let play = (val) => {
    let player = document.getElementById('player')
    let element = document.getElementById(val)

    console.log(document.getElementById(val))


    if (player.innerText === 'O'){
        player.innerText = 'X'
        element.innerText = 'O'
        ticTacBoard[val] = 'O'
        
    }else{
        player.innerText = 'O'
        element.innerText = 'X'
        ticTacBoard[val] = 'X'
    }

    let sq1 = ticTacBoard [0]
    let sq2 = ticTacBoard [1]
    let sq3 = ticTacBoard [2]
    let sq4 = ticTacBoard [3]
    let sq5 = ticTacBoard [4]
    let sq6 = ticTacBoard [5]
    let sq7 = ticTacBoard [6]
    let sq8 = ticTacBoard [7]
    let sq9 = ticTacBoard [8]


// [1,2,3]
// [4,5,6]
// [7,8,9]
// [1,4,7]
// [2,5,8]
// [3,6,9]
// [1,5,9]
// [3,5,7]



    if ( sq1!== undefined && sq1 === sq2 && sq1 === sq3 ){
        window.alert(`Player ${element.innerText} WINS!`)

    }else if ( sq4!== undefined && sq4 === sq5 && sq4 === sq6 ){
        window.alert(`Player ${element.innerText} WINS!`)

    }else if ( sq7!== undefined && sq7 === sq8 && sq7 === sq9 ){
        window.alert(`Player ${element.innerText} WINS!`)

    }else if ( sq1!== undefined && sq1 === sq4 && sq1 === sq7 ){
        window.alert(`Player ${element.innerText} WINS!`)

    }else if ( sq2!== undefined && sq2 === sq5 && sq2 === sq8 ){
        window.alert(`Player ${element.innerText} WINS!`)

    }else if ( sq3!== undefined && sq3 === sq6 && sq3 === sq9 ){
        window.alert(`Player ${element.innerText} WINS!`)

    }else if ( sq1!== undefined && sq1 === sq5 && sq1 === sq9 ){
        window.alert(`Player ${element.innerText} WINS!`)

    }else if ( sq3!== undefined && sq3 === sq5 && sq3 === sq7 ){
        window.alert(`Player ${element.innerText} WINS!`)


    }else if (sq1 != undefined && sq2 != undefined && sq3 != undefined && sq4 != undefined && sq5 != undefined && sq6 != undefined && sq7 != undefined && sq8 != undefined && sq9 != undefined){
        window.alert(`CAT has won the game`)
    }

console.log(sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9)

}





































































 // for (i = 0 ; i < ticTacBoard.length ; i++){
    //     if ( sq1 === sq2 && sq1 === sq3 ){
    //         window.alert(`Player ${element.innerText} WINS!`)

    //     }else if ( sq4 === sq5 && sq4 === sq6 ){
    //         window.alert(`Player ${element.innerText} WINS!`)

    //     }else if ( sq7 === sq8 && sq7 === sq9 ){
    //         window.alert(`Player ${element.innerText} WINS!`)

    //     }else if ( sq1 === sq4 && sq1 === sq7 ){
    //         window.alert(`Player ${element.innerText} WINS!`)

    //     }else if ( sq2 === sq5 && sq2 === sq8 ){
    //         window.alert(`Player ${element.innerText} WINS!`)

    //     }else if ( sq3 === sq6 && sq3 === sq9 ){
    //         window.alert(`Player ${element.innerText} WINS!`)

    //     }else if ( sq1 === sq5 && sq1 === sq9 ){
    //         window.alert(`Player ${element.innerText} WINS!`)

    //     }else if ( sq3 === sq5 && sq3 === sq7 ){
    //         window.alert(`Player ${element.innerText} WINS!`)


    //     }else{
    //         window.alert(`CAT has won the game`)
    //     }

    // } 






// for( i = 0 ; i < ticTacBoard.length; i++){


//     if (ticTacBoard[0] === ticTacBoard[1] && ticTacBoard[0] === ticTacBoard[2] ) {
//         window.alert(`player ${element.innerText} WINS!`)

//     }else if (ticTacBoard[3] === ticTacBoard[4] && ticTacBoard[3] === ticTacBoard[5] ) {
//         window.alert(`player ${element.innerText} WINS!`)

//     }else if (ticTacBoard[6] === ticTacBoard[7] && ticTacBoard[6] === ticTacBoard[8] ) {
//         window.alert(`player ${element.innerText} WINS!`)

//     }else if (ticTacBoard[0] === ticTacBoard[3] && ticTacBoard[0] === ticTacBoard[6] ) {
//         window.alert(`player ${element.innerText} WINS!`)

//     }else if (ticTacBoard[1] === ticTacBoard[4] && ticTacBoard[1] === ticTacBoard[7] ) {
//         window.alert(`player ${element.innerText} WINS!`)

//     }else if (ticTacBoard[2] === ticTacBoard[5] && ticTacBoard[2] === ticTacBoard[8] ) {
//         window.alert(`player ${element.innerText} WINS!`)

//     }else if (ticTacBoard[0] === ticTacBoard[4] && ticTacBoard[0] === ticTacBoard[8] ) {
//         window.alert(`player ${element.innerText} WINS!`)

//     }else if (ticTacBoard[2] === ticTacBoard[4] && ticTacBoard[2] === ticTacBoard[6] ) {
//         window.alert(`player ${element.innerText} WINS!`)
//     }else{
//         window.alert(`CAT has won the game`)
//     }
// } 




// [0,1,2]
// [3,4,5]
// [6,7,8]
// [0,3,6]
// [1,4,7]
// [2,5,8]
// [0,4,8]
// [2,4,6]





