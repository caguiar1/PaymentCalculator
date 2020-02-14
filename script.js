

function getPrice(){

    let price = document.getElementById("price-box").value;

    console.log("Price is: " + price);


}

function getDownPayment(){

    let downpayment = document.getElementById("down-payment-box").value;

    console.log("Downpayment is: " + downpayment);

}

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



