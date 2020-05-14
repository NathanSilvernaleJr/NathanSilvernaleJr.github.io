var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "person", "x": 400, "y": groundY - 20 },
                { "type": "person", "x": 600, "y": groundY - 20 },
                { "type": "person", "x": 900, "y": groundY - 20},
                { "type": "person", "x": 1300, "y": groundY - 20},
                {"type": "enemy", "x": 1500, "y": groundY - 50},
                {"type": "enemy", "x": 3100, "y" : groundY - 50},
                {"type": "enemy", "x": 2300, "y": groundY - 50},
                {"type": "enemy", "x": 4100, "y": groundY- 50},
                {"type": "person", "x": 2000, "y": groundY - 20},
                {"type": "reward", "x": 1000, "y": groundY- 140},
                {"type": "enemy", "x": 4800, "y": groundY - 50},
                {"type": "person", "x": 2400, "y": groundY - 20},
                {"type": "enemy", "x": 5700, "y": groundY - 50},
                {"type": "reward", "x": 3700, "y": groundY - 140},
                {"type": "boss", "x": 6500, "y": groundY - 50},
                {"type": "boss", "x": 7300, "y": groundY - 50},
                {"type": "person", "x": 3300, "y": groundY - 20},
                {"type": "reward", "x": 2800, "y": groundY - 140},
                {"type": "boss", "x": 8200, "y": groundY - 50},
                {"type": "boss", "x": 10000, "y": groundY - 50},
                {"type": "boss", "x": 11000, "y": groundY - 50},
                {"type": "boss", "x": 12000, "y": groundY - 50},
                {"type": "enemy", "x": 6000, "y": groundY - 50},
                {"type": "enemy", "x": 6500, "y": groundY - 50}
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
function createPerson(x, y) {
    var hitZoneSize = 25;
var damageFromObstacle = 10;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);

        var obstacleImage = draw.bitmap('img/persson.png');
        obstacleImage.scaleY = 0.4;
        obstacleImage.scaleX = 0.4;
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -75;
}
function createEnemy(x, y){
    var enemy =  game.createObstacle(50,30);
var redSquare = draw.bitmap('img/sneezing_person.png');
redSquare.scaleX = 0.2;
redSquare.scaleY = 0.2;
redSquare.x = -25;
redSquare.y = -60;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
enemy.velocityX = -4;
enemy.onProjectileCollision = function(){
    game.increaseScore(100);
    enemy.fadeOut();
}
game.addGameItem(enemy);
}
function createBoss(x, y){
    var enemy =  game.createObstacle(50, 100);
var redSquare = draw.bitmap('img/coronavirus.png');
redSquare.scaleX = 0.2;
redSquare.scaleY = 0.2;
redSquare.x = -25;
redSquare.y = -60;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
enemy.velocityX = -8;
enemy.onProjectileCollision = function(){
    game.increaseScore(100);
    enemy.fadeOut();
}
game.addGameItem(enemy);
}
function createReward(x, y){
    var hitZoneSize = 25;
var damageFromObstacle = -10;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);
        var either = Math.floor(Math.random() * 2);
        var randomImage = ['img/toilet-paper.png', 'img/hand-sanitizer.png'];
        var obstacleImage = draw.bitmap(randomImage[either]);
        if (either >= 1){
            obstacleImage.scaleX = 0.06;
            obstacleImage.scaleY = 0.06;
        }
        else{
        obstacleImage.scaleY = 0.4;
        obstacleImage.scaleX = 0.4;
        }
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -75;
sawBladeHitZone.onPlayerCollision = function(){
    game.increaseScore(100);
}

}

        for (var i = 0; i < levelData.gameItems.length; i++){
            var eachElement = levelData.gameItems[i];
            if (eachElement.type === "person"){
                createPerson(eachElement.x, eachElement.y);
            }
            if (eachElement.type === "enemy"){
                createEnemy(eachElement.x, eachElement.y);
            }
            if (eachElement.type === "boss"){
                createBoss(eachElement.x, eachElement.y);
            }
            if (eachElement.type === "reward"){
                createReward(eachElement.x, eachElement.y);
            }
            
        }
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
