import { ConnectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/userModal";

export async function POST(request) {
  await ConnectDB();
  const obj = await request.json();
  console.log("obj=>", obj);

  const user = UserModal.findOne({ email: obj.email });
  console.log("user->", user);

  if (user)
    return Response.json(
      { error: true, msg: "User already exist" },
      { status: 403 }
    );

  return Response.json("User Post successfully");
}

export async function GET(request) {
  return Response.json("api fetch successfully");
}
