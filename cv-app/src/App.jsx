/* eslint-disable react/prop-types */

import CvSection from "./components/CvSection"
import EducationSection from "./components/EducationSection"
import GeneralSection from "./components/GeneralSection"
import WorkSection from "./components/WorkSection"

function App() {

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-slate-800 max-w-fit p-3 shadow-2xl h-fit shadow-slate-700 rounded-xl">
          <GeneralSection
            title="General Information"
            name="Name"
            lastName="Last Name"
            email="Email"
            phoneNumber="Phone number"
          />
          <EducationSection
            title="Education Experience"
            name="School name"
            titleOfStudy="Title of study"
            achievements="Achievements / Tasks"
            studyStartDate="Start Date"
            studyEndDate="End Date"
          />
          <WorkSection
            title="Work Experience"
            companyName="Company name"
            jobTitle="Job"
            achievements="Achievements / Tasks"
            workStartDate="Start date"
            workEndDate="End date"
          />
        </div>

        <CvSection />


        {/* <footer className="flex justify-center mt-20">
          Created by Aleksandar Ladzhov
        </footer> */}

      </div>
    </div>
  )
}

export default App
