$(document).ready(function(){
    let value = 0;

    $(".stat").mouseenter(function(){
        value = $(this).children(".value").text();
        value = parseInt(value, 10);
        $(this).children(".value").text(getMod(value));
    })//END MOUSEENTER EVENT
    $(".stat").mouseleave(function(){
        $(this).children(".value").text(value);
        value = 0;
    })// END MOUSELEAVE EVENT




















    //METHOD DEFINITIONS

    //TAKES THE VALUE OF A SINGLE STAT, AND DETERMINES THE MODIFIER FOR IT.
    const getMod = function(val){
        let mod = -20
        switch(true){
            case (val==1):
                mod = -1;
            break;
            case (2<=val && val<=3):
                mod = -4; 
            break;
            case (4<=val && val<=5):
                mod = -3;
            break;
            case (6<=val && val<=7):
                mod = -2;
            break;
            case (8<=val && val<=9):
                mod = -1;
            break;
            case (10<=val && val<=11):
                mod = 0
            break;
            case (12<=val && val<=13):
                mod = 1;
            break;
            case (14<=val && val<=15):
                mod = 2;
            break;
            case (16<=val && val<=17):
                mod = 3;
            break;
            case (18<=val && val<=19):
                mod = 4;
            break;
            case (20<=val && val<=21):
                mod = 5;
            break;
            case (22<=val && val<=23):
                mod = 6;
            break;
            case (24<=val && val<=25):
                mod = 7;
            break;
            case (26<=val && val<=27):
                mod = 8;
            break;
            case (28<=val && val<=29):
                mod = 9;
            break;
            case (val==30):
                mod = 10;
            break;
            default:
                console.log("NOT FOUND");
            break;
        }
        return mod;
    }

})