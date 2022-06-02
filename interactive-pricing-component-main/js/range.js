let range = document.getElementById("pricing");
let pageViews = document.getElementById("pageviews");
let price = document.getElementById("price");
let floater = document.getElementById("floater");
let switchArea = document.getElementById("switch");

range.addEventListener("input", () => {
    
    if(floater.classList.contains('active')) {
        if(range.value == 0) {
            pageViews.innerText = 10.00 + "k"
            price.innerText = "$" + (8.00 * 0.75) + ".00"
        }
        else if(range.value == 1) {
            pageViews.innerText = 50 + "k"
            price.innerText = "$" + (12.00 * 0.75) + ".00"
        }
        else if(range.value == 2) {
            pageViews.innerText = 100 + "k"
            price.innerText = "$" + (16.00 * 0.75) + ".00"
        }
        else if(range.value == 3) {
            pageViews.innerText = 500 + "k"
            price.innerText = "$" + (24.00 * 0.75) + ".00"
        }
        else if(range.value == 4) {
            pageViews.innerText = 1 + "m"
            price.innerText = "$" + (36.00 * 0.75) + ".00"
        }
    }
    
    else {
        if(range.value == 0) {
            pageViews.innerText = 10.00 + "k"
            price.innerText = "$8.00"
        }
        else if(range.value == 1) {
            pageViews.innerText = 50 + "k"
            price.innerText = "$12.00"
        }
        else if(range.value == 2) {
            pageViews.innerText = 100 + "k"
            price.innerText = "$16.00"
        }
        else if(range.value == 3) {
            pageViews.innerText = 500 + "k"
            price.innerText = "$24.00"
        }
        else if(range.value == 4) {
            pageViews.innerText = 1 + "m"
            price.innerText = "$36.00"
        }


    }
    
})

switchArea.addEventListener("click", () => {


    if(floater.classList.contains('active')) {
        if(range.value == 0) {
            pageViews.innerText = 10.00 + "k"
            price.innerText = "$8.00"
        }
        else if(range.value == 1) {
            pageViews.innerText = 50 + "k"
            price.innerText = "$12.00"
        }
        else if(range.value == 2) {
            pageViews.innerText = 100 + "k"
            price.innerText = "$16.00"
        }
        else if(range.value == 3) {
            pageViews.innerText = 500 + "k"
            price.innerText = "$24.00"
        }
        else if(range.value == 4) {
            pageViews.innerText = 1 + "m"
            price.innerText = "$36.00"
        }
    }

    else {


        if(range.value == 0) {
            pageViews.innerText = 10.00 + "k"
            price.innerText = "$" + (8.00 * 0.75) + ".00"
        }
        else if(range.value == 1) {
            pageViews.innerText = 50 + "k"
            price.innerText = "$" + (12.00 * 0.75) + ".00"
        }
        else if(range.value == 2) {
            pageViews.innerText = 100 + "k"
            price.innerText = "$" + (16.00 * 0.75) + ".00"
        }
        else if(range.value == 3) {
            pageViews.innerText = 500 + "k"
            price.innerText = "$" + (24.00 * 0.75) + ".00"
        }
        else if(range.value == 4) {
            pageViews.innerText = 1 + "m"
            price.innerText = "$" + (36.00 * 0.75) + ".00"
        }
    }
})


// console.log(range.value)