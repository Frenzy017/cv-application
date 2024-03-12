/* eslint-disable react/prop-types */

import Input from "./Input"

export default function GeneralSection({ title, name, lastName, email, phoneNumber }) {
    return (
        <div>
            <section className="grid col-end-1 ml-4">
                <div className="flex mb-8">{title}</div>
                <form action="">
                    <div>{name}
                        <Input />
                    </div>
                    <div>{lastName}
                        <Input />
                    </div>
                    <div>{email}
                        <Input />
                    </div>
                    <div>{phoneNumber}
                        <Input />
                    </div>
                </form>
            </section>
        </div>
    )
}