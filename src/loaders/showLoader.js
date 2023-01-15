
//----------------------
//  "Cheese" Loader URL (for a selected cheese) for show page
//----------------------
const URL = "https://chessebkend.onrender.com";

export const showLoader = async ({params}) => {
    const response = await fetch(URL + "/cheese/" + params.id )
    const cheese = await response.json()
     return cheese
}