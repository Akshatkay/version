document.getElementById('simpleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    
    if (value1 && value2) {
        document.getElementById('result').textContent = Value 1: ${value1}, Value 2: ${value2};
    } else {
        alert('Please fill in both values.');
    }
});
