let textArea = document.querySelector("textarea");
textArea.addEventListener("input", function(){
    let InputValue = this.value;
    let letterCounter = document.querySelector(".letter");
    letterCounter.innerHTML = InputValue.length;
    InputValue = InputValue.trim();
    let arrayCreate = InputValue.split(" ");
    let filTer = arrayCreate.filter(function(value){
        return value !== "";
    });
    let WordCounter = document.querySelector(".word");
    WordCounter.innerHTML = filTer.length;
    console.log(arrayCreate);
});