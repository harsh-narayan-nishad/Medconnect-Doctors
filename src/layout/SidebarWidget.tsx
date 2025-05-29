import {Link} from "react-router";
// interface Doctor {
//   name: string;
//   specialty: string;
//   experience: string;
//   contact: string;
// }

// const doctorData: Doctor = {
//   name: "Dr. Musharof Chowdhury",
//   specialty: "Cardiologist",
//   experience: "15 years",
//   contact: "+91 9876543210",
// };

export default function SidebarWidget() {
  return (
    <div
      className="mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]"
    >
      {/* <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        {doctorData.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {doctorData.specialty}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Experience: {doctorData.experience}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Contact: {doctorData.contact}
      </p> */}
<Link
          to="/"
          className="mt-4 inline-block w-full rounded-lg bg-gradient-to-r text-white from-orange-500 to-orange-800 p-3 font-medium cursor-pointer hover:bg-red-600"
          >
         
          Sign out
        </Link>
    </div>
  );
}