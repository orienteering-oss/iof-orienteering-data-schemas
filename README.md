# iof-orienteering-data-schemas

The official International Orienteering Federation DTDs and XSDs converted to other (unofficial) formats, including XSD and JSON Schema.

## Contents

### Datastandard v3

See [official v3 repo](https://github.com/international-orienteering-federation/datastandard-v3) for original documents.

| Filename                                    | Explanation                                                                                                                |
|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| [./IOF.xsd](./IOF.xsd)                   | Official XSD schema for v3                                                                                                |
| [./iof_v3_schema.json](./iof_v3_schema.json) | Unofficial JSON Schema for v3, converted from unofficial\* XSD with a custom Jackson JsonSchemaGenerator                  |
| [./iof_v3_schema_no_urn.json](./iof_v3_schema_no_urn.json) | Same as `./iof_v3_schema.json` schema, just with resolved references (no URN references). Converted with [un-urn-json-func](https://github.com/mikaello/un-urn-json-func) (in reality [un-urn-json.kt](https://gist.github.com/mikaello/61c05825baa73e920c3ef34417589cc0)) |
| [./IOF_v3.json](./IOF_v3.json)     | Unofficial JSON Schema for v3, converted from unofficial\* XSD with [jsonix-schema-compiler](https://github.com/highsource/jsonix-schema-compiler) |
| [./IOF_v3.js](./IOF_v3.js)              | JSONIX mappings for v3, generated from official XSD with [jsonix-schema-compiler](https://github.com/highsource/jsonix-schema-compiler) |

\* _unofficial v3 XSD_: the original XSD, but with a new base element `IofV3`. The new base element combines all previous top level elements, and makes it easier/possible to generate a single JSON Schema. The downside of this is that to validate against this schema, the JSON object needs a top level attribute saying which type of object this is, e.g. `{ "resultList": { ...original object... } }`, and that JSON unmarshallers based on the original XSD needs to remove this top level property. The new baseelement `IofV3` is only implicitly present in the JSON Schema for v3. When using the Java/Kotlin module [iof-xml](https://github.com/orienteering-oss/iof-xml), these issues are taken care of.

### Datastandard v2

See [official v2 repo](https://github.com/international-orienteering-federation/datastandard-v2) for original documents.

| Filename                                    | Explanation                                                                                                                |
|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| [IOFdata.dtd](./IOFdata.dtd)                | Official DTD schema for v2                                                                                                |
| [iof_v2.xsd](./iof_v2.xsd)                  | Unofficial XSD for v2, converted from DTD to XSD with [trang.jar](https://relaxng.org/jclark/trang-manual.html) (see also [GitHub](https://github.com/relaxng/jing-trang)) |
| [iof_v2_schema.json](./iof_v2_schema.json)  | Unofficial JSON Schema for v2, converted from unofficial XSD with a custom Jackson JsonSchemaGenerator                     |
| [IOF_v2.json](./IOF_v2.json)                | Unofficial JSON Schema for v2, converted from unofficial XSD with [jsonix-schema-compiler](https://github.com/highsource/jsonix-schema-compiler) |
| [IOF_v2.js](./IOF_v2.js)                    | JSONIX mappings for v2, generated from unofficial XSD with [jsonix-schema-compiler](https://github.com/highsource/jsonix-schema-compiler) |
