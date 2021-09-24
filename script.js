var a = 1;
var b;
var minPage = 1;

// change this to the last relevant page if you like 
var maxPage = 355; // got this from the Acknowledgements page 

function PlusPage() {
    
    // validation
    if (a  >= maxPage) { return; }
    
    a = a + 1
    b = "example.com/" + a + ".png"
    document.getElementById("page").src = b
}

function RemPage() {
    
    // validation
    if (a  <= minPage) { return; }
    
    a = a - 1
    b = "example.com/" + a + ".png"
    document.getElementById("page").src = b
}

function doStuff() {
    var nameElement = document.getElementById("someInput");
    
    // validation
    if (nameElement.value > maxPage) { return; }
    if (nameElement.value < minPage) { return; }
    
    a = nameElement.value;
    b = "example.com/" + a + ".png";
    document.getElementById("page").src = b;
}