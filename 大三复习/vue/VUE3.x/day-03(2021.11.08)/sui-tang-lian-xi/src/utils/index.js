const debounce = (callback, delay) => {
    let timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback("封装完成")
        }, delay);
    }
}

export default debounce;