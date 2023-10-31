import { getData } from '@/helpers/db-util';

export default function handler(req, res) {
	const data = getData("feedback").find((e) => { return e.id === req.query.id; });
	
	switch (req.method) {
		case "GET":
			res.status(200).json({ feedback: data });
			break;
	
		default:
			res.status(400).json({ message: "Target does not exist" });
			break;
	}
}