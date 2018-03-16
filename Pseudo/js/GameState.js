var GameState = {
    
    
    create: function(){
        
        this.add.sprite(0, 0, 'background');
        
        var namn=(prompt('Hej skriv ditt namn...'));
        this.bakfram(namn);
        
        
        var rubrik = this.add.text(game.world.centerX,120,'Här är ditt namn baklänges:', {fontSize: '45px', fill: '#fff'});
        rubrik.anchor.setTo(0.5);
        
        
        var restart = game.add.button(100, 500, 'restart');
        restart.anchor.setTo(0.5);
        
        restart.events.onInputUp.add(function(){
            this.state.start(this.state.current);
        },this);
        
        
        var end = game.add.button(700, 500, 'button');
        end.anchor.setTo(0.5);
        
        end.events.onInputUp.add(function(){
            this.state.start('GameOver', true, false);
        },this);
        
    },

        bakfram: function(namn){
            var ny = [];
            for(var i = namn.length-1; i >= 0; i--){
                if(namn[i]==' '){
                    ny.push('_');
                }else{
                    
                  ny.push(namn[i]);  
               
                }
                
            }
            
            var skrev = game.add.text(game.world.centerX, 50, 'Det du skrev: '+namn,{fontSize: '35px', fill: '#fff'});
            
            skrev.anchor.set(0.5);
            
            var resultat = game.add.text(game.world.centerX, 200, ny.join(""),{fontSize: '65px', fill: '#fff'});
            
            resultat.anchor.set(0.5);
        },

};