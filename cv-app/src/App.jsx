/* eslint-disable react/prop-types */

import { useState } from "react"

import CvSection from "./components/CvSection"
import EducationSection from "./components/EducationSection"
import GeneralSection from "./components/GeneralSection"
import WorkSection from "./components/WorkSection"




function App() {

  // Lifting State passing it to children components

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailChange, setEmailChange] = useState("");
  const [phoneChange, setPhoneChange] = useState("");
  const [jobChangeTitle, setJobChangeTitle] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [achievementsChange, setAchievementsChange] = useState("");
  const [achievementList, setAchievementList] = useState([]);


  let nextId = 0;



  // LOGIC TO IMPLEMENT:
  //  achievementsChange is the dynamic input state when we write in WorkSection
  //  I can try to save it as a local variable
  //  I need an ID or Key to differentiate states from each other
  //  Check if the specific variable's ID / Key exist, if not create new one, else do nothing
  //  I need an edge case to check if the input is empty
  //  I need either an array or object to store the achievements somewhere
  //  Afterwards I can map over them and then show the result in the CV Section component








  // Handler functions for preserving input state

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmailChange(e.target.value)
  }

  function handlePhoneChange(e) {
    setPhoneChange(e.target.value)
  }

  function handleJobTitleChange(e) {
    setJobChangeTitle(e.target.value)
  }

  function handleCompanyTitleChange(e) {
    setCompanyTitle(e.target.value);
  }

  function handleAchievementsChange(e) {
    setAchievementsChange(e.target.value)
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-slate-800 max-w-fit p-3 shadow-2xl h-fit shadow-slate-700 rounded-xl">

          <GeneralSection
            title="General Information"
            name="Name"
            lastNameDefault="Last Name"
            email="Email"
            phoneNumber="Phone number"

            // Keeping track of input state
            firstNameChange={firstName}
            handleFirstNameChange={handleFirstNameChange}

            lastNameChange={lastName}
            handleLastNameChange={handleLastNameChange}

            emailChange={emailChange}
            handleEmailChange={handleEmailChange}

            phoneChange={phoneChange}
            handlePhoneChange={handlePhoneChange}
          />

          <WorkSection
            title="Work Experience"
            companyName="Company name"
            jobTitle="Job"
            achievements="Achievements / Tasks"
            workStartDate="Start date"
            workEndDate="End date"

            // Keeping track of input state
            jobChangeTitle={jobChangeTitle}
            handleJobTitleChange={handleJobTitleChange}

            companyTitle={companyTitle}
            handleCompanyTitleChange={handleCompanyTitleChange}


            achievementsChange={achievementsChange}
            handleAchievementsChange={handleAchievementsChange}

            setAchievementList={setAchievementList}
            achievementList={achievementList}
            nextId={nextId}
          />

          <EducationSection
            title="Education Experience"
            name="School name"
            titleOfStudy="Title of study"
            achievements="Achievements / Tasks"
            studyStartDate="Start Date"
            studyEndDate="End Date"
          />
        </div>

        <CvSection

          // Passing state from input 
          firstNameChange={firstName}
          lastNameChange={lastName}
          emailChange={emailChange}
          phoneChange={phoneChange}

          jobChangeTitle={jobChangeTitle}
          companyTitle={companyTitle}
          achievementsChange={achievementsChange}


          achievementList={achievementList}


        />


        {/* <footer className="flex justify-center mt-20">
          Created by Aleksandar Ladzhov
        </footer> */}

      </div>
    </div>
  )
}

export default App
