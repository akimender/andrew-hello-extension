const elementTypes = ["h1", "a", "p"]

const elem = document.querySelector(elementTypes[Math.floor(Math.random()*3)]);

if (elem) {
    var rolledNum = Math.random();
    if (rolledNum > 0.3) {
        const text = elem.textContent;
        elem.textContent = text + "   Also, akimender says HELLO! :D";
    }
}