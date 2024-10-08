const hexInput = document.getElementById('hex-input');
const convertButton = document.getElementById('convert-button');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const   
 hexCode = hexInput.value.replace('#', '');

    if (hexCode.length !== 6) {
        resultDiv.textContent = 'Invalid hex code. Please enter a 6-digit hex code.';
        return;
    }

    const red = parseInt(hexCode.substring(0, 2), 16);
    const green = parseInt(hexCode.substring(2, 4), 16);
    const blue = parseInt(hexCode.substring(4, 6),16);  
 

    resultDiv.textContent = `RGB: (${red}, ${green}, ${blue})`;
});