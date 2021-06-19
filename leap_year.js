

function theBest() {
    let year = document.getElementById("leap_Year").value;
    
    if (year % 4 == 0){
        if(year % 100 == 0){
            if (year % 400 == 0){
                document.getElementById("inner").innerHTML ="Hooray, it's a leap Year";
            }else{
                document.getElementById("inner").innerHTML = "Sorry, this is not a leap Year";
            }
        }else {
            document.getElementById("inner").innerHTML ="Hooray, it's a leap Year";
        }
    }else{
                document.getElementById("inner").innerHTML = "Sorry, this is not a leap Year";
            }
}