const { createContext, useState, useEffect } = require("react");

const NotificationContext = createContext({
	notification: null,
	showNotification: (data) => {},
	hideNotification: () => {}
});

export function NotificationContextProvider(props) {
	const [notification, setNotification] = useState();

	useEffect(() => {
		if (notification && notification.status && (notification.status === "success" || notification.status === "error")) {
			const timer = setTimeout(() => {
				hideNotification();
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [notification]);

	function showNotification(data) {
		setNotification(data);
	}

	function hideNotification() {
		setNotification(null);
	}

	const context = {
		notification,
		showNotification,
		hideNotification
	};

	return <NotificationContext.Provider value={context}>
		{ props.children }
	</NotificationContext.Provider>
}

export default NotificationContext;