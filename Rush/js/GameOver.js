var score = 0;
var GameOver = {
    
    init: function (score) {
        this.score = score;
    },
    
    create: function(){
        
        var style1 = {fontSize: '70px', fill: '#fff'};
        var style2 = {fontSize: '350px', fill: '#fff'};
        var style3 = {fontSize: '12px', fill: '#fff'};
        
        //Game Over text
        var gameover = this.add.text(game.world.centerX, 200,'Game Over', style1);
        gameover.anchor.setTo(0.5);
        
        //Display final score
        var score = this.add.text(game.world.centerX, game.world.centerY, this.score, style2);
        score.anchor.setTo(0.5);
        
        //Credits
        var credits = this.add.text(game.world.centerX, 970, 'Pictures made by: Anton Carlstedt also brought from openclipart.org', style3);
        credits.anchor.setTo(0.5);
        
        //Restart button
        var restart = game.add.button(game.world.centerX, 800, 'restart');
        restart.anchor.setTo(0.5);
        
        restart.events.onInputUp.add(function(){
            location.reload();
        },this);
    }
};