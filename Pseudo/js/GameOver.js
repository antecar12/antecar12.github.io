var GameOver = {
    
    create: function(){
        
        this.add.sprite(0, 0, 'background');
        
        
        var rubrik = this.add.text(game.world.centerX, 50,'Game Over', {fontSize: '55px', fill: '#fff'});
        rubrik.anchor.setTo(0.5);
        
        var tack = this.add.text(game.world.centerX, 120,'Tack för att du använde Namnvändaren.', {fontSize: '35px', fill: '#fff'});
        tack.anchor.setTo(0.5);
    }
};