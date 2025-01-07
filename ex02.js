const listCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateId(length, prefix) {
	// Xử lý và return về kết quả
    if (prefix === undefined) {
        prefix = "";
    }
    if (length>100 || length<0 || prefix.length >=10 || typeof length !== "number" || isNaN(length)) {
        console.log("Error");
    }
    for (let i=0; i<length; i++) {
        prefix += listCharacters[Math.round(Math.random()*61)];
    }
    return console.log(prefix);
}
generateId(8, "user"); // Output: "user5a3Fb2DF"
generateId(4, "product - "); // Output: "product - 3a2f"
generateId(6, "category - "); // Output: "category - 2Fb3aD"
generateId(10); // Output: "5a3Fb2DFc1"