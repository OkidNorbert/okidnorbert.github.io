function greeting() {
    alert("YOU ARE WELCOME");
}

function toggleText() {
    const textElement = document.getElementById("text");
    if (textElement.textContent === "Hello World") {
        textElement.textContent = "Hello Norbert";
    } else {
        textElement.textContent = "Hello World";
    }
}



function changeBackground() {
    try {
        const colorPicker = document.getElementById('bgColorPicker');
        const selectedColor = colorPicker.value;
        
        if (!selectedColor) {
            // Default to a light gray if no color is selected
            document.body.style.backgroundColor = '#e0e0e0';
            throw new Error('No color selected. Using default color.');
        }
        
        // Validate if the color is in correct hex format
        if (!/^#[0-9A-F]{6}$/i.test(selectedColor)) {
            throw new Error('Invalid color format');
        }
        
        document.body.style.backgroundColor = selectedColor;
    } catch (error) {
        alert('Background Color Error: ' + error.message);
    }
}


function changeTextColor() {
    try {
        const colorPicker = document.getElementById('textColorPicker');
        const selectedColor = colorPicker.value;
        
        if (!selectedColor) {
            // Default to black if no color is selected
            document.getElementById('text').style.color = '#000000';
            throw new Error('No color selected. Using default color.');
        }
        
        // Validate if the color is in correct hex format
        if (!/^#[0-9A-F]{6}$/i.test(selectedColor)) {
            throw new Error('Invalid color format');
        }
        
        document.getElementById('text').style.color = selectedColor;
    } catch (error) {
        alert('Text Color Error: ' + error.message);
    }
}

