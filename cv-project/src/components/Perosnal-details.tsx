import Form from "./Form.tsx";

export default function PersonalDetails() {
    return (
        <div className="flex flex-col max-w-2xl">
            <form className="rounded-2xl bg-red-300 p-5">
                <div>
                    <Form/>
                    <Form/>
                    <Form/>
                    <Form/>
                </div>
            </form>
        </div>
    )
}


