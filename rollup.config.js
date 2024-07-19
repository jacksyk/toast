import { terser } from "rollup-plugin-terser"
import postcss from "rollup-plugin-postcss"

import typescript from "@rollup/plugin-typescript"

const config = {
    input: "src/index.ts",
    output: [
        {
            file: "./lib/index.esm.js",
            format: "es",
        },
    ],
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        postcss(),
        terser(), // 压缩代码
    ],
}
export default config
