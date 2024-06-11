function add(a, b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    console.log(a);
    console.log(b);

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("les 2 variables ne sont pas au format nombre");
    }
    console.log(num1+num2);
    return num1 + num2;
}

// add(5,'2');

 export default add;
