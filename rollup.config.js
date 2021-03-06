// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';

export default {
    input: 'src/bouncer.bs.js',
    output: {
        file: 'bundle.js',
        format: 'cjs',
        name: 'Bouncer',
    },
    plugins: [
        resolve()
    ]
};