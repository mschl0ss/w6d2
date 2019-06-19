class Game {
  //holds taken moves? Use .length to determine #current player?

  //hold onto current player
  constructor () {
    this.turnCounter = 0;
    this.winningCombo = [];
  }

  currentPlayer () {
    if ( this.turnCounter % 2 === 0 ) return 'x';
    else return 'o';
  }
  //

  isGameOver () {

    const winSeqs = [
      //horizontals
      [ 1,2,3 ],
      [ 4,5,6 ],
      [ 7,8,9 ],

      //verticals
      [ 1,4,7 ],
      [ 2,5,8 ],
      [ 3,6,9 ],

      //diagonals
      [ 1,5,9 ],
      [ 3,5,7 ]

    ];

    //declare some stuff we'll need
    let $lis = $('li');
    const x = [], o = [];
    let winner = 'none';

    if (this.turnCounter >= 8) winner = 'tied';

    //loop through the game lis
    //if the given li has a class, push it's gridPos into the right array
    for (let i = 0; i < $lis.length; i++) {
      const li = $lis.eq(i);
      if ( li.attr('class') === 'x' ) x.push( li.data('gridPos') );
      else if ( li.attr('class') === 'o' ) o.push( li.data('gridPos') );
    }

    //for each win sequence, if every element in the sequence is present
    // in the x or o array, that player wins.
    winSeqs.forEach ( seq => {
      if ( seq.every( el => x.includes(el) ) ) {
        winner = 'x';
        this.winningCombo = seq;
      }
      if ( seq.every( el => o.includes(el) ) ) {
        winner = 'o';
        this.winningCombo = seq;
      }
    });
  
    
    return winner;
  }

}

// create Game.prototype.playMove - regiseters their move


module.exports = Game;


