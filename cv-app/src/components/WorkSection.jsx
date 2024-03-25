/* eslint-disable react/prop-types */

// import Input from "./Input"

export default function WorkSection
    (
        { title, companyName, jobTitle, achievements, workStartDate, workEndDate,
            jobChangeTitle, handleJobTitleChange, companyTitle, handleCompanyTitleChange,
            achievementsChange, handleAchievementsChange, setAchievementList, achievementList,
            nextId, setAchievementsChange, dateStartJob, handleDateStartJobChange,
            dateEndJob, handleDateEndJobChange
        }
    ) {

    return (
        <div>
            <div>
                <section className="flex justify-start p-3">
                    <form className="bg-slate-600 p-2 text-white text-base font-robot border-2 border-white rounded-md">

                        <span className="flex justify-center pt-1.5 mb-3 font-open-sans italic font-semibold text-lg">{title}</span>

                        <div className="flex justify-start gap-4">
                            <div>{jobTitle}
                                <input
                                    type="text" placeholder="Intern Audit" value={jobChangeTitle} onChange={handleJobTitleChange}
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                            <div>{companyName}
                                <input
                                    type="text" placeholder="Morgan Stanley" value={companyTitle} onChange={handleCompanyTitleChange}
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col pt-3">{achievements}
                            <input
                                type="text" placeholder="Signed up more than 200 enterprise clients" value={achievementsChange} onChange={handleAchievementsChange} required
                                className="pl-1 flex-grow-1 rounded-md min-w-full text-black focus:border-black border-2 border-solid focus:outline-none place" />

                            <button className="self-end absolute pt-6 pr-1" onClick={(e) => {
                                e.preventDefault();

                                if (achievementsChange === "") {
                                    alert("Please type something first!");
                                    return;
                                }

                                // Creating an object for achievements 
                                // achievementsChange is the input value 
                                // We spread syntax the object to create new values

                                setAchievementList([
                                    ...achievementList,
                                    { id: nextId++, name: achievementsChange }
                                ]);

                                // Resetting input value after an achievement is added
                                setAchievementsChange("");
                            }}>➕</button>
                        </div>


                        <div className="flex justify-center items-center pt-1 gap-4">
                            <div className="text-center">{workStartDate}
                                <input
                                    type="date" value={dateStartJob} onChange={handleDateStartJobChange}
                                    className="flex pl-1 rounded-md max-w-44 text-black focus:border-black border-2 border-solid focus:outline-none place" />
                            </div>


                            <div className="text-center">{workEndDate}
                                <input
                                    type="date" value={dateEndJob} onChange={handleDateEndJobChange}
                                    className="flex pl-1 rounded-md max-w-44 text-black focus:border-black border-2 border-solid focus:outline-none place" />
                            </div>
                        </div>
                    </form>
                </section>
            </div>


        </div>
    )
}