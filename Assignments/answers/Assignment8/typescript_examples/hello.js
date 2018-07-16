function area(shape, width, height) {
    var area = width * height;
    return "I'm a" + shape + " with an area of " + area + "cm squared";
}
document.getElementById('hello').innerHTML = area("rectangle", 30, 15);
document.getElementById('hello').style.backgroundColor = 'skyblue';
//# sourceMappingURL=hello.js.map