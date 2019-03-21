class Cell {
    constructor(){
        this.occupied = false;
        this.structure = $(<p></p>).addClass("cell");
        this.width = 80;
        this.height = 46.19;
    }

    get occupied(){ return this.occupied; }
    get width(){ return this.width; }
    get height(){ return this.height; }
}

class Map{
    constructor(w, h){
        this.width = w;
        this.height = h;
    }

    create(){
        
    }

    get width(){ return this.width; }
}