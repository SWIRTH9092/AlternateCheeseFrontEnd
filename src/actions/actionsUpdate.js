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
const URL = "https://chessebkend.onrender.com";

export const updateAction = async ({request, params}) => {
    //get data from form
    const formData = await request.formData()
    //set update cheese to match schema
    const updatedCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }
    // Send updated cheese to our API
    await fetch(URL + "/cheese/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCheese)
    })
        // redirect to index
        return redirect("/")
}