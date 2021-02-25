let displayField = '';
let mathExpression = '';

const signs = {
    '*': true,
    '/': true,
    '+': true,
    '-': true,
    '.': true
};


const shortenString = () => {
    if (mathExpression.length > 13) {
        displayField = displayField.slice(1);
    }
};

const checkExpression = () => {
    if (mathExpression.length === 1 && signs[mathExpression]) {
        mathExpression = '';
        displayField = mathExpression;
    }
};

const writeNumber = (num) => {
    displayField = displayField + num;
    mathExpression = mathExpression + num;
    shortenString();
    document.getElementById('answer').innerHTML = displayField;
};

const writeOp = (op) => {
    for (let key in signs) {
        if (displayField[displayField.length - 1] === key) {
            displayField = displayField.slice(0, displayField.length - 1);
            mathExpression = mathExpression.slice(0, mathExpression.length - 1);
        }
    }
    displayField = displayField + op;
    mathExpression = mathExpression + op;
    checkExpression();
    document.getElementById('answer').innerHTML = displayField;
    shortenString();
};


const same = () => {
    if (mathExpression !== '') {
        mathExpression = eval(mathExpression);
        displayField = mathExpression;
        document.getElementById('answer').innerHTML = mathExpression;
        displayField += '';
        mathExpression += '';
    }
};

const remove = () => {
    displayField = '';
    mathExpression = '';
    document.getElementById('answer').innerHTML = displayField;
};
