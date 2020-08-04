import React from "react";

import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import FileUpload from "../components/file_upload";

export default {
	title: "Form",
	component: Button,
};

export const Text = () => (
	<Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
	<Button onClick={action("clicked")}>
		<span className="bg-green-200" role="img" aria-label="so cool">
			😀
		</span>
	</Button>
);

export const File = () => (
	<div className="flex justify-center pt-6">
		<FileUpload />
	</div>
);

Emoji.story = {
	name: "with emoji",
};
