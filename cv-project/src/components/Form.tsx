export default function Form() {
    return (
        <div>
            <h2 className="font-bold">Personal Details</h2>
            <div className="flex flex-col flex-grow gap-6 mb-3">
                <label>
                    <span>Full name</span>
                </label>
                <input id="email" type="email" placeholder="Enter email" value="josephine.meyers@mail.co.uk"/>
            </div>
        </div>
    )
}