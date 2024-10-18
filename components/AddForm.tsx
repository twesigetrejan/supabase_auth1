"use client"

import { CreateTodo } from "@/app/actions";
import { useFormStatus } from "react-dom"

const initialState = {
    message: "",
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" aria-disabled={pending}>
            Add
        </button>
    );
}
export function AddForm() {
    const [state, formAction] = useActionState(CreateTodo, initialState);

    return (
        <div className="">
            <form action={formAction}>
                <label htmlFor="todo" className="">Enter Task</label>
                <input type="text" className="" required />
                <SubmitButton />
            </form>

        </div>
    )
}

