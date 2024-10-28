import { StudentTable } from "@/components/Data Tables/studentTable"

function Students (){
    return(
        <div className="container mx-auto p-10">
            <h1 className="text-center font-bold text-2xl" style={{
                fontFamily:'poppins'
            }}>Students</h1>
           <StudentTable />
        </div>
    )
}

export default Students