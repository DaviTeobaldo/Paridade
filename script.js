document.addEventListener("DOMContentLoaded", function(){

    const userInput = document.getElementById("userInput")
    const mostrarButton = document.getElementById("showButton")
    const resultado = document.getElementById("result")
    const evenNumbersList = document.getElementById("evenNumbersList");
    const totalSoma = document.getElementById("totalSum");


    mostrarButton.addEventListener("click", ()=>{
        const inputValue = parseInt(userInput.value)
        if(isNaN(inputValue) || inputValue < 1){
            alert("Por favor, informe um valor válido. ")
            return;
        }

        resultado.style.display = "block";
        evenNumbersList.innerHTML = ""
        let sum = 0;

        for(let i = 2; i <= inputValue; i+= 2){
            const listItem = document.createElement("li");
            listItem.textContent = i;
            evenNumbersList.appendChild(listItem);
            sum += i;
        }

        totalSum.textContent = sum;
    })

})