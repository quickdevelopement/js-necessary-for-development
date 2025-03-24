document.getElementById("title").innerHTML = "JavaScript || Quick Development";

document.write(10+20);


document.getElementById("submit").addEventListener("click", function(){
    window.alert("Thanks for Submition!");
})

console.log("Quick Development");


document.getElementById("print").addEventListener("click", function(){
    return window.print();
})