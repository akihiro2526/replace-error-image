import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "es",
      //   format: "cjs",
      //   exports: "auto",
    },
    plugins: [typescript(), resolve()],
  },
];
