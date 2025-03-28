import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";

export default function MedicalSelectInputs() {
  const departments = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "dermatology", label: "Dermatology" },
  ];

  const handleDepartmentChange = (value: string) => {
    console.log("Selected Department:", value);
  };

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const symptomsOptions = [
    { value: "fever", text: "Fever", selected: false },
    { value: "cough", text: "Cough", selected: false },
    { value: "fatigue", text: "Fatigue", selected: false },
    { value: "headache", text: "Headache", selected: false },
    { value: "shortness_of_breath", text: "Shortness of Breath", selected: false },
  ];

  return (
    <ComponentCard title="Medical Select Inputs">
      <div className="space-y-6">
        <div>
          <Label>Department</Label>
          <Select
            options={departments}
            placeholder="Select a Department"
            onChange={handleDepartmentChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <MultiSelect
            label="Select Symptoms"
            options={symptomsOptions}
            defaultSelected={["fever", "cough"]}
            onChange={(values) => setSelectedSymptoms(values)}
          />
          <p className="sr-only">
            Selected Symptoms: {selectedSymptoms.join(", ")}
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
