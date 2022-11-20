const fs = require('fs-extra');
const path = require('path');

const fromTo = [
    {
        from: path.resolve(__dirname, '../build/css'),
        to: path.resolve(__dirname, '../jekyll/css'),
    },
    {
        from: path.resolve(__dirname, '../build/js'),
        to: path.resolve(__dirname, '../jekyll/js'),
    },
    {
        from: path.resolve(__dirname, '../build/pages/default.html'),
        to: path.resolve(__dirname, '../jekyll/_layouts/default.html'),
    },
    {
        from: path.resolve(__dirname, '../build/assets'),
        to: path.resolve(__dirname, '../jekyll/assets'),
    },
];

fromTo.forEach(e => fs.copy(e.from, e.to, (err) => {
    if (err) return console.error(err);
    console.log(`Webpack.Jekyll-Copy: '${e.to}' copied`)
}));
