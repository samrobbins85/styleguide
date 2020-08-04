import Modal from "react-modal";
import React, { useState } from "react";

export default function ReactModal(props) {
	const [modalOpen, setOpen] = useState(false);
	function handleOpenModal() {
		setOpen(true);
	}
	function handleCloseModal() {
		setOpen(false);
	}
	return (
		<div className="flex justify-center pt-6">
			<button onClick={handleOpenModal}>Trigger Modal</button>
			<Modal
				isOpen={modalOpen}
				onRequestClose={handleCloseModal}
				contentLabel="Hello"
				className="absolute w-1/3 h-64 bg-white border border-gray-400 p-2"
				overlayClassName="flex justify-center"
			>
				<div>
					<div className="pb-12">
						<span className="flex float-left text-3xl">
							{props.title}
						</span>
						<button
							className="flex float-right"
							onClick={handleCloseModal}
						>
							<svg
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-10"
							>
								<path d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<hr />
					{props.children}
				</div>
			</Modal>
		</div>
	);
}

ReactModal.defaultProps = {
	title: "Title",
	children: "Content",
};
