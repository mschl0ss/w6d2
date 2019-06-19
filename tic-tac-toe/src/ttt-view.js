class View {
  constructor(game, $root) {
    this.game = game;
    this.$root = $root;
    this.gameOver = false;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {

    let $squares = $('li');
    for (let i = 0; i < $squares.length; i++) {
      $squares.eq(i).on('click', e => {
        const square = $(e.target);
        this.makeMove(square);
      });
    }
  }

  makeMove($square) {
    //call Game.prototype.playMove
    if ( this.gameOver ) { alert('it\s done bro.  walk away.')}
    else {
      let player = this.game.currentPlayer();

      if ( !$square.attr('class') ) {

        $square.addClass(player);

        const outcome = this.game.isGameOver();
        console.log(outcome);

        if ( outcome !== 'none' ) {
          this.gameOver = true;
          this.throwAParade(outcome);
        }
        else {
          this.game.turnCounter += 1;
        }
      }
      else {
        alert('feck off');
      }
    }

  }

  setupBoard() {
    const $board = $("<ul>");
    $board.attr('id', 'board');

    for (let i = 1; i < 10; i++) {
      let $square = $("<li>");
      $square.data('gridPos', i);
      $square.attr('id', i);
      $board.append($square);
    }

    this.$root.append($board);
  }

  throwAParade (winningClass) {
 
    // $(`li.${winningClass}`).css('background','green');
    // $(`li.${winningClass}`).css('color','white');

    let $lis = $('li');

    for (let i = 0; i < $lis.length; i++) {
      const $li = $lis.eq(i);
      if (this.game.winningCombo.includes($li.data('gridPos'))) {
        $li.css('background', 'green');
        $li.css('color', 'white');
      }
      else {
        $li.attr('id', "loser-square");
        $li.removeClass();
        
      }

    }

    $('body').attr('class','bender');
    $('h1').css('color', 'white');
    
    
    setTimeout(() => alert('Congrats ' + winningClass), 0);

  }

}

module.exports = View;
