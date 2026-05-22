import { Outlet } from "react-router-dom";
import Nav from "../nav/nav";
import styles from './root.module.scss';

function Root(){
    return(
        <section className={styles.root}>
            <Nav/>
            <Outlet/>
        </section>
    )
};

export default Root;
