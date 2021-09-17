import React, {useState} from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/navbar/NavBar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
            <BrowserRouter>

                <NavBar/>
                <AppRouter/>

            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;