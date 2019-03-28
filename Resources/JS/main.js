import {Cell} from './cell.js'; 
//RENAME MAP.JS TO CELL.JS IF THE MAP CLASS IN NOT NECESSARY
$(document).ready(function(){
    const cellWidth = 80;
    const cellHeight = 46.19;
    const ROWS = 18;
    const COLUMNS = 14;
    let value = 0;


    /**ALLOWS THE USER TO HOVER
     * OVER EACH STATISTIC, DISPLAYING
     * THE CORRESPONDING MODIFIER
     */
    $(".stat").mouseenter(function(){
        value = $(this).children(".value").text();
        value = parseInt(value, 10);
        $(this).children(".value").text(getMod(value));
    });//end mouseenter event
    $(".stat").mouseleave(function(){
        $(this).children(".value").text(value);
        value = 0;
    });//end mouseleave event
    /**/


    /**CREATES THE BATTLE MAP, WHICH
     * CONSISTS OF A GRID OF CELLS THAT
     * ARE DEFINED IN THE 'cell.js' FILE.
     */
   const makeMap = function(){
    let map = [];
    for(let y=0; y<ROWS; y++){
        let rowArray = [];
        $("#table").append(`<div class="row ${y}"></div>`);
        for(let x=0; x<COLUMNS; x++){
            let newCell = new Cell(x,y,cellWidth,cellHeight);
            rowArray.push(newCell);
            $(`.row.${y}`).append(newCell.structure);
        }
        map.push(rowArray);
        if(y%2!=0){
            $(`.row.${y}`).css("left", 43)
        }
        if(y%2==0){
            $(`.row.${y}`).css("margin", "20px 0")
        }
    }
    return map;
}//end makeMap()
/**/

let battleMap = makeMap();


/**ADDS A NEW MEMBER TO THE PARTY, UP TO EIGHT MEMBERS.
 * UPON ADDING A NEW MEMBER, THE USER MUST PROVIDE
 * ALL OF THE STATS AND RELEVENT INFORMATION FOR A
 * BATTLE. 
 * 
 * NOTE THAT THERE ARE TWO BUTTON CLICK EVENTS, ONE
 * FOR ADDING A FRIENDLY MEMBER AND ONE FOR ADDING
 * AN ENEMY. THIS IS JUST TO AVOID HAVING TO CHECK
 * AT RUNTIME WHICH BUTTON WAS SELECTED.
 */

 //Adding a friendly party member
$("newHero").click(function(){
    
});//end button click event

















    /*METHOD DEFINITIONS*/

    /*TAKES THE VALUE OF A SINGLE STAT, AND DETERMINES THE MODIFIER FOR IT.*/
    const getMod = function(val){
        let mod = ""
        switch(true){
            case (val==1):
                mod = "-1";
            break;
            case (2<=val && val<=3):
                mod = "-4"; 
            break;
            case (4<=val && val<=5):
                mod = "-3";
            break;
            case (6<=val && val<=7):
                mod = "-2";
            break;
            case (8<=val && val<=9):
                mod = "-1";
            break;
            case (10<=val && val<=11):
                mod = "0"
            break;
            case (12<=val && val<=13):
                mod = "+1";
            break;
            case (14<=val && val<=15):
                mod = "+2";
            break;
            case (16<=val && val<=17):
                mod = "+3";
            break;
            case (18<=val && val<=19):
                mod = "+4";
            break;
            case (20<=val && val<=21):
                mod = "+5";
            break;
            case (22<=val && val<=23):
                mod = "+6";
            break;
            case (24<=val && val<=25):
                mod = "+7";
            break;
            case (26<=val && val<=27):
                mod = "+8";
            break;
            case (28<=val && val<=29):
                mod = "+9";
            break;
            case (val==30):
                mod = "+10";
            break;
            default:
                mod = "??";
            break;
        }
        return mod;
    }//end getMod()
    /**/
})