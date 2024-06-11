function add(a, b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("les 2 variables ne sont pas au format nombre");
    }

    return num1 + num2;
}

 export default add;
