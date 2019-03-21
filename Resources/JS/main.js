$(document).ready(function(){
    let value = 0;

    //$(this) IS REFERRING TO THE ENTIRE DOCUMENT, NO THE ELEMENT THAT IS BEING INTERACTED WITH 
    $(".stat").mouseenter(()=>{
        value = $(this).text();
        let modifier = getMod(value);
        console.log($(this))
        console.log(value);
        console.log(modifier);
        $(this).children(".value").text(value)
    })
    $(".stat").mouseleave(()=>{
        $(this).text(value);
        value = 0;
    })

    const getMod = function(value){
        let mod = -10
        switch(value){
            case 1:
                mod= -1;
            break;
            case (2<=value<=3):
                mod= -4; 
            break;
            case (4<=value<=5):
                mod= -3;
            break;
            case (6<=value<=7):
                mod= -2;
            break;
            case (8<=value<=9):
                mod= -1;
            break;
            case (10<=value<=11):
                mod= 0
            break;
            case (12<=value<=13):
                mod= 1;
            break;
            case (14<=value<=15):
                mod= 2;
            break;
            case (16<=value<=17):
                mod= 3;
            break;
            case (18<=value<=19):
                mod= 4;
            break;
            case (20<=value<=21):
                mod= 5;
            break;
            case (22<=value<=23):
                mod= 6;
            break;
            case (24<=value<=25):
                mod= 7;
            break;
            case (26<=value<=27):
                mod= 8;
            break;
            case (28<=value<=29):
                mod= 9;
            break;
            case 30:
                mod= 10;
            break;
        }
        return mod;
    }

})