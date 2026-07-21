import GrandChild from "./GrandChild.jsx";
function Child({name}){
    return(
        <>
        <GrandChild name={name}></GrandChild>
        </>
    );
}
export default Child;