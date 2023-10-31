export async function postData(url, body, callback, error) {
	return fetch(url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			else {
				return res.json().then((data) => {
					throw new Error(data.message || "Something went wrong!");
				});
			}
		})
		.then((data) => {
			callback(data);
		})
		.catch((err) => {
			error(err);
		});
}