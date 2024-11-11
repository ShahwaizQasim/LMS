import { ConnectDB } from "@/lib/dbConnect";
import { CourseModal } from "@/lib/modals/courseModal";


export async function POST(request) {
    await ConnectDB();
    const obj = await request.json();

    let newCourse = new CourseModal({ ...obj });
    newCourse = await newCourse.save();

    return Response.json({
        error: false,
        msg: "Course Added Successfully",
        course: newCourse,
    })
}

export async function GET() {
    await ConnectDB();
    const courses = await CourseModal.find();
    return Response.json({
        error: false,
        msg: "Course Fetch Successfully",
        courses: courses,
    })
}