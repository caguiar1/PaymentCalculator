

function getPrice(){

    let price = document.getElementById("price-box").value;

    console.log("Price is: " + price);

    calculateAll();

}

function getDownPayment(){

    let downpayment = document.getElementById("down-payment-box").value;

    console.log("Downpayment is: " + downpayment);

    calculateAll();

}

function getInterestRate(){

    let interestRate = document.getElementById("interest-rate-box").value;

    console.log("Interest Rate is: " + interestRate);

    calculateAll();

}



// READ SLIDER
let slider = document.getElementById("paymentSlider");
let output = document.getElementById("paymentValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  calculateAll();
}



// Math For Bottom Begins



function calculateAll(){
    let price = document.getElementById("price-box").value;
    let downpaymentPercentage = (document.getElementById("down-payment-box").value) / 100;
    let downpayBox = document.getElementById("their-downpayment");


    // DOWNPAYMENT CALCULATION


    let initialDownPayment = price * downpaymentPercentage;

    let downPayFixed = initialDownPayment.toFixed(2);

    downpayBox.value = downPayFixed;



    // PAYMENT PER MONTH
//  price - downpayment / payments

    let paymentPerMonth = (price - downPayFixed) / slider.value;

    let paymentPerMonthFixed = paymentPerMonth.toFixed(2);

    

    console.log(paymentPerMonthFixed)


}






