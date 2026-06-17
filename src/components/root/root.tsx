import { Outlet } from "react-router-dom";
import styles from './root.module.scss';

function Root(){
    return(
        <section className={styles.root}>
            
            <Outlet/>
        </section>
    )
};

export default Root;
