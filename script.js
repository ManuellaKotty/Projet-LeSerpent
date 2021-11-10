window.onload = function () {

    var canvas;
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var ctx; 
    var delay = 100;
    var snakee;
    
    init();

    function init() {
        canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");
        snakee = new Snake([[6,4], [5,4], [4,4]]);
        refreshCanvas();
        
    }
    
    function refreshCanvas() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas, delay);
    }

    function drawBlock(ctx, position) {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }

    function Snake(body) { // On crée la classe Snake 
        // Corps du serpent : body. Ce sera un array de coordonnées sur le canvas : un ensemble de petits blocks.
        this.body = body;
        // Method draw : pour dessiner le serpent
        this.draw = function () {
            ctx.save(); //Pourquoi save()???
            ctx.fillStyle = "#ff0000"; // Why is it repeated ?
            for (let i = 0; i < this.body.length; i++) {
                drawBlock(ctx, this.body[i]);
                
            }
            ctx.restore();
        }
        this.advance = function () { //Faire avancer le snake
            var nextPosition = this.body[0].slice();
            nextPosition[0] += 1;
            this.body.unshift(nextPosition);
            this.body.pop();
        }
    }
    
}