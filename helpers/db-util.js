import fs from 'fs';
import path from 'path';

export function getData(db) {
	const filePath = path.join(process.cwd(), "data", `${db}.json`);
	return JSON.parse(fs.readFileSync(filePath));
}

export function appendData(db, newData) {
	const filePath = path.join(process.cwd(), "data", `${db}.json`);
	const data = JSON.parse(fs.readFileSync(filePath));
	data.push(newData);
	fs.writeFileSync(filePath, JSON.stringify(data));
}