import { TrainerForm } from "@/components/Data Modals/trainerModal";
import { TrainersTable } from "@/components/Data Tables/trainersTable";

function Trainers() {
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between">
        <h1
          className="text-center font-bold text-2xl"
          style={{
            fontFamily: "poppins",
          }}
        >
          Trainers
        </h1>
        <TrainerForm />
      </div>
      <TrainersTable />
    </div>
  );
}

export default Trainers;
