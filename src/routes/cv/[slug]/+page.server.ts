import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const dataDir = path.resolve('src/data/cvs');
	const filePath = path.join(dataDir, `${slug}.md`);

	if (!fs.existsSync(filePath)) {
		error(404, 'CV not found');
	}

	const fileContent = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContent);
	const htmlContent = await marked.parse(content);

	return {
		cv: {
			slug,
			name: data.name,
			role: data.role,
			email: data.email,
			avatar: data.avatar,
			id: data.id,
			htmlContent
		}
	};
}
