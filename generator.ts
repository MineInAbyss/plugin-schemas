import { resolve } from "node:path";
import * as fs from "node:fs";
import * as TJS from "typescript-json-schema";

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
const basePath = "./schemas/mythicmobs";

const program = TJS.getProgramFromFiles(
    [resolve("./schemas/mythicmobs/.index.ts")],
    compilerOptions,
    basePath
);

const schema = TJS.generateSchema(program, "Base", settings)

// Write schema to file
fs.mkdirSync("generated", { recursive: true });
fs.writeFileSync("generated/mythicmobs.json", JSON.stringify(schema, null, 2));

console.log("Schema generated successfully");
