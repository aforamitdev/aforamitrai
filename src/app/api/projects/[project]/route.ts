import { glob } from 'glob';
import path from 'path';
import fs from 'fs';
import Markdoc from '@markdoc/markdoc';
import config from '@/schema/config';

const GET = async (
  request: Request,
  params: { params: { project: string } }
) => {
  const { project } = params.params;
  console.log(config);
  const file = path.join(
    __dirname,
    `../../../../../../data/projects/${project}.md`
  );
  const rawText = fs.readFileSync(file, 'utf-8');
  const ast = Markdoc.parse(rawText);
  const content = Markdoc.transform(ast, config);
  return Response.json({ success: true, response: content });
};

const POST = async (request: Request) => {
  console.log(request.body);
};
export { GET };
