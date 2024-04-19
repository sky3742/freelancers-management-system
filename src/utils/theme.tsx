"use client";

import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

export function useTheme() {
	const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);

	useEffect(() => {
		if (darkTheme) {
			document.querySelector("html")?.classList.add("dark");
		} else {
			document.querySelector("html")?.classList.remove("dark");
		}
	}, [darkTheme]);

	return {
		isDark: darkTheme,
		setIsDark: setDarkTheme
	};
}
