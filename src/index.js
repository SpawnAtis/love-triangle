/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let obj = {};
    let length = 0;
    preferences.forEach((item, index) => {
        obj[index+1] = item;
        length++;
    });
    obj.length = length;

    let counter = 0;

    for (let i =1; i <= obj.length; i++) {
        if(obj[i] === i || obj[obj[i]] === obj[i]) continue;
        if (obj[obj[obj[i]]] === i) counter++;
    }

    return counter/3;
};
