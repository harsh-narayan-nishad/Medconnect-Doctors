import MedicalMetrics from "../../components/MedicalData/MedicalMatrix";
// import MonthlySalesChart from "../../components/MedicalData/MonthlySalesChart";
// import StatisticsChart from "../../components/MedicalData/StatisticsChart";
// import MonthlyTarget from "../../components/MedicalData/MonthlyTarget";
import RecentAppointments from "../../components/MedicalData/RecentAppointments";
import DemographicCard from "../../components/MedicalData/DemographicCard";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
      title="Mediconnect | Advanced Healthcare Management Dashboard"
      description="Mediconnect is a comprehensive healthcare management dashboard designed for seamless medical administration, patient tracking, and hospital analytics."  
      
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <MedicalMetrics />

          {/* <MonthlySalesChart /> */}
        </div>
{/* 
        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div> */}

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentAppointments />
        </div>
      </div>
    </>
  );
}
