// console.log("hellllooooooo");

let billAmountEl = document.getElementById("billAmount");
let tipAmountEl = document.getElementById("tipAmount");
let errorMsgEl = document.getElementById("errorMsg");
let showTipEl= document.getElementById("showTip");
let showTaEl = document.getElementById("showTa");


    function onCheckTotalAmount(){

        if(billAmountEl.value ==="" || tipAmountEl.value === ""){
            
            errorMsgEl.textContent = "Plz fill all the fields";
        }
        else{
        let billAmt = parseInt(billAmountEl.value);
        let tipPer = parseInt(tipAmountEl.value);

        let tip = tipPer*billAmt/100

        let totalAmt = tip + billAmt;

        showTipEl.value = tip;

        showTaEl.value = totalAmt;

        errorMsgEl.textContent = "";

        
        }



 

}