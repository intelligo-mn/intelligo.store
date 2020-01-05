function reverseString(s) {
    try {
        const split = s.split("");
        const rev = split.reverse();
        const j = rev.join("");
        console.log(j);
    } catch (e) {
        console.log("s.split is not a function");
        console.log(s);
    } finally {

    }
}
