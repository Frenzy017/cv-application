/* eslint-disable react/prop-types */

import EducationalSection from "./components/EducationalSection"
import GeneralSection from "./components/GeneralSection"
import PracticalSection from "./components/PracticalSection"


function App() {

  return (
    <div className="grid grid-cols-2">
      <div
        className="flex justify-center col-start-2 row-span-2 h-1/1 mr-8 pl-8 bg-purple-300 border-4 border-slate-700" >
        CV Template
      </div>

      <div className="bg-slate-400 w-1/2">
      
        <GeneralSection
          title="General Information"
          name="Name"
          lastName="Last Name"
          email="Email"
          phoneNumber="Phone number"
        />

        <EducationalSection
          title="Educational Section"
          name="School name"
          titleOfStudy="Title of study"
          dateOfStudy="Date of study"
        />

        <PracticalSection
          title="Practical Experience"
          positionTitle="Positional title"
          name="Company name"
          achievements="Achievements / Tasks"
          dateWorkStartEnd="Work Start / End"
        />

      </div>
    </div>
  )
}

export default App
