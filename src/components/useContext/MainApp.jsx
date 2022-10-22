import { UserProvider } from "../../context/UserContext"
import AppRouter from "./AppRouter"

const MainApp = () => {

    return (
        <div>
            <UserProvider>
                <AppRouter />
            </UserProvider>
        </div>
    )
}

export default MainApp