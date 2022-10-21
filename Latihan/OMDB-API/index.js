const { getMoviesObject } = require('./util');

async function test(keyword, banyak) {
    let movies = await getMoviesObject(keyword);
    let x = (() => {
        let bruh = [];
        for (let i = banyak; i > 0; i--) {
            bruh.push(movies[i]);
        }
        return bruh;
    })();
    console.log(x);
};
console.log("bla1");
test("wolf", 2);
console.log("bla2");
test("spiderman", 1);
console.log("bla3");