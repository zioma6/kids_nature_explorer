import ImageAvatar from "./ImageAvatar";
import Title from "./Title";
import {Outlet} from "react-router-dom";
import React from "react";

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