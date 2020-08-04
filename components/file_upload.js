import React, { useState } from "react";
export default function FileUpload(props) {
	const [fileName, setFileName] = useState(false);
	function handleChange(event) {
		setFileName(event.target.files[0].name);
	}

	return (
		<div className="flex justify-center">
			<label class="w-64 flex flex-col items-center px-2 py-2 bg-white text-gray-800 rounded-lg shadow  border border-gray-300 cursor-pointer hover:bg-gray-200">
				<svg
					class="w-8 h-8"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
				</svg>
				<span class="mt-2 text-base leading-normal">
					{fileName ? fileName : props.text}
				</span>
				<input type="file" class="hidden" onChange={handleChange} />
			</label>
		</div>
	);
}

FileUpload.defaultProps = {
	text: "Select a file",
};
