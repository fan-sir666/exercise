"use strict";
function swim(animal) {
    animal.swim();
}
var tom = {
    name: 'Tom',
    run: function () { console.log('run'); }
};
swim(tom);
