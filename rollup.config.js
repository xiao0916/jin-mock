import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import babel from "@rollup/plugin-babel";
import polyfill from "rollup-plugin-polyfill";
import nodePolyfills from "rollup-plugin-polyfill-node";
import json from "@rollup/plugin-json";

export default {
  input: "src/main.js",
  external: ["jquery"],
  output: [
    {
      file: "dist/index.umd.min.js",
      format: "umd",
      name: "jinMock",
      plugins: [terser()],
      globals: {
        jquery: "$",
      },
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "jinMock",
      plugins: [],
      globals: {
        jquery: "$",
      },
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: (module) => {
        // console.log(module);
        return !["buffer"].includes(module);
      },
    }),
    commonjs(),
    json(),
    babel({
      babelHelpers: "bundled",
    }),
    polyfill([]),
    nodePolyfills({}),
  ],
};
