import React from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from "./PageHeader";

export function Layout() {
    return (
        <>
        <PageHeader />
        <Outlet />
        </>
    )
}