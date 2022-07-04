var number = [0,0];

function slide(direction, index){
    //Ako sam prosledio -1 znaci da hocu da idem gore, u suprotnom zelim dole

    if(direction > 0){
        if(number[index] < 0){
            number[index]+=33;
        }
    }else{
        if(number[index] > -(4 * 33)){
            number[index]-=33;
        }
    }


        document.getElementsByClassName("ann-content")[index].style.top = number[index] + "%";

    


}