var productcontainer = document.getElementById("product")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toupperCase()

    for (count = 0; count < productlist.length; count = count + 1) {

        var productname = productlist(count).querySelector('p').textContent
        if (productname.toupperCase().index(enteredvalue) < 0) {
            productlist(count).style.display = "none"
        }
        else {
            productlist(count).style.display = "block"
        }
    }
})