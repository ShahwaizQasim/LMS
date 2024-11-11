import { ConnectDB } from "@/lib/dbConnect";
import { BatchModal } from "@/lib/modals/batchModal";


export async function POST(request) {
    await ConnectDB();
    const obj = await request.json();
    let newBatch = new BatchModal({ ...obj });
    newBatch = newBatch.save();
    return Response.json(
        {
            error: false,
            msg: 'Batch Added Successfully',
            batch: newBatch,
        }
    )
}

export async function GET() {
    return Response.json({
        error: true,
        msg: "Batch Fetch Successfully"
    })
}