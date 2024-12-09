import { resolve } from "node:path";
import * as fs from "node:fs";
import * as tsj from "ts-json-schema-generator";

const path = Deno.args[0];
const outName = Deno.args[1];

// optionally pass argument to schema generator
// const settings: TJS.PartialArgs = {
//     required: true,
//     noExtraProps: true,
// };

// optionally pass ts compiler options
// const compilerOptions: TJS.CompilerOptions = {
//     strictNullChecks: true,
// };


// optionally pass a base path
//
// const program = TJS.getProgramFromFiles(
//     [resolve(`./schemas/${project}/.index.ts`)],
//     compilerOptions,
//     basePath
// );
//
// const schema = TJS.generateSchema(program, "Base", settings)

const config = {
    path: `schemas/${path}.ts`,
    // tsconfig: "path/to/tsconfig.json",
};

const schema = tsj.createGenerator(config).createSchema("Base")
fs.mkdirSync("generated", { recursive: true });
fs.writeFileSync(`generated/${outName}.json`, JSON.stringify(schema, null, 2));

// Write schema to file
//
// console.log("Schema generated successfully");
