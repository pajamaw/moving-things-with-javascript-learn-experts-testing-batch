const app = "I don't do much."

const dodger = document.getElementById('dodger');
//const game = document.getElementById('game');

//const gameEdge = parseInt((game.style.width.replace('px', ''), 10))
//const dodgerEdge = parseInt((dodger.style.width.replace('px', ''), 10))
//const difference = gameEdge - dodgerEdge

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener('keydown', function(e){
  //console.log(e.which)
  if (e.which === 37){
  moveDodgerLeft()
} else if (e.which === 39){
    moveDodgerRight()
  }
})
//document.addEventListener('keydown', function(e){
  //console.log(e.which)
  //if (e.which === 37){
//    var leftNumbers = dodger.style.left.replace('px', '')
  //  var left = parseInt(leftNumbers, 10)

    //dodger.style.left = `${left - 10}px`
  //}
//})
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)

  if (right < 360) {
    dodger.style.left = `${right + 10}px`
  }
}
