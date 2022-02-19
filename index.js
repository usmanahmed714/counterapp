// javascript
 let count = 0;
 const counterEl  = document.getElementById("counter");
 const startEl  = document.getElementById("startcounting");
 const adjustEl  = document.getElementById("adjustcounting");
 const resetEl  = document.getElementById("resetcounting");
 const savedEl  = document.getElementById("savedvalue");
 const totalEl  = document.getElementById("totalvalue");
 const playerEl  = document.getElementById("playername");
 const myArray = [];
 
 const playerName = prompt("Please enter your name");
 playerEl.textContent = playerName;
 
 

startEl.onclick = function() {
    count += 1;
    counterEl.textContent = count;
    
}

adjustEl.onclick = function() {
    if (count > 0) {
    count -= 1;
    counterEl.textContent = count;
    } else {
        alert("Sorry, Negative scores are not possible!");
    }
}

resetEl.onclick = function() {
    if (count > 0) {
        const newcount = myArray.push(count);
        savedEl.textContent += myArray.slice(-1) + ", " ;
        console.log(myArray);
    // savedEl.textContent += count + ", " ;
    count = 0;
    counterEl.textContent = count;
    } else {
        alert("Please run the counter first");
    }

    const sum = myArray.reduce((partialSum, a) => partialSum + a, 0);
    
    totalEl.textContent = "Total: " + sum;
    

}

