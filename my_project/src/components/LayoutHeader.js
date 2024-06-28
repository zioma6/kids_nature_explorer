import Title from "./Title";
import {Outlet} from "react-router-dom";
import React from "react";
import ImageAvatar from "./ImageAvatar";

const LayoutHeader = () => {
    return (
        <>
            <header className="header">
                <ImageAvatar/>
                <Title/>
            </header>
            <Outlet/>
        </>
    )
}

export default LayoutHeader;