var score = 0;
var GameOver = {
    
    init: function (score) {
        this.score = score;
    },
    
    create: function(){
        
        var gameover = this.add.text(game.world.centerX, 200,'Game Over', {fontSize: '55px', fill: '#fff'});
        gameover.anchor.setTo(0.5);
        
        var score = this.add.text(game.world.centerX, game.world.centerY, this.score, {fontSize: '350px', fill: '#fff'});
        score.anchor.setTo(0.5);
        
        var restart = game.add.button(game.world.centerX, 800, 'restart');
        restart.anchor.setTo(0.5);
        
        restart.events.onInputUp.add(function(){
            location.reload();
        },this);
    }
};