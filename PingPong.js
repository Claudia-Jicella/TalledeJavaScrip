(function(){
    self === window
    self.Board= function(width,height) {
        this.width=width;
        this.height=height;
        this.playing=false;
        this.game_over=false;
        this.bars=[];
        this.ball = null;
               
    }

    self.Board.prototype = {
        get elements(){
            var elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }
})();
(function(){
    self.Bar = function(x,y,width,height,board) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";       
    }

    self.Board.prototype = {
        down: function(){


        },
        up: function(){


        }


    }




})();



(function(){
    self.BoardView = function (canvas,ball){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    } 

    function draw(ctx,elements){
        switch (elements.kind){
            case "square":
                ctx.fillRect(elements.x,elements.y,elements.width,elements.height);
                break;
        }


    }


})();

window.addEventListener("load",main)

function main () {
    var board = new Board (800,400);
    console.log(board);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas,board);

}