var GameStart = {
    preload: function(){
        this.load.image('background', 'assets/eggs.jpg');
        this.load.image('button', 'assets/button.png');
        this.load.image('restart', 'assets/buttonturned.png');
    },
    
    create: function(){
        
        this.add.sprite(0, 0, 'background');
        
        var rubrik = this.add.text(game.world.centerX,100,'Namnvändaren', {fontSize: '55px', fill: '#fff'});
        rubrik.anchor.setTo(0.5);
        
        var button = game.add.button(game.world.centerX, game.world.centerY, 'button');
        button.anchor.setTo(0.5);
        
        button.events.onInputUp.add(function(){
            this.state.start('GameState', true, false);
        },this);
    },
    
  //  var style = {font: '35px Arial', '#fff'};

  //  this.game.add.text( 30, this.game.world.centerY + 200, 'Textvändaren', style);

 //   this.add.button(100,350,'restart', this.startaom, this, 1,0);
}