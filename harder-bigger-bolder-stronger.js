export function generateLetters() {
    const L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 1; i <= 120; i++) {
        const add = document.createElement("div");
        add.append(L[Math.floor(Math.random() * 26)])
        add.style.fontSize = (10 + i) + "px"
        if (i <= 40) {
            add.style.fontWeight = 300
        }
        if (i > 40 && i <= 80) {
            add.style.fontWeight = 400
        }
        if (i > 80 && i <= 120) {
            add.style.fontWeight = 600
        }

        document.body.append(add)
    }
}
