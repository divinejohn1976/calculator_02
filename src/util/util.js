export const setComa = (txt) => {
    if (txt.includes(".")) {
        let arr = txt.split(".");
        let num = arr[0].split("");
        for (let i = num.length - 1; i >= 0; i -= 3) {
            if (i !== num.length - 1) {
                num[i] += ",";
            }
        }
        let numJoined = num.join("");
        arr[0] = numJoined;
        let allJoined = arr.join(".");
        return allJoined;
    } else {
        let num = txt.split("");
        for (let i = num.length - 1; i >= 0; i -= 3) {
            if (i !== num.length - 1) {
                num[i] += ",";
            }
        }
        let joined = num.join("");
        return joined;
    }
};
