/**
 * Created by Duy_2 on 2016-05-19.
 */

function createMap(){     
    map=[];
    for(var i=0;i<500;i++)
    {
        var row = [];
        map[i]= row;
        for(var j=0;j<500;j++) {
            map[i].push(0);
        }
    }
}
        
function drawMap(context){
    var x = 0;
    var y = 0;
    for (var i = 0; i < map.length; i++){
        for (var j = 0; j < map.length;j++){
            if (map[i][j] == 1)
            {
                var wall = new Wall(x,y);
                wall.draw(context);
            }
            x += 50;
        }
        x = 0;
        y += 50;
    }
}
