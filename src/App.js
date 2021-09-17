import React, {useEffect, useState} from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/navbar/NavBar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoadingAuthRec, setIsLoadingAuthRec] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }

        setIsLoadingAuthRec(false);
    }, [])

    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoadingAuthRec,
            setIsLoadingAuthRec,
        }}>
            <BrowserRouter>

                <NavBar/>
                <AppRouter/>

            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;