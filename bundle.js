const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        'dist/micro-header/main.js',
        'dist/micro-header/polyfills.js',
        'dist/micro-header/runtime.js',
        'dist/styles.js',
    ]
    await fs.ensureDir('dist/app');
    await concat(files, 'dist/app/micro-header.js')
})()