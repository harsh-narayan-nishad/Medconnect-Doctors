import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { EnvelopeIcon } from "../../../icons";
import PhoneInput from "../group-input/PhoneInput";

export default function MedicalInputGroup() {
  const countries = [
    { code: "US", label: "+1" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];

  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
  };

  return (
    <ComponentCard title="Medical Contact Details">
      <div className="space-y-6">
        <div>
          <Label>Patient Email</Label>
          <div className="relative">
            <Input
              placeholder="patient@example.com"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <EnvelopeIcon className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label>Patient Phone Number</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder="+1 (555) 123-4567"
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div>
          <Label>Emergency Contact</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder="+1 (555) 987-6543"
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
