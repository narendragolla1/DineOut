import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return (
        <>
        <h1>Oops!</h1>
        <p>{err.status+" "+err.statusText}</p>

        </>
    )
}