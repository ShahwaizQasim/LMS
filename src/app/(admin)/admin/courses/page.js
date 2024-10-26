import { CourseTable } from "@/components/Data Tables/courseTable";

function Courses() {
  return (
  <> 
  <div className="container mx-auto min-h-screen p-10">

  <h1 className="text-center font-bold text-2xl">Courses</h1>
  <CourseTable />
  </div>

  </>
  )
  
}

export default Courses;
