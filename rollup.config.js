import remove from "rollup-plugin-delete";
import {terser} from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/validator.ts",

    output: {
        exports: "named",
        file: "dist/validator.js",
        format: "cjs"
    },

    plugins: [
        typescript(),
        remove({targets: "dist/*"}),
        terser()
    ]
};
