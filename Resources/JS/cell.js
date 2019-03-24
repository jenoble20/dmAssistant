
/**A SINGLE CELL FOR THE BATTLE MAP
 * A GRID OF THESE WILL CREATE THE ENTIRE MAP.
 * THE CELL IS CAPABLE OF KEEPING TRACK OF WHERE
 * IT IS ON THE MAP AS WELL AS
 * WHETHER THE CURRENTLY SELECTED CHARACTER
 * TOKEN IS WITHIN MOVEMENT RANGE OF IT OR
 * IF THERE IS ALREADY A CHARACTER TOKEN ON IT.
 */
export class Cell {
    constructor(x,y, w, h){
        this.xCoord = x;
        this.yCoord = y;
        this.width = 80;
        this.height = 46.19;
        this.occupied = false;
        this.inRange = false;
        this.structure = "<div class='cell'></div>";
    }

    get isOccupied(){ return this.occupied; }
    set isOccupied(condition){ this.occupied = condition; }
    get cellWidth(){ return this.width; }
    get cellHeight(){ return this.height; }
}//end Cell class
/**/









// export class Map{
//     constructor(){
//         this.width = $(".main").width;
//         this.height = $(".main").height;
//         this.cellArray = [];
//     }
//     get mapWidth(){ return this.width; }
//     get array(){ return this.cellArray; }
// }//END MAP CLASS

