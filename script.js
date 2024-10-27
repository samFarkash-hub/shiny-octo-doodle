// Initialize a 2D array representing the 3x3 grid (empty initially)
let gridArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  

  // Select all the table cells
  const tableCells = document.querySelectorAll('td');
  let playerState = "X";
  // Add an event listener to each cell
  tableCells.forEach((cell, index) => {
    // Calculate the row and column of the cell based on its index
    const row = Math.floor(index / 3);  // Row index
    const col = index % 3;              // Column index
  
    cell.addEventListener('click', function() {
      // Check if the cell is empty before placing the "X"
      
      if (cell.textContent === '') {
        cell.textContent = playerState;       // Update the cell with "X"
        gridArray[row][col] = playerState;    // Update the corresponding position in the array
        console.log(gridArray);       // Log the updated array
        playerState = (playerState === 'X') ? 'O' : 'X';
        check = checkIfPlayerWins();
        if (check!=""){
           alert(check); 
        }               
    }
    });
  });
  

  document.getElementById('newGame').addEventListener('click', function() {
    tableCells.forEach(cell => {
        cell.innerHTML = ""; // Set the content of the cell to an empty string
    });   
    gridArray = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
  });





  function checkIfPlayerWins(){
    let xWin = "x Wins!!!";
    let oWin = "o Wins!!!";
    for (let i = 0; i < gridArray.length; i++) {
        let win = false
      if (gridArray[i][0] === "X" && gridArray[i][1]=== "X" && gridArray[i][2] ==="X"){
        win = true;
        return xWin;
      }
      if (gridArray[i][0] === "O" && gridArray[i][1]=== "O" && gridArray[i][2] ==="O"){
        win = true;
        return oWin;
      }
      if (gridArray[0][i] === "X" && gridArray[1][i]=== "X" && gridArray[2][i] ==="X"){
        win = true;
        return xWin;
      }
      if (gridArray[0][i] === "O" && gridArray[1][i]=== "O" && gridArray[2][i] ==="O"){
        win = true;
        return oWin;
      } 
      
    }
    if (gridArray[0][0] === "X" && gridArray[1][1]=== "X" && gridArray[2][2] ==="X"){
        win = true;
        return xWin;
      }
      if (gridArray[0][2] === "X" && gridArray[1][1]=== "X" && gridArray[2][0] ==="X"){
        win = true;
        return xWin;
      }

      if (gridArray[0][0] === "O" && gridArray[1][1]=== "O" && gridArray[2][2] ==="O"){
        win = true;
        return oWin;
      }
      if (gridArray[0][2] === "O" && gridArray[1][1]=== "O" && gridArray[2][0] ==="O"){
        win = true;
        return oWin;
      }
return "";

  } 

  

  