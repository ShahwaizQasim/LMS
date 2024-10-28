import { StudentForm } from "@/components/Data Modals/studentModal";
import { StudentTable } from "@/components/Data Tables/studentTable";

function Students() {
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between">
        <h1
          className="text-center font-bold text-2xl"
          style={{
            fontFamily: "poppins",
          }}
        >
          Students
        </h1>
        <StudentForm />
      </div>
      <StudentTable />
    </div>
  );
}

export default Students;
