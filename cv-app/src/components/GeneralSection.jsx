/* eslint-disable react/prop-types */

// import Input from "./Input"

export default function GeneralSection({ title, name, lastName, email, phoneNumber }) {



    return (
        <div>
            <div>
                <section className="flex justify-start p-3">
                    <form className="bg-slate-600 p-2 text-white text-base font-robot border-2 border-white rounded-md">
                        <span className="flex justify-center pt-1.5 mb-3 font-open-sans italic font-semibold text-lg ">{title}</span>
                        <div className="flex justify-start gap-4">
                            <div>{name}
                                <input
                                    type="text" placeholder="Jensen"
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                            <div>{lastName}
                                <input
                                    type="text" placeholder="Ackles"
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div>{email}
                                <input
                                    type="text" placeholder="jensen7@gmail.com"
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                            <div>{phoneNumber}
                                <input
                                    type="text" placeholder="+35954860761"
                                    className="flex pl-1 rounded-md max-w-44 text-black
                                    focus:border-black border-2 border-solid focus:outline-none place"
                                />
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}