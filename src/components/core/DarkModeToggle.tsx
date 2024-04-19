"use client";

import { Toggle } from "@/components/common";
import { useTheme } from "@/utils/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export const DarkModeToggle = () => {
	const { isDark, setIsDark } = useTheme();

	return (
		<div className="px-6 pt-6">
			<Toggle
				checked={isDark}
				onChange={setIsDark}
				iconLeft={<SunIcon className="h-3 w-3 text-gray-400" />}
				iconRight={<MoonIcon className="h-3 w-3 text-gray-400" />}
			/>
		</div>
	);
};
