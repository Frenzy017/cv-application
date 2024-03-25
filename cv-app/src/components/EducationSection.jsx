/* eslint-disable react/prop-types */

// import Input from "./Input"

export default function EducationSection
    (
        { title, name, titleOfStudy, achievements, studyStartDate, studyEndDate,
            handleStudyTitleChange, studyTitle, handleSchoolTitleChange, schoolTitle,
            nextId, educationAchievementInput, setEducationAchievementInput, handleEducationAchievementChange,
            setEducationAchievementList, educationAchievementList, dateStartStudy, handleDateStartStudyChange,
            dateEndStudy, handleDateEndStudyChange

        }
    ) {

    return (
        <div>
            <div>
                <section className="flex justify-start p-3">
                    <form className="bg-slate-600 p-2 text-white text-base font-robot border-2 border-white rounded-md">
                        <span className="flex justify-center pt-1.5 mb-3 font-open-sans italic font-semibold text-lg">{title}</span>

                        <div className="flex justify-start gap-4">
                            <div>{titleOfStudy}
                                <input
                                    type="text" placeholder="Bachelor of Science" value={studyTitle} onChange={handleStudyTitleChange}
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                            <div>{name}
                                <input
                                    type="text" placeholder="Hamburg University" value={schoolTitle} onChange={handleSchoolTitleChange}
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col pt-3">{achievements}
                            <input
                                type="text"
                                placeholder="Graduated with 4.0 GPA" value={educationAchievementInput} onChange={handleEducationAchievementChange}
                                className="pl-1 flex-grow-1 rounded-md min-w-full text-black focus:border-black border-2 border-solid focus:outline-none place" />
                            <button className="self-end absolute pt-6 pr-1" onClick={(e) => {
                                e.preventDefault();

                                if (educationAchievementInput === "") {
                                    alert("Please type something first!");
                                    return;
                                }

                                // Creating an object for achievements 
                                // achievementsChange is the input value 
                                // We spread syntax the object to create new values

                                setEducationAchievementList([
                                    ...educationAchievementList,
                                    { id: nextId++, name: educationAchievementInput }
                                ]);

                                // Resetting input value after an achievement is added
                                setEducationAchievementInput("");
                            }}>➕</button>

                        </div>



                        <div className="flex justify-center items-center pt-1 gap-4">
                            <div className="text-center">{studyStartDate}
                                <input
                                    type="date" value={dateStartStudy} onChange={handleDateStartStudyChange}
                                    className="flex pl-1 rounded-md max-w-44 text-black focus:border-black border-2 border-solid focus:outline-none place" />
                            </div>


                            <div className="text-center">{studyEndDate}
                                <input
                                    type="date" value={dateEndStudy} onChange={handleDateEndStudyChange}
                                    className="flex pl-1 rounded-md max-w-44 text-black focus:border-black border-2 border-solid focus:outline-none place" />
                            </div>
                        </div>



                    </form>
                </section>
            </div>
        </div>
    )
}