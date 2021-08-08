const addLeadingZeros = n => {

    let desiredLength = 3;

    if (n.length === 1) {
        while (n.length < desiredLength) {
            n = `0` + n;
        }
    }

    console.log(n.toString());
}

const addCommas = n => {

    let toNum = num => Number(num);

    if (n > 3) {

        arr = Array.from(String(n), toNum);

        let commaArr = arr.splice(0, 1, ",");

        console.log(n);
        console.log(arr);
        console.log(commaArr);
    }

}