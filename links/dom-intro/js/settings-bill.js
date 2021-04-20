
{




    var callCostSetting = document.querySelector(".callCostSetting");
    var smsCostSetting = document.querySelector(".smsCostSetting");

    var callTotalSettings = document.querySelector(".callTotalSettings");
    var smsTotalSettings = document.querySelector(".smsTotalSettings");
    var totalSettings = document.querySelector(".totalSettings");
    var button_add = document.querySelector(".button-primary-add");

    var warningLevelSetting = document.querySelector(".warningLevelSetting");
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
    var updateSettingsbtn = document.querySelector(".button-primary-updateSettings");

    var call = 0;
    var sms = 0;
    var total = 0;

    var warnLevel = 0;
    var critLevel = 0;

    var _call_ = 0;
    var _sms_ = 0;


    button_add.addEventListener("click", function () {
        deactivate();
       
        testNum();

        var x = document.querySelector(".billItemTypeWithSettings:checked");

        if (x) {
            let y = x.value
            if (y == "call") {
                _call_ += call
            }
            if (y == "sms") {
                _sms_ += sms
            } smsTotalSettings.innerHTML = _sms_.toFixed(2);
            callTotalSettings.innerHTML = _call_.toFixed(2);

            total = _call_ + _sms_
            if (total <= critLevel ){
             total = total;
                
            }
            totalSettings.innerHTML = total.toFixed(2);
            if (total >= warnLevel) {
                totalSettings.classList.add("warning");

            } if (total >= critLevel) {
                totalSettings.classList.add("danger");
            }

        }


    })

  
    updateSettingsbtn.addEventListener("click", function () {
        activate();
        totalSettings.classList.remove("danger")
        totalSettings.classList.remove("warning")
        

        call = parseFloat(callCostSetting.value);
        sms = parseFloat(smsCostSetting.value);
        warnLevel = parseFloat(warningLevelSetting.value);
        critLevel = parseFloat(criticalLevelSetting.value);


        if (total >= warnLevel) {
            totalSettings.classList.add("warning")
        }
        if (total >= critLevel) {
            totalSettings.classList.remove("danger")
        }
        smsTotalSettings.innerHTML = _sms_.toFixed(2);
        callTotalSettings.innerHTML = _call_.toFixed(2);
        activate();
        testNum();

    })



    



    var testNum = () => {
   
        if (isNaN(call)) {

            callCostSetting.value = "";
            alert("The  call cost textField  need's to be filled in.--> eg 12.00")

        }
        if (isNaN(sms)) {
            smsCostSetting.value = ""
            alert("The  sms cost textField  need's to be filled in. --> eg 16.00")
        }
        if (isNaN(warnLevel)) {
            warningLevelSetting.value = "";
            alert("The  warning level textField  need's to be filled in.--> eg 30.00")
        }
        if (isNaN(critLevel)) {
            criticalLevelSetting.value = "";
            alert("The  critical level textField  need's to be filled in.--> eg 60.00")
        }

   
        if (Math.sign(call) === -1) {
            callCostSetting.value = "";
            alert("You can not input negative A amount  in 'call cost' textField.");


        }
        if (Math.sign(sms) === -1) {
            smsCostSetting.value = ""
            alert("You can not input negative A amount in sms cost textField.");

        }
        if (Math.sign(warnLevel) === -1) {
            warningLevelSetting.value = "";
            alert("You can not input negative A amount in warning level textField.");
        }
        if (Math.sign(critLevel) === -1) {
            criticalLevelSetting.value = "";
            alert("You can not input negative values in critical level textField.");
        }
        if(critLevel < warnLevel){
            warningLevelSetting.value = "";
            criticalLevelSetting.value = "";
            alert("Warning input amount  can not be less than critical amount");

        }
       
 
   }

   ////////////////////////////////////////////////////////////////Funtcions__Below//////////////////////////////////////////////////////////////////////////////////////////////////////////////

   var deactivate = () =>{
       if(critLevel <= total){
           document.querySelector(".button-primary-add").disabled = true;
           alert("You have exceded critical amount threshold");

       }  
       
   }

   var activate = () =>{
       if(critLevel >= total){
        document.querySelector(".button-primary-add").disabled = false;
       }
   }




}