let a = 10,
    b = 20;

let add = function() {
    return a + b
}

let sub = function(x, y) {
    return x - y
}

// 方式一/三
export { add, sub }

// 方式二
// export default { add, sub }