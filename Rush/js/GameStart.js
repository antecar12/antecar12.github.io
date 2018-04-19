var GameStart = {
    
    preload: function(){
    
        this.load.image('play', 'assets/play.png');
        this.load.image('player', 'assets/player.png');
        this.load.image('obstacle', 'assets/obstacle.png');
        this.load.image('restart', 'assets/restart.png');
        this.load.image('keys', 'assets/keys.png');
    },
    
    create: function(){
        
        var style1 = {fontSize: '80px', fill: '#fff'};
        var style2 = {fontSize: '30px', fill: '#fff'};
        
        //Game Name
        var gamename = this.add.text(game.world.centerX,100,'Rush', style1);
        gamename.anchor.setTo(0.5);
        
        //Controll Instructions
        var controls = this.add.text(game.world.centerX,230,'Controls:', style2);
        controls.anchor.setTo(0.5);
        
        var keys = this.game.add.sprite(game.world.centerX, 300, 'keys');
        keys.anchor.setTo(0.5);
        
        //Play Button
        var play = game.add.button(game.world.centerX, game.world.centerY, 'play');
        play.anchor.setTo(0.5);
        
        
        play.events.onInputUp.add(function(){
            this.state.start('GameState', true, false);
        },this);
    }
}