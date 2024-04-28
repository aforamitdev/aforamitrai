import { glob } from 'glob';
import path from 'path';
import fs from 'fs';
import Markdoc from '@markdoc/markdoc';
import { NextRequest } from 'next/server';
import config from '@/schema/config';
const GET = async (request: NextRequest) => {
  const snapped = request.nextUrl.searchParams.get('snapped');

  const content: any[] = [];
  const parseds: any[] = [];
  if (snapped) {
    const dir = path.join(__dirname, '../../../../../data/projects/**/*.md');
    const files = glob.sync(dir);
    files.map((file) => {
      const text = fs.readFileSync(file, 'utf-8');
      const ast = Markdoc.parse(text);
      console.log(ast);
      const parsed = Markdoc.transform(ast, config);
      parseds.push(parsed);
      content.push(ast);
    });
  }
  // console.log(query);

  return Response.json({ test: 'ok', files: content, parsed: parseds });
};

const POST = async (request: Request) => {
  console.log(request.body);
};
export { GET };
