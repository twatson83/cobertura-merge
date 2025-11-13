import { CoberturaJson } from './types/cobertura';
import fs from 'node:fs';
import { addSelfClosingTags } from './util';
import { XMLBuilder } from 'fast-xml-parser';

const XML_HEADER = '<?xml version="1.0" ?>\n';

export function writeOutput(outputFile: string, output: CoberturaJson): void {
  const builder = new XMLBuilder({});
  const xml = builder.build(output);

  const outputXml = XML_HEADER + addSelfClosingTags(xml);
  const outputFilename: string = outputFile;

  fs.writeFileSync(outputFilename, outputXml);
}
