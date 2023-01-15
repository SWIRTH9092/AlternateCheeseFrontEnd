//----------------------
//  "Cheeses" Loader URL (all cheeses) for Index page
//----------------------
const URL = "https://chessebkend.onrender.com";

export const indexLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const cheeses = await response.json()
    return cheeses
}