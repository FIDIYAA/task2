let target_number=Math.round(Math.random() * 100);

function checkguess(){

    let guess_number=parseInt(document.getElementById('numberguess').value);

    if (isNaN(guess_number)) {
        alert("Please enter a valid number.");
        return;
    }


    if (guess_number==target_number){
        alert("CONGRATULATIONS,You won!");
        document.getElementById('result').textContent=`${guess_number} is correct`;}
    else if (guess_number < target_number) {
        document.getElementById('result').textContent=`${guess_number} is less than target number`;

    }
    else {
        document.getElementById('result').textContent=`${guess_number} is greater than target number`;}
     
    }


