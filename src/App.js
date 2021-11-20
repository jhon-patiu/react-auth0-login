import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) return <h3>Loading....</h3>;

    return (
        <div className="App">
            <LoginButton />
            <LogoutButton />
            <Profile />
        </div>
    );
}

export default App;
