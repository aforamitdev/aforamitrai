import { glob } from 'glob';
import path from 'path';
import fs from 'fs';
import Markdoc from '@markdoc/markdoc';
const GET = async (request: Request) => {
  const dir = path.join(__dirname, '../../../../../data/projects/**/*.md');
  const files = glob.sync(dir);

  const content = {};

  files.map((file) => {
    const rawText = fs.readFileSync(file, 'utf-8');
    const ast = Markdoc.parse(rawText);

    const content = Markdoc.transform(ast);
    console.log(content);
  });
  return Response.json({ test: 'ok', files: [] });
};

const POST = async (request: Request) => {
  console.log(request.body);
};
export { GET };
