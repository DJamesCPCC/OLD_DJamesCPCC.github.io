document.getElementById("fizzbuzz3-form").addEventListener('submit', function (event) {
    const main = document.getElementById('maintext');
    const newBox = document.createElement("div");
    const list = document.createElement("ol");
    
    newBox.classList.add("box");
    newBox.id = "fizzbuzz3_list";
    list.id = "data3";
    
    main.appendChild(newBox);
    newBox.appendChild(list);
    
}, { once: true });

function checkDivsible(dividend, divisor) {
    
    let divisable = (dividend % divisor === 0) ? true : false;

    return divisable;
}

document.getElementById("fizzbuzz3-form").addEventListener('submit', function (event) {
    
    /* Stops the form from taking it's default action (submitting and refreshing the page) */
    event.preventDefault();
    
    const first_name = document.getElementById('first_name3').value.trim();
    const middle_initial = document.getElementById("middle_initial3").value.trim();
    const last_name = document.getElementById("last_name3").value.trim();
    
    let full_name = first_name;
    if (middle_initial) {
        full_name += ` ${middle_initial}.`;
    }
    full_name += ` ${last_name}`;
    
    document.getElementById("fizzbuzz3box").innerHTML = `🐺WELCOME TO JACKAL GAMING, ${full_name}`;

    var text = document.getElementById("data3");
    
    var count = 140;
    var first_divisor = 3;
    var second_divisor = 5;
    var third_divisor = 7;
    
    for (let i = 1; i <= count; i++) {
        var entries = document.createElement("li");
        if (checkDivsible(i, first_divisor)) {
            entries.innerHTML = "RUFF!";
            console.log(`${i} is divisable by ${first_divisor}`);
            text.appendChild(entries);
            
        }
        if (checkDivsible(i,second_divisor)) {
            entries.innerHTML = entries.innerHTML + " BARK!";
            console.log(`${i} is divisable by ${second_divisor}`);
            text.appendChild(entries);
        }
        if (checkDivsible(i,third_divisor)) {
            entries.innerHTML = entries.innerHTML + " BANG!";
            console.log(`${i} is divisable by ${third_divisor}`);
            text.appendChild(entries);
        }
        if (!checkDivsible(i,first_divisor) && !checkDivsible(i,second_divisor) && !checkDivsible(i,third_divisor)) {
            entries.innerHTML = "woof!";
            console.log(`${i} is not divisable by ${first_divisor}, ${second_divisor}, or ${third_divisor}`);
            text.appendChild(entries);
        }
    }

    

});