import { glob } from 'glob';
import path from 'path';
import fs from 'fs';
import Markdoc from '@markdoc/markdoc';

const GET = async (
  request: Request,
  params: { params: { project: string } }
) => {
  const { project } = params.params;

  const file = path.join(
    __dirname,
    `../../../../../../data/projects/${project}.md`
  );

  const rawText = fs.readFileSync(file, 'utf-8');
  const ast = Markdoc.parse(rawText);
};

const POST = async (request: Request) => {
  console.log(request.body);
};
export { GET };
