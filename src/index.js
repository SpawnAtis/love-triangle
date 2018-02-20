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

    let x;
    let y;
    let counter = 0;

    for (let i =1; i <= obj.length; i++) {
        x = obj[i];
        y = obj[x];

        if(x == i || y == x) continue;

        if (obj[y] == i) counter++;

    }

    return counter/3;
};
