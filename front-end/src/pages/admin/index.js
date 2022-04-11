import AdminNavbar from "./components/adminNavbar";
import LeftSideBar from "./components/leftSidebar/leftSidebar";
import { Styles } from './style';

export default function Admin({children}){
    return (
        <Styles>
            <div className="admin-container">
                <div className="side-bar">
                    <LeftSideBar children={children}/>
                </div>
                <div className="right-panel">
                    <AdminNavbar />
                    {children}
                </div>
            </div>
        </Styles>
    )

}