// Initialize the display value as an empty string
let displayValue = '';

/**
 * Function to append the clicked button value to the display
 *
 * @param {type} value - description of parameter
 * @return {type} undefined
 */
function appendToDisplay(value) {
    // Append the clicked button value to the display
    displayValue += value;
    // Update the display with the current value
    updateDisplay();
}

/**
 * Function to clear the display
 *
 */
function clearDisplay() {
    // Clear the display
    displayValue = '';
    // Update the display (which will now be empty)
    updateDisplay();
}

/**
 * Function to calculate and display the result or handle errors.
 */
function calculateResult() {
    try {
        // Evaluate the mathematical expression and convert to string
        displayValue = eval(displayValue).toString();
        // Update the display with the result
        updateDisplay();
    } catch (error) {
        // Handle errors, for example, division by zero
        displayValue = 'Error';
        // Update the display with the error message
        updateDisplay();
    }
}

/**
 * Function to update the display with the current value
 *
 * @param {} 
 * @return {} 
 */
function updateDisplay() {
    // Update the display with the current value
    document.getElementById('display').value = displayValue;
}
