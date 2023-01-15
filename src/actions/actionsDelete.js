//---------------------------
//  actions for routes
//---------------------------

//---------------------------
//  import dependencies
//---------------------------
import { redirect }  from "react-router-dom";

//---------------------------
//  URL for data
//---------------------------
const URL = "https://chessebkend.onrender.com"

export const deleteAction = async({params}) => {
    //delete chsse with our API
    await fetch(URL + "/cheese/" + params.id, {
        method: "delete"
    })
    //redirect to index
    return redirect("/")
}