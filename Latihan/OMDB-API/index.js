const { getMoviesObject } = require('./util');

async function test(keyword) {
    console.log(await getMoviesObject(keyword));
};

test("wolf");
test("spiderman");