import { terser } from "rollup-plugin-terser"
import postcss from "rollup-plugin-postcss"
import serve from "rollup-plugin-serve"

import typescript from "@rollup/plugin-typescript"

const getEnvironment = () => {
    const args = process.argv
    const _ENV_INDEX = args.findIndex((arg) => arg.startsWith("--env"))
    return args[_ENV_INDEX + 1]
}

const ENV = getEnvironment()

const config = {
    input: "src/index.ts",
    output: [
        {
            file: "./lib/index.esm.js",
            format: "es",
        },
    ],
    plugins: [
        ENV === "development" &&
            serve({
                contentBase: "./",
                port: 9000,
            }),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        postcss(),
        terser(), // 压缩代码
    ],
}
export default config
