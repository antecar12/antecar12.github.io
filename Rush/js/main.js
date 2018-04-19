var game=new Phaser.Game(720,1000,Phaser.AUTO);

game.state.add('GameStart', GameStart);
game.state.add('GameState', GameState);
game.state.add('GameOver', GameOver);

game.state.start('GameStart');

            