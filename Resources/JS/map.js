class Cell {
    constructor(){
        this.occupied = false;
        this.structure = $("<p></p>").addClass("cell");
        this.width = 80;
        this.height = 46.19;
    }

    get isOccupied(){ return this.occupied; }
    set isOccupied(condition){ this.occupied = 0; }
    get cellWidth(){ return this.width; }
    get cellHeight(){ return this.height; }
}//END CELL CLASS

class Map{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.cellArray = [];
    }

    get mapWidth(){ return this.width; }
    get array(){ return this.cellArray; }
}//END MAP CLASS