

function getPrice(){

    let price = document.getElementById("price-box").value;

    console.log("Price is: " + price);


}

function getDownPayment(){

    let downpayment = document.getElementById("down-payment-box").value;

    console.log("Downpayment is: " + downpayment);

}

// READ SLIDER
let slider = document.getElementById("paymentSlider");
let output = document.getElementById("paymentValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}





