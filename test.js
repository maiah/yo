// Utility

function log(text) {
    document.querySelector('#content')
        .appendChild(
    document.createTextNode(text));

    document.querySelector('#content')
        .appendChild(
    document.createElement('br'));
}

// Usage

function *hello() {
    for (var i = 1; i < 10; i++) {
        yield log(i);
    }
}

function *hey() {
    for (var i = 10; i < 100; i += 10) {
        yield log(i);
    }
}

yo(hello);
yo(hey);

log('Start now. This will print first! ;)');