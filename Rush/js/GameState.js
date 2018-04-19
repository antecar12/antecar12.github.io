var obstacles = [];
var speed = 3;
var score = 0;
var scorecount = '';
var GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizantally = true;
        this.scale.pageAlignVertically = true;
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    create: function () {

        // Add player.
        this.player = this.game.add.sprite(game.world.centerX, 900, 'player');
        this.player.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.player)
        
        //Score Counter.
        scorecount = this.add.text(game.world.centerX, game.world.centerY, score, {fontSize: '350px', fill: '#181818'});
        scorecount.anchor.setTo(0.5);

        obstacles.push(this.createObstacle());
    },
    
    gameOver: function () {
        
        game.state.start('GameOver', true, false, score)
    },

    createObstacle: function () {
        var x;
        // Get 0 or 1
        if (Math.round(Math.random())) {
            x = 360;
        } else {
            x = 0;
        }

        var obstacle = this.game.add.sprite(x, -50, 'obstacle');
        this.physics.arcade.enable(obstacle)

        return obstacle;
    },

    update: function () {
        

        let outsideBoundraries = false;
        let shouldAddObstacle = false;
        
        var that = this;
        
        obstacles.forEach(function (obstacle) {
        
            // Adding Speed to the obstacles.
            obstacle.y = obstacle.y + speed;

            // If an obstacle has passed halfway, add new.
            if (obstacle.y > game.world.height / 2 && !obstacle.passed) {
                shouldAddObstacle = true;
                obstacle.passed = true;
            }

            // If at the bottom, delete obstacle.
            if (obstacle.y > game.world.height) {
                outsideBoundraries = true;
            }
        
            game.physics.arcade.overlap(that.player, obstacle, that.gameOver);

        });

        if (shouldAddObstacle) {
            obstacles.push(this.createObstacle())
        }
        
        // Increase Score & Speed when obstacle is outside boundraries.
        if (outsideBoundraries) {
            obstacles.shift();
            score++;
            scorecount.setText(score);
            
            // If speed reaches 30 stop increasing it.
            if (speed < 30) {
                speed += 0.30;
            }
            
            if (score >= 200) {
                speed = 32.5;
            }
            
            if (score >= 300) {
                speed = 35;
            }
        } 

        console.log(score, speed);
        
        // Cursor controls.
        if (this.cursors.left.isDown) {
            this.player.x = 180;
        }
        else if (this.cursors.right.isDown) {
            this.player.x = 540;
        }
    }
};