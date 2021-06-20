function grt(existingNames) {

    var namesGreeted = existingNames || {}
  //  var grtCounter = 0;



    function action(checked,grtName_) {
      let  grtName = grtName_.charAt(0).toUpperCase() + grtName_.slice(1).toLowerCase();

        if (checked === "japanese") {
            return "Konnichiwa, " + grtName;
        }
        else if (checked === "venda") {
            return "Ndaa, " + grtName
        }
        else if (checked === "latin") {
            return "Salve, " + grtName
        }
        
    }

    function setNames(name) {
       let   name_ = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

        if (namesGreeted[name_] === undefined) {
            namesGreeted[name_] = 0;

        }
    }

    function antiEmpty(par) {
        if (par === "") {
            return "Please enter your name in text field eg.'Sam', then click the greet button to be greeted."
        }
        

    }

    function antiDigit(par) {
        var para = /[0-9]/;
        if (par.match(para)) {            
            return par;
        }


    }
    function testChecked(par){
      return  (par === null) ? "Please select a language by checking one of the radio buttons below eg 'latin'.":undefined; 

    }

    function getGreetCtr() {
       
        return Object.keys(namesGreeted).length
    }



    function greeted() {
        
        return namesGreeted
    }

   
    function getGreetKeys(){
        return Object.keys(namesGreeted)
    }
    function showAllGreets(){
      return  (getGreetCtr() > 0) ? "You have greeted -->: "+Object.keys(namesGreeted):"Type A name in the text field and click the show all button to display all the names you have greeted.";
    }

    function clearError(par){
        return ""
    }
 




    return {
        setNames,
        action,
        getGreetCtr,
        greeted,
        antiEmpty,
        antiDigit,
        showAllGreets,
        getGreetKeys,
        testChecked,
        clearError

    }
}