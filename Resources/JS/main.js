import {Cell} from './cell.js'; 
//RENAME MAP.JS TO CELL.JS IF THE MAP CLASS IN NOT NECESSARY
$(document).ready(function(){
    const cellWidth = 80;
    const cellHeight = 46.19;
    let value = 0;

    /**ALLOWS THE USER TO HOVER
     * OVER EACH STATISTIC, DISPLAYING
     * THE CORRESPONDING MODIFIER
     */
    $(".stat").mouseenter(function(){
        value = $(this).children(".value").text();
        value = parseInt(value, 10);
        $(this).children(".value").text(getMod(value));
    })//end mouseenter event
    $(".stat").mouseleave(function(){
        $(this).children(".value").text(value);
        value = 0;
    })//end mouseleave event
    /**/


    /**CREATES THE BATTLE MAP, WHICH
     * CONSISTS OF A GRID OF CELLS THAT
     * ARE DEFINED IN THE 'cell.js' FILE.
     */

    const makeMap = function(){
        let x=0;
        let y=0;
        let limit = 0;
        console.log($("main").width());
        while(limit<$("main").width()){
            let newCell = new Cell(x,y,cellWidth,cellHeight);
            console.log(x);
            $("main").append(newCell.structure);
            x++;
            limit+=cellWidth;
        }
    }//end makeMap()
    /**/
    makeMap()

    


















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