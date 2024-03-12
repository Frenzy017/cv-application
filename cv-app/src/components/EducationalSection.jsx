/* eslint-disable react/prop-types */

import Input from "./Input"

export default function EducationalSection({ title, name, titleOfStudy, dateOfStudy }) {
    return (
        <div>
            <section className="grid col-end-1 ml-4">
                <div className="flex mb-8">{title}</div>
                <form action="">
                    <div>{name}
                        <Input />
                    </div>
                    <div>{titleOfStudy}
                        <Input />
                    </div>
                    <div>{dateOfStudy}
                        <Input />
                    </div>
                </form>
            </section>
        </div>
    )
}