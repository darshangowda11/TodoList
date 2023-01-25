
import React from "react";
function Maps() {
    return(
        <div>
    {
        list.map((todo) => (
            <table key={todo.id}>
                <tbody>
                    <tr>
                        <td>{todo.text}</td>
                        <td>
                            <button onClick={() => EditClick(todo)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => DeleteClick(todo.id)}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        ))
    }</div>)
}
export default Maps;