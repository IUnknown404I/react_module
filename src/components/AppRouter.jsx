import React, {useContext} from 'react';
import {outerRoutes, privateRoutes, publicRoutes} from "../router/routes";
import {Redirect, Route, Switch} from "react-router-dom";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map((route) =>
                    <Route
                        key={Date.now() + 666}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                {publicRoutes.map((route) =>
                    <Route
                        key={Date.now() + 666}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                {/*{outerRoutes.map((route) =>*/}
                {/*    <Route*/}
                {/*        key={Date.now() + 666}*/}
                {/*        to={route.to}*/}
                {/*        exact={route.exact}*/}
                {/*    />*/}
                {/*)}*/}
                <Redirect to='/posts'/>
            </Switch>

            :
            <Switch>
                {publicRoutes.map((route) =>
                    <Route
                        key={Date.now() + 666}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to='/login'/>
            </Switch>

    );
};

export default AppRouter;