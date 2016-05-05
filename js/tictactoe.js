$(document).ready(function() {

  var board = $(".board");
  var html = "";
  var moveCnt = 0;

  var win = false;

  var currentTurn = "X";

  var boardArray = ["", "", "", "", "", "", "", "", ""];

  var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  Initialize();

  // 'New Game' button reinitializes the game
  $("#new").click(function() {
    Initialize();
  });

  // Player chose a div
  board.click(function(event) {
    if (win === false && moveCnt < 9) {
      move(event.target.id);
    }
  });

  // Initialize TicTacToe game
  function Initialize() {
    win = false;
    moveCnt = 0;
    boardArray = ["", "", "", "", "", "", "", "", ""];
    board.empty();
    for (var i = 0; i < 9; i++) {
      html = "<div id='"+ i.toString() +"' class='box'></div>";
      board.append(html);
    }
  }

  // Update the HTML and boardArray with move and switch players
  function move(id) {
    var intId = parseInt(id);

    if (boardArray[intId] === "") {
      moveCnt++;
      $("#" + id).html("<p>"+currentTurn+"</p>").hide().fadeIn("fast");
      boardArray[intId] = currentTurn;
      console.log(boardArray);
      checkMove();
      if (currentTurn === "X") {
        currentTurn = "O";
      } else {
        currentTurn = "X";
      }
    } else {
      alert ("Spot has already been taken. Choose another.");
    }
  }

  // Check the board to see if the move just made won
  function checkMove() {
    for (var i = 0; i < winConditions.length; i++) {
      if (boardArray[winConditions[i][0]] === currentTurn && boardArray[winConditions[i][0]] === boardArray[winConditions[i][1]] && boardArray[winConditions[i][1]] === boardArray[winConditions[i][2]]) {
        win = true;
        alert(currentTurn + " has won!");
      }
    }
    if (moveCnt > 8 && win === false) {
      alert ("The game is over. It's a draw.");
    }
  }

});
