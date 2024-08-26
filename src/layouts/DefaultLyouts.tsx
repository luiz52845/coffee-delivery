import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function DefaultLyouts() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>

    )
}