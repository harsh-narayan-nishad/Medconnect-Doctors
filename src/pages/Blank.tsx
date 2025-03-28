import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

export default function Blank() {
  return (
    <div>
      <PageMeta
        title="MedConnect | Medical Dashboard"
        description="This is the MedConnect Medical Dashboard page for managing patient records, appointments, and healthcare analytics."
      />
      <PageBreadcrumb pageTitle="Medical Dashboard" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Welcome to MedConnect
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Start managing patient records, scheduling appointments, and analyzing healthcare data. 
            Explore the dashboard to access all medical functionalities.
          </p>
        </div>
      </div>
    </div>
  );
}
