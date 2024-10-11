(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Event listener for each number and operator button
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;

            //  only valid buttons add input to the screen
            if (value) {
                screen.value += value;
            }
        });
    });

    // Calculate the expression when the equal button is clicked
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "0"; // If empty, set the screen to 0
        } else {
            try {
                let answer = eval(screen.value); // Use eval to calculate
                screen.value = answer;
            } catch (error) {
                screen.value = "Error"; // Catch any invalid input
            }
        }
    });

    // Clear the screen when the clear button is clicked
    clear.addEventListener('click', function(e){
        screen.value = ""; // Reset the display
    });
})();
