//---------------------------------------
//   import dependencies
//---------------------------------------
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
}  from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { indexLoader } from "./loaders/indexLoader"
import { showLoader } from "./loaders/showLoader"
import { createAction} from "./actions/actionsCreate"
import { updateAction } from "./actions/actionsUpdate"
import { deleteAction } from "./actions/actionsDelete"

//---------------------------------------
//   Router Paths
//---------------------------------------
const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route path="" element={<Index />} loader={indexLoader} />
                <Route path=":id" element={<Show />} loader={showLoader} />
                <Route path="create" action={createAction} />
                <Route path="update/:id" action={updateAction} />
                <Route path="delete/:id" action={deleteAction} />
            </Route>)
)

//---------------------------------------
//   Export Router Definition
//---------------------------------------
export default router;

