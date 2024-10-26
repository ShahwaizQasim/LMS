import { CourseForm } from "@/components/Data Modals/courseModals";
import { CourseTable } from "@/components/Data Tables/courseTable";
import { Button } from "@/components/ui/button";

function Courses() {
  return (
    <>
      <div className="container mx-auto min-h-screen p-10">
        <div className="flex justify-between">
          <h1 className="text-center font-bold text-2xl">Courses</h1>
          <CourseForm />
        </div>
        <CourseTable />
      </div>
    </>
  );
}

export default Courses;
