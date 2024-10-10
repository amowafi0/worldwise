import Sidebar from "../componts/Sidebar.jsx";
import styles from "./AppLayout.module.css";
import Map from "../componts/Map.jsx";
import User from "../componts/User.jsx";
function AppLayout() {
    return (
        <div className={styles.app}>
         <Sidebar/>
            <Map/>
            <User/>
        </div>
    )
}

export default AppLayout
