

function getPrice(){

    let price = document.getElementById("price-box").value;

    calculateAll();

}

function getDownPayment(){

    let downpayment = document.getElementById("down-payment-box").value;
    calculateAll();

}

// READ SLIDER
let slider = document.getElementById("paymentSlider");
let output = document.getElementById("paymentValue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    calculateAll();
    fullyPaidOff();
}

function fullyPaidOff(){
    let paidOffBox = document.getElementById("fully-paid-off");
    let unformattedTime = slider.value;
    let months = unformattedTime % 12;
    let years = Math.floor(unformattedTime/12);

    paidOffBox.value = (years + " Years " +"& "+ months + " Months")

}

// Slider Stuff Ends

// Math For Bottom Begins

function calculateAll(){
    let price = document.getElementById("price-box").value;
    let downpaymentPercentage = (document.getElementById("down-payment-box").value) / 100;
    let downpayBox = document.getElementById("their-downpayment");
    let payperMonth = document.getElementById("their-payment-per-month");

    // DOWNPAYMENT CALCULATION

    let initialDownPayment = price * downpaymentPercentage;
    let downPayment = initialDownPayment.toFixed(2);

    // PAYMENT PER MONTH
    
    let paymentPerMonth = (price - downPayment) / slider.value;
    paymentPerMonth = paymentPerMonth.toFixed(2);
    
    downpayBox.value = downPayment;
    payperMonth.value = paymentPerMonth;
}

// Math for Bottom Ends





