// Addition function
document.getElementById('addBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("⚠️ Please enter valid numbers!");
        return;
    }

    document.getElementById('result').value = num1 + num2;
});

// Clear function
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
});

// Exit function
document.getElementById('exitBtn').addEventListener('click', function() {
    alert("🚪 Exit button clicked! In a real application, this would close the window.");
});