"use client";

import { ReactNode, createContext, useState } from "react";

export type AlertType = "info" | "success" | "danger" | "warning";

export const ALERT_TIME = 5000;

export interface IAlertContext {
	show: boolean;
	text: string;
	alertType: AlertType;
	setAlert: (text: string, type: AlertType) => void;
}

const AlertContext = createContext<IAlertContext>({
	show: false,
	text: "",
	alertType: "info",
	setAlert: (text: string, type: AlertType) => {}
});

export const AlertProvider = ({ children }: { children: ReactNode }) => {
	const [show, setShow] = useState(false);
	const [text, setText] = useState("");
	const [alertType, setAlertType] = useState<AlertType>("info");

	const setAlert = (text: string, alertType: AlertType) => {
		setShow(true);
		setText(text);
		setAlertType(alertType);

		setTimeout(() => {
			setShow(false);
			setText("");
			setAlertType("info");
		}, ALERT_TIME);
	};

	return (
		<AlertContext.Provider
			value={{
				show,
				text,
				alertType,
				setAlert
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
