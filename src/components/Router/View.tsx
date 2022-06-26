import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {IRouter} from "../../router";

interface RouterViewProps {
    routers: IRouter[]
}

const RouterView = (props: RouterViewProps) => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    props.routers.map((router) => {
                        if( router.children) {
                            return (
                                <Route path={router.path} key={router.key} element={router.component} >
                                    {
                                        router.children.map((childrenRouter) => {
                                            return <Route path={childrenRouter.path} key={childrenRouter.key} element={childrenRouter.component} />
                                        })
                                    }
                                </Route>
                            )
                        }
                        return <Route path={router.path} key={router.key} element={router.component} />
                    })
                }
            </Routes>
        </BrowserRouter>
    );
}

export default RouterView