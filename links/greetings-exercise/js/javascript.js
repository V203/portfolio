var nameFld = document.querySelector(".enter-name-field");
var counter_div = document.querySelector(".counter_div");
var greetbtn = document.querySelector(".greetBtn");
var output_div = document.querySelector(".output_div");
var clearBtn = document.querySelector(".resetBtn")
var lstBtn = document.querySelector(".listBtn")
var error_div = document.querySelector(".error_div")


var namesGreeted;



if (localStorage["names"]) {
    namesGreeted = JSON.parse(localStorage["names"])

}
var _grt = grt(namesGreeted);


counter_div.innerHTML = _grt.getGreetCtr()
lstBtn.addEventListener("click", function () {
     
    if(_grt.getGreetCtr() > 0){
       output_div.innerHTML = _grt.showAllGreets();

    }
    else if(_grt.getGreetCtr() <= 0){
       error_div.innerHTML= _grt.showAllGreets();
    }
    setTimeout(() => {
        error_div.innerHTML = _grt.clearError(error_div.innerHTML)        
    }, 5000); 

})

greetbtn.addEventListener("click", function () {

    setTimeout(() => {
        error_div.innerHTML = _grt.clearError(error_div.innerHTML)        
    }, 5000); 

     (error_div) =>{error_div.classList.toggle("visibility")};
    var rdioVal = document.querySelector(".rdio:checked");
    
    
    if (!_grt.antiDigit(nameFld.value)) {


        if (nameFld.value === "") {
            error_div.innerHTML =  "Please enter your name in the text box field."
        }
        else if(rdioVal === null){
            error_div.innerHTML = _grt.testChecked(rdioVal);
        }
         else {
            _grt.setNames(nameFld.value)
            output_div.innerHTML = _grt.action(rdioVal.value, nameFld.value)

        }
        

        
    } else {
        error_div.innerHTML = "Please enter your name in the text field."
    }

    localStorage.setItem("names", JSON.stringify(_grt.greeted()));

    counter_div.innerHTML = _grt.getGreetCtr()
})

clearBtn.addEventListener("click", function () {


    localStorage.clear()


    location.reload()
})

//var





