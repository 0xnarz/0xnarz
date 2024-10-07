// Get elements from the DOM
const startCodeInput = document.getElementById('startCode');
const middleCodeInput = document.getElementById('middleCode');
const endCodeInput = document.getElementById('endCode');
const submitBtn = document.getElementById('submitBtn');
const resultCode = document.getElementById('resultCode');
const copyBtn = document.getElementById('copyBtn');

// Function to generate code
submitBtn.addEventListener('click', function() {
    const startCode = startCodeInput.value.trim();
    const middleCode = middleCodeInput.value.trim();
    const endCode = endCodeInput.value.trim();

    // Combine the code fragments
    const generatedCode = `${startCode}\n${middleCode}\n${endCode}`;

    // Display the generated code in the result textarea
    resultCode.value = generatedCode;
});

// Function to copy the code to clipboard
copyBtn.addEventListener('click', function() {
    resultCode.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
});
