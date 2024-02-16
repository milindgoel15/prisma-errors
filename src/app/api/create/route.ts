import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const prisma = new PrismaClient();

export async function POST(req: Request) {
	try {
		const body = await req.json();
		console.log(body);

		await prisma.post.create({
			data: {
				title: body.title,
			},
		});

		return NextResponse.json({
			status: 201,
			body: "Created",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			status: 400,
			body: "Failed to create your post",
		});
	}
}
