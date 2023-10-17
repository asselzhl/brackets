module.exports = function check(str, bracketsConfig) {
    let values = [];
    let keys = [];
    let j = 0;
    bracketsConfig.forEach(element => {
       keys[j] = element[0]; 
       values[j] = element[1];
       j++;
    });
    
    let stack = [];
    let top;
    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        top = stack[stack.length - 1];
        let ind = values.indexOf(currentSymbol);
        if (ind > -1 && keys[ind] == top) {
            stack.pop();
            continue;
        }

        if (keys.indexOf(currentSymbol) > -1) {
            stack.push(currentSymbol);
        } else {
            stack.push(currentSymbol);
            break;
        }
    }
    return stack.length == 0;
}
