import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { username, email, password } = await request.json();
  await connect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email already in use", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User Registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
