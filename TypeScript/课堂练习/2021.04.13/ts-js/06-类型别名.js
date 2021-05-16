"use strict";
function Fn(n) {
    if (typeof n === 'string') {
        console.log("\u6211\u53EB" + n);
    }
    else {
        console.log("\u6211\u4ECA\u5E74" + n + "\u5C81\u4E86");
    }
}
Fn('范志伟');
Fn(24);
