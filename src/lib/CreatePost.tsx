"use client";

import { useState } from "react";

const CreatePost = () => {
	const [isPost, setPost] = useState("");
	const [isStatus, setStatus] = useState("");

	const handleCreatePost = async () => {
		try {
			const response = await fetch("/api/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					post: isPost,
				}),
			});
			const data = await response.json();

			setStatus(data.body);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form action={handleCreatePost} className="flex flex-col gap-5" method="post">
				<input
					type="text"
					name="title"
					id="title"
					className="border-2 border-gray-800 px-4 py-2"
					value={isPost}
					onChange={(e) => setPost(e.target.value)}
				/>
				<button className="bg-blue-400 p-2" type="submit">
					Submit
				</button>
			</form>
			{isStatus == "" ? (
				<></>
			) : (
				<>
					<span>
						<p> {isStatus} </p>
						<p>
							Head to api/create/route.ts file to see the error and readme.md file for
							description of the error
						</p>
					</span>
				</>
			)}
		</>
	);
};

export default CreatePost;
