import React from "react";

import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import FileUpload from "../components/file_upload";

export default {
	title: "File",
	component: FileUpload,
};

export const File_Plain = () => (
	<div className="flex justify-center pt-6">
		<FileUpload />
	</div>
);

export const File_Text = () => (
	<div className="flex justify-center pt-6">
		<FileUpload text="Add a file" />
	</div>
);
