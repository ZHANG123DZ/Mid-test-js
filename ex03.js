function highlightKeyword(content, keyword) {
    if (typeof keyword !== "string") return console.log("Invalid");
    let regex = new RegExp(keyword, "gi");
    content = content.replace(regex, (match) => `<strong>${match}</strong>`)
    return console.log(content);
}
highlightKeyword("Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?", "thú vỊ");


