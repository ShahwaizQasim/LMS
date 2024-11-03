import { ConnectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/userModal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  await ConnectDB();
  const obj = await request.json();
  // console.log("obj=>", obj);

  const user = await UserModal.findOne({ email: obj.email });
  console.log("user->", user);

  if (user)
    return Response.json(
      { error: true, msg: "User already exist" },
      { status: 403 }
    );

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(obj.password, saltRounds);
  obj.password = hashedPassword; // simple password ko hashed me convert kiya hai

  let newUser = await new UserModal({ ...obj });
  newUser = await newUser.save();

  const token = jwt.sign(
    { id: newUser._id, role: newUser.role },
    process.env.JWT_KEY
  );

  return Response.json({
    error: "false",
    msg: "User Added Successfully",
    user: newUser,
    token,
  });
}

export async function GET(request) {
  return Response.json("api fetch successfully");
}
