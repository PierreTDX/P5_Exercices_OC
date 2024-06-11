function checkAge(age) {
    console.log(age);
    if (age < 18) {
        console.log("Vous êtes mineur");
        return "Vous êtes mineur.";
    } else if (age >= 18 && age < 65) {
        console.log("Vous êtes majeur");
        return "Vous êtes majeur.";
    } else {
        console.log("Vous êtes senior");
        return "Vous êtes senior.";
    }
}

// checkAge(74);

export default checkAge;
