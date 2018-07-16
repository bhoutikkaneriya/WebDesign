function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // function invokes itself
    }
}
document.getElementById('factorial').innerHTML = factorial(6); // outputs 720 
document.getElementById('factorial').style.backgroundColor = 'yellow';
//# sourceMappingURL=factorial.js.map