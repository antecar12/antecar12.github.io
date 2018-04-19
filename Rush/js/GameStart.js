var GameStart = {
    
    preload: function(){
    
        this.load.image('play', 'assets/play.png');
        this.load.image('player', 'assets/player.png');
        this.load.image('obstacle', 'assets/obstacle.png');
        this.load.image('restart', 'assets/restart.png');
    },
    
    create: function(){
        
        var style1 = {fontSize: '80px', fill: '#fff'};
        
        var gamename = this.add.text(game.world.centerX,100,'Rush', style1);
        gamename.anchor.setTo(0.5);
        
        var play = game.add.button(game.world.centerX, game.world.centerY, 'play');
        play.anchor.setTo(0.5);
        
        
        play.events.onInputUp.add(function(){
            this.state.start('GameState', true, false);
        },this);
    }
}