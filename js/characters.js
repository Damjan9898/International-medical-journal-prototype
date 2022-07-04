document.querySelectorAll('.ann-text').forEach(element => {
    if(element.innerHTML.length >= 200){


        const string = element.innerHTML;

        
        element.innerHTML = string.slice(0, 200);
        element.innerHTML += "... <a href='#' class='readmore'>Read More</a>";

    }
});