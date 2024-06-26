/* eslint-disable react/prop-types */


export default function CvSection
    (
        {
            firstNameChange, lastNameChange, emailChange, phoneChange,
            jobChangeTitle, companyTitle, achievementList, studyTitle, schoolTitle,
            educationAchievementList, dateStartJob, dateEndJob, dateStartStudy, dateEndStudy
        }
    ) {





    return (
        <div className="grid h-fit">
            <section className="
            flex flex-col max-w-4xl mr-8
            bg-slate-100 border-4 border-black
            shadow-2xl shadow-slate-700
            "
            >
                <div className="grid grid-cols-4">
                    <div className="col-span-4 text-center bg-slate-900 p-3 font-serif text-white 
                                    font-light tracking-wide text-3xl max-h-fit">
                        CV Application
                    </div>


                    <div className="grid col-span-1 row-span-1 p-3 max-w-fit min-h-screen
                                  bg-slate-800 text-white border-t-2 border-r-2 border-white ">
                        <div className="flex flex-col justify-start items-start gap-5">

                            <div className="flex items-center justify-center  
                        m-4 w-40 h-40 rounded-full border-4 border-black
                        shadow-sm shadow-black border-x-slate-500
                        bg-white text-gray-700 text-xl font-bold">Avatar</div>

                            <div>
                                <span className="flex justify-start font-open-sans text-2xl text-gray-">Contact</span>
                                <div className="w-40 h-0.5 bg-white"></div>
                                <div className="p-1 font-roboto text-base">Email
                                    <div className="text-sm">
                                        {emailChange ? emailChange : "JenAckles17@gmail.com"}
                                    </div>
                                </div>

                                <div className="p-1">Phone number
                                    <div>
                                        {phoneChange ? phoneChange : "+14433480953"}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="flex justify-start font-open-sans text-2xl">Skills</span>
                                <div className="w-40 h-0.5 bg-white"></div>
                                <div className="flex flex-wrap justify-start p-1 text-sm gap-0.5 pt-2 font-roboto">
                                    <span className="bg-slate-500 rounded-lg p-1 m-0.5">React</span>
                                    <span className="bg-slate-500 rounded-lg p-1 m-0.5">JavaScript</span>
                                    <span className="bg-slate-500 rounded-lg p-1 m-0.5">Git</span>
                                    <span className="bg-slate-500 rounded-lg p-1 m-0.5">NextJS</span>
                                    <span className="bg-slate-500 rounded-lg p-1 m-0.5">NodeJS</span>
                                    <span className="bg-slate-500 rounded-lg p-1 m-0.5">HTML</span>
                                    <span className="bg-slate-500 rounded-lg p-1 m-0.5">CSS</span>
                                </div>
                            </div>

                        </div>
                    </div>




                    <div className="col-span-3">
                        <div className="flex gap-3 p-8">
                            <span className="text-5xl  text-slate-700 font-open-sans font-semibold"> {firstNameChange ? firstNameChange : "Jensen"}</span>
                            <span className="text-5xl text-slate-700 font-open-sans font-normal">{lastNameChange ? lastNameChange : "Ackles"}</span>
                        </div>
                        <div className="text-start text-wrap font-open-sans text-bases pl-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus ab hic ipsam, harum in ad porro distinctio temporibus voluptatum animi necessitatibus molestias accusamus fugit omnis minima voluptates? Provident, alias.</div>


                        <div className="flex flex-col gap-1.5 text-3xl p-8 text-slate-700 font-open-sans">Work Experience
                            <div className="w-full h-0.5 bg-black"></div>
                            <form>
                                <div className="text-lg font-semibold">{dateStartJob ? dateStartJob : "2020.02.03"}  -  {dateEndJob ? dateEndJob : "2024.02.03"}</div>
                                <div className="text-lg">{companyTitle ? companyTitle : "Amazon"}</div>
                                <div className="text-lg font-bold">{jobChangeTitle ? jobChangeTitle : "AWS Cloud Engineer"}</div>
                                <div className="m-1 text-lg">
                                    <span>Achievements / Tasks</span>

                                    <div className="pl-4">

                                        {achievementList.length !== 0 ? achievementList.map(achievement => <li key={achievement.id}>{achievement.name}</li>)
                                            : <span>
                                                <li>Capable of optimizing AWS resources for performance and cost efficiency</li>
                                            </span>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>


                        <div className="flex flex-col gap-1.5 text-3xl p-8 text-slate-700 font-open-sans">Educational Experience
                            <div className="w-full h-0.5 bg-black"></div>
                            <form>
                                <div className="text-lg font-semibold">{dateStartStudy ? dateStartStudy : "2015.02.03"}  -  {dateEndStudy ? dateEndStudy : "2019.02.03"}</div>
                                <div className="text-lg"> {schoolTitle ? schoolTitle : "Hamburg University"}</div>
                                <div className="text-lg font-bold"> {studyTitle ? studyTitle : "Bachelor of Science"}</div>

                                <div className="m-1 text-lg">
                                    <span>Achievements / Tasks</span>

                                    <div className="pl-4">
                                        {educationAchievementList.length !== 0 ? educationAchievementList.map(achievement => <li key={achievement.id}>{achievement.name}</li>)
                                            : <span>
                                                <li>Comfortable with containerization technologies like Docker and Kubernetes on AWS</li>
                                            </span>
                                        }
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}