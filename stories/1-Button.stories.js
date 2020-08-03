import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import "../styles/index.css";
export default {
	title: "Button",
	component: Button,
};

export const Text = () => (
	<Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
	<Button onClick={action("clicked")}>
		<span className="bg-blue-600" role="img" aria-label="so cool">
			hello
		</span>
	</Button>
);
