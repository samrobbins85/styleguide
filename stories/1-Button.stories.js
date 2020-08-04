import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import FileUpload from "../components/file_upload";

import ReactModal from "../components/modal";

export default {
	title: "File",
	component: FileUpload,
	decorators: [withKnobs],
};

export const File_Plain = () => (
	<div className="flex justify-center pt-6">
		<FileUpload />
	</div>
);

export const File_Text = () => (
	<div className="flex justify-center pt-6">
		<FileUpload text={text("Text", "Add a file")} />
	</div>
);

export const Modal = () => <ReactModal title="Hello">World</ReactModal>;
