function changeColor() {

    let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "orange"];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}