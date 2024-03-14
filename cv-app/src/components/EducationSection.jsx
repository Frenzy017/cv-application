/* eslint-disable react/prop-types */

// import Input from "./Input"

export default function EducationSection({ title, name, titleOfStudy, achievements, studyStartDate, studyEndDate }) {
    
    
    
    
    return (
        <div>
            <div>
                <section className="flex justify-start p-3">
                    <form className="bg-slate-600 p-2 text-white text-base font-robot border-2 border-white rounded-md">
                        <span className="flex justify-center pt-1.5 mb-3 font-open-sans italic font-semibold text-lg">{title}</span>

                        <div className="flex justify-start gap-4">
                            <div>{titleOfStudy}
                                <input
                                    type="text" placeholder="Bachelor of Science"
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                            <div>{name}
                                <input
                                    type="text" placeholder="Hamburg University"
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col pt-3">{achievements}
                            <input
                                type="text"
                                placeholder="Graduated with 4.0 GPA"
                                className="pl-1 flex-grow-1 rounded-md min-w-full text-black focus:border-black border-2 border-solid focus:outline-none place" />
                            <button className="self-end absolute pt-6 pr-1">➕</button>
                            
                        </div>



                        <div className="flex justify-center items-center pt-1 gap-4">
                            <div className="text-center">{studyStartDate}
                                <input
                                    type="date"
                                    className="flex pl-1 rounded-md max-w-44 text-black focus:border-black border-2 border-solid focus:outline-none place" />
                            </div>


                            <div className="text-center">{studyEndDate}
                                <input
                                    type="date"
                                    className="flex pl-1 rounded-md max-w-44 text-black focus:border-black border-2 border-solid focus:outline-none place" />
                            </div>
                        </div>



                    </form>
                </section>
            </div>
        </div>
    )
}