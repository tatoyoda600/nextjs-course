import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "data", "posts");

export function getPostFiles() {
	return fs.readdirSync(postsDir);
}

export function getPostData(fileName) {
	const postSlug = fileName.replace(/\.md$/, ''); // removes the file extension
	const filePath = path.join(postsDir, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);

	return {
		slug: postSlug,
		content: content,
		...data
	};
}

export function getAllPosts() {
	const postFiles = getPostFiles();

	const postData = postFiles.map((e) => {
		return getPostData(e);
	});

	return postData.sort((a, b) => { return a.date > b.date ? -1 : 1 });
}

export function getFeaturedPosts() {
	return getAllPosts().filter((e) => { return e.isFeatured });
}