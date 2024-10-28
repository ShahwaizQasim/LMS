import { BatchForm } from "@/components/Data Modals/batchModal";
import { BatchTable } from "@/components/Data Tables/batchTable";

function Batches() {
  return (
    <div className="container mx-auto l min-h-screen p-10">
      <div className="flex justify-between">
        <h1
          className="text-center font-bold text-2xl"
          style={{
            fontFamily: "poppins",
          }}
        >
          Batches
        </h1>
        <BatchForm />
      </div>

      <BatchTable />
    </div>
  );
}

export default Batches;
