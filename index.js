var product1 = document.getElementById('product1');
var qty1 = document.getElementById('qty1');
var price1 = document.getElementById('price1');

var product2 = document.getElementById('product2');
var qty2 = document.getElementById('qty2');
var price2 = document.getElementById('price2');

var product3 = document.getElementById('product3');
var qty3 = document.getElementById('qty3');
var price3 = document.getElementById('price3');

var product4 = document.getElementById('product4');
var qty4 = document.getElementById('qty4');
var price4 = document.getElementById('price4');

var product5 = document.getElementById('product5');
var qty5 = document.getElementById('qty5');
var price5 = document.getElementById('price5');

var product6 = document.getElementById('product6');
var qty6 = document.getElementById('qty6');
var price6 = document.getElementById('price6');

var carts = document.getElementById('carts');
var total = document.getElementById('total');
var cash = document.getElementById('cash');
var change = document.getElementById('change');


function addOrder() {
    carts.textContent = "";
    var totalCost = 0;

    if (parseFloat(qty1.value) > 0) {
        var order = qty1.value.toString() + " pc/s x Php " + price1.textContent + " ------ " + product1.textContent + " ------ Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2) + "\n";
        carts.textContent += order;
        totalCost += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }
    if (parseFloat(qty2.value) > 0) {
        var order = qty2.value.toString() + " pc/s x Php " + price2.textContent + " ------ " + product2.textContent + " ------ Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2) + "\n";
        carts.textContent += order;
        totalCost += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }
    if (parseFloat(qty3.value) > 0) {
        var order = qty3.value.toString() + " pc/s x Php " + price3.textContent + " ------ " + product3.textContent + " ------ Php " + (parseFloat(qty3.value) * parseFloat(price3.textContent)).toFixed(2) + "\n";
        carts.textContent += order;
        totalCost += parseFloat(qty3.value) * parseFloat(price3.textContent);
    }
    if (parseFloat(qty4.value) > 0) {
        var order = qty4.value.toString() + " pc/s x Php " + price4.textContent + " ------ " + product4.textContent + " ------ Php " + (parseFloat(qty4.value) * parseFloat(price4.textContent)).toFixed(2) + "\n";
        carts.textContent += order;
        totalCost += parseFloat(qty4.value) * parseFloat(price4.textContent);
    }
    if (parseFloat(qty5.value) > 0) {
        var order = qty5.value.toString() + " pc/s x Php " + price5.textContent + " ------ " + product5.textContent + " ------ Php " + (parseFloat(qty5.value) * parseFloat(price5.textContent)).toFixed(2) + "\n";
        carts.textContent += order;
        totalCost += parseFloat(qty5.value) * parseFloat(price5.textContent);
    }
    if (parseFloat(qty6.value) > 0) {
        var order = qty6.value.toString() + " pc/s x Php " + price6.textContent + " ------ " + product6.textContent + " ------ Php " + (parseFloat(qty6.value) * parseFloat(price6.textContent)).toFixed(2) + "\n";
        carts.textContent += order;
        totalCost += parseFloat(qty6.value) * parseFloat(price6.textContent);
    }

    total.value = totalCost.toFixed(2);
    if (parseFloat(cash.value) > 0) {
        change.value = (parseFloat(cash.value) - totalCost).toFixed(2);
    }
}

qty1.addEventListener('keyup', addOrder);
qty2.addEventListener('keyup', addOrder);
qty3.addEventListener('keyup', addOrder);
qty4.addEventListener('keyup', addOrder);
qty5.addEventListener('keyup', addOrder);
qty6.addEventListener('keyup', addOrder);
cash.addEventListener('keyup', addOrder);


/*const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}

btnLike1.addEventListener("click", countLike1)

const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2.value) + 1
  count2.textContent = likeCounts.toString()
}

btnLike2.addEventListener("click", countLike2)

const btnLike3 = document.getElementById("btnLike3")
const count3 = document.getElementById("count3")

function countLike3() {
  let likeCounts = parseInt(count3.value) + 1
  count3.textContent = likeCounts.toString()
}

btnLike3.addEventListener("click", countLike3)

const btnLike4 = document.getElementById("btnLike4")
const count4 = document.getElementById("count4")

function countLike4() {
  let likeCounts = parseInt(count4.value) + 1
  count4.textContent = likeCounts.toString()
}

btnLike4.addEventListener("click", countLike4)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")

function submitComment(){
  commentbox.textComment += comment.value.toString() + "\n"
  comment.value="";
}
submit.addEventLostener("click",submitComment)
*/
