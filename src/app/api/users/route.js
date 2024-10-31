import { ConnectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/userModal";
import bcrypt from "bcrypt";

export async function POST(request) {
  await ConnectDB();
  const obj = await request.json();
  console.log("obj=>", obj);

  const user = await UserModal.findOne({ email: obj.email });
  console.log("user->", user);

  if (user)
    return Response.json(
      { error: true, msg: "User already exist" },
      { status: 403 }
    );

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(obj.email, saltRounds);
  let password = obj.password; // simple password
  password = hashedPassword; // simple password ko hashed me convert kiya hai

  let newUser = new UserModal({ ...obj });
  newUser = newUser.save();

  return Response.json("User Post successfully");
}

export async function GET(request) {
  return Response.json("api fetch successfully");
}
