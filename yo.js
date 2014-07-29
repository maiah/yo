// API

function sked(gen) {
    setTimeout(function () {
        var nxt = gen.next();

        if (!nxt.done) {
            nxt.value;
            sked(gen);
        }
    }, 0);
}

function yo(fn) {
    var gen = fn();
    sked(gen);
}