document.addEventListener("scroll", function(){
   
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        console.log("OK")
        document.getElementsByClassName("menu")[0].style.position = "fixed";
    }else{
        document.getElementsByClassName("menu")[0].style.position = "relative";
    }
})