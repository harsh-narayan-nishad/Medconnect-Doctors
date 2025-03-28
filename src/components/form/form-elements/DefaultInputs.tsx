import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import { CalenderIcon, EyeCloseIcon, EyeIcon, TimeIcon } from "../../../icons";
import Flatpickr from "react-flatpickr";

export default function MedicalInputs() {
  const [showPassword, setShowPassword] = useState(false);
  const departments = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected Department:", value);
  };

  const [dateOfBirth, setDateOfBirth] = useState("");
  const handleDateChange = (date: Date[]) => {
    setDateOfBirth(date[0].toLocaleDateString()); // Format selected date
  };

  return (
    <ComponentCard title="Patient Information Form">
      <div className="space-y-6">
        <div>
          <Label htmlFor="patientName">Patient Name</Label>
          <Input type="text" id="patientName" placeholder="Enter full name" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="patient@example.com" />
        </div>

        <div>
          <Label>Department</Label>
          <Select
            options={departments}
            placeholder="Select a department"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>

        <div>
          <Label>Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
            >
              {showPassword ? (
                <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              ) : (
                <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              )}
            </button>
          </div>
        </div>

        <div>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <div className="relative w-full flatpickr-wrapper">
            <Flatpickr
              value={dateOfBirth}
              onChange={handleDateChange}
              options={{ dateFormat: "Y-m-d" }}
              placeholder="Select Date of Birth"
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none dark:bg-gray-900 dark:text-white"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <CalenderIcon className="size-6" />
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor="appointmentTime">Appointment Time</Label>
          <div className="relative">
            <Input
              type="time"
              id="appointmentTime"
              onChange={(e) => console.log("Selected time:", e.target.value)}
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <TimeIcon className="size-6" />
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor="mrn">Medical Record Number (MRN)</Label>
          <Input
            type="text"
            id="mrn"
            placeholder="Enter MRN"
            className="pl-4"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
