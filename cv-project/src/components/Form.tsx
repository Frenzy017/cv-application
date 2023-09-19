type FormTypes = {
    fullname: string;
    email: string;
    phone: string;
    address: string;
}

const FormProps:FormTypes = {
    fullname: "Full name",
    email: "Email",
    phone: "Phone",
    address: "address"
}

export default function Form(FormProps) {
    return (
        <div>
            <h2 className="font-bold">Personal Details</h2>
            <div className="flex flex-col flex-grow gap-6 mb-3">
                <label>
                    <span className='bs-font'>{FormProps}</span>
                </label>
                <input id="email" type="email" placeholder="Enter email" value="josephine.meyers@mail.co.uk"/>
            </div>
        </div>
    )
}