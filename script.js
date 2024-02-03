let displayValue = '';

/**
 * Append the clicked button value to the display
 *
 * @param {type} value - description of parameter
 * @return {type} undefined
 */
function appendToDisplay(value) {
    // Append the clicked button value to the display
    displayValue += value;
    updateDisplay();
}

/**
 * Clear the display.
 *
 */
function clearDisplay() {
    // Clear the display
    displayValue = '';
    updateDisplay();
}

/**
 * Evaluate and display the result or handle errors.
 */
function calculateResult() {
    try {
        // Evaluate and display the result
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        // Handle errors (e.g., division by zero)
        displayValue = 'Error';
        updateDisplay();
    }
}

/**
 * Update the display with the current value
 *
 * @param {} 
 * @return {} 
 */
function updateDisplay() {
    // Update the display with the current value
    document.getElementById('display').value = displayValue;
}
