// Factory function to make nodes for moves
function MoveNode(currentMove, previousMove = null) {
  return {
    squareName: currentMove,
    nextMove1: null,
    nextMove2: null,
    nextMove3: null,
    nextMove4: null,
    nextMove5: null,
    nextMove6: null,
    nextMove7: null,
    nextMove8: null,
    previousMove: previousMove,
  };
}

function knightTravals() {
  // stores the starting move and the whole tree is built on it
  let start;

  //takes 2 arguements - starting square and ending square
  function knightMoves(startMove, endMove) {
    start = MoveNode(startMove);

    let endNode = makeMoveTree(start, endMove);

    let path = [];

    while (endNode != null) {
      path.unshift(endNode.squareName);

      endNode = endNode.previousMove;
    }
    console.log(`You made it in ${path.length - 1} moves! Here was your path:`);
    path.forEach((node) => console.log(node));
  }

  //makes a tree of all possible nodes until endMove is encountered
  //tree is made using breadth first inserting
  function makeMoveTree(move, end) {
    let queue = []; //queue for breadth first approach

    //push the starting move in the queue
    queue.push(move);

    // loop will run until queue is not empty,
    //but  the function will always return if the endNode is found,
    //which will always happen
    while (queue.length > 0) {
      //remove the first element from the queue
      let tempMove = queue.shift();

      //check if the square is the same as end, if it is, then return that square
      if (checkEqual(tempMove.squareName, end)) return tempMove;

      fillNextMove(tempMove);

      // if the next moves exists push them into the queue
      if (tempMove.nextMove1) queue.push(tempMove.nextMove1);
      if (tempMove.nextMove2) queue.push(tempMove.nextMove2);
      if (tempMove.nextMove3) queue.push(tempMove.nextMove3);
      if (tempMove.nextMove4) queue.push(tempMove.nextMove4);
      if (tempMove.nextMove5) queue.push(tempMove.nextMove5);
      if (tempMove.nextMove6) queue.push(tempMove.nextMove6);
      if (tempMove.nextMove7) queue.push(tempMove.nextMove7);
      if (tempMove.nextMove8) queue.push(tempMove.nextMove8);
    }
  }

  //add the next possible eight moves if they exist to the given move
  function fillNextMove(move) {
    if (checkMove([move.squareName[0] + 2, move.squareName[1] + 1]))
      move.nextMove1 = MoveNode(
        [move.squareName[0] + 2, move.squareName[1] + 1],
        move
      );
    if (checkMove([move.squareName[0] + 2, move.squareName[1] - 1]))
      move.nextMove2 = MoveNode([
        move.squareName[0] + 2,
        move.squareName[1] - 1],
        move,
      );
    if (checkMove([move.squareName[0] - 2, move.squareName[1] + 1]))
      move.nextMove3 = MoveNode([
        move.squareName[0] - 2,
        move.squareName[1] + 1],
        move,
      );
    if (checkMove([move.squareName[0] - 2, move.squareName[1] - 1]))
      move.nextMove4 = MoveNode([
        move.squareName[0] - 2,
        move.squareName[1] - 1],
        move,
      );
    if (checkMove([move.squareName[0] + 1, move.squareName[1] + 2]))
      move.nextMove5 = MoveNode([
        move.squareName[0] + 1,
        move.squareName[1] + 2],
        move,
      );

    if (checkMove([move.squareName[0] + 1, move.squareName[1] - 2]))
      move.nextMove6 = MoveNode([
        move.squareName[0] + 1,
        move.squareName[1] - 2],
        move,
      );

    if (checkMove([move.squareName[0] - 1, move.squareName[1] + 2]))
      move.nextMove7 = MoveNode([
        move.squareName[0] - 1,
        move.squareName[1] + 2],
        move,
      );
    if (checkMove([move.squareName[0] - 1, move.squareName[1] - 2]))
      move.nextMove8 = MoveNode([
        move.squareName[0] - 1,
        move.squareName[1] - 2],
        move,
      );
  }
  //function to check if the move is possible (should be within board)
  function checkMove(arr) {
    if (arr[0] >= 0 && arr[0] < 8 && arr[1] >= 0 && arr[1] < 8) return true;
    else return false;
  }

  //function to match the array  of squares
  function checkEqual(arrA, arrB) {
    return JSON.stringify(arrA) === JSON.stringify(arrB);
  }

  return {
    knightMoves,
  };
}

let test = knightTravals();
test.knightMoves([3, 3], [4, 3]);
