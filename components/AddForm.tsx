"use client"

import { CreateTodo } from "@/app/actions";
import { useFormStatus } from "react-dom"
// import { useActionState } from "react";

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
    // const [state, formAction] = useActionState(CreateTodo, initialState);

    return (
        <div className="">
            <form action={CreateTodo}>
                <label htmlFor="todo" className="">Enter Task</label>
                <input type="text" name="todo" className="px-1" required />
                <SubmitButton />
            </form>

        </div>
    )
}

