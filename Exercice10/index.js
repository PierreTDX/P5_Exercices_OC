function printNumbers(n) {
    const numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    return numbers.join(' ');
}

export default printNumbers;