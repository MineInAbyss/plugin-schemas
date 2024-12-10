import {resolve} from "node:path";
import * as fs from "node:fs";
import * as TJS from "npm:typescript-json-schema";

const project = Deno.args[0];
const outFile = Deno.args[1];

// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
    required: true,
    noExtraProps: true,
};

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true,
};

// optionally pass a base path
const basePath = `./schemas/${project}`;

const program = TJS.getProgramFromFiles(
    [resolve(`./schemas/${project}.ts`)],
    compilerOptions,
    basePath,
);

const schema = TJS.generateSchema(program, "Base", settings);

// Write schema to file
fs.mkdirSync("generated", { recursive: true });
fs.writeFileSync(`generated/${outFile}.json`, JSON.stringify(schema, null, 2));

console.log("Schema generated successfully");
