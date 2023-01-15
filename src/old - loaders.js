//----------------------
//  "Cheeses" Loader URL (all cheeses)
//----------------------
const URL = "https://chessebkend.onrender.com";

export const cheesesLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const cheeses = await response.json()
    return cheeses
}


//----------------------
//  "Cheese" Loader URL (for a selected cheese)
//----------------------

export const cheeseLoader = async ({params}) => {
    const response = await fetch(URL + "/cheese/" + params.id )
    const cheese = await response.json()
     return cheese
}