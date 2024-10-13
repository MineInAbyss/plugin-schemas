# Schemas for Minecraft plugin tools

These are manually transcribed schemas for common config formats seen in Minecraft. We write TypeScript definitions for them and generate the schema using typescript-json-schema.

## Schemas

Here's everything we have so far:
- MythicMobs (Transcribed from their [official docs](https://git.mythiccraft.io/mythiccraft/MythicMobs/))

## Usage

Just point your IDE to the raw generated schema file on GitHub, many IDEs will support doing this by adding a comment at the top of the file:

```yaml
# yaml-language-server: $schema=https://my.url.to/the/schema
```

## Building

- Install [deno](https://deno.com/)

Then run the generator:
```bash
deno install
deno --allow-all generator.ts
```