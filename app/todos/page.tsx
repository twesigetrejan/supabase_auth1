import { supabase } from "@/lib/supabaseClient";
import {AddForm} from "@/components/AddForm";
export default async function TodoHome() {

    let todos = null;
    try {
        const { data, error } = await supabase.from("todos").select('*');

        if (error) {
            throw error;
        }

        todos = data;
        console.log(data);
    } catch (error) {
        console.error(`Error fetching todos: ${error}`);
    }

    return (
        <div className="">
            <h1 className="">
                Checklist
            </h1>
            <AddForm />
            <ul className="">
                {todos && todos.map((tod) => (
                    <li className="" key={tod.id}>
                        {tod.todo}
                    </li>
                ))}
                <li className=""></li>
            </ul>
        </div>
    );
}
