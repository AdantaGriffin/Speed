import styles from './nav.module.scss';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <>
            <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src="/images/readDark.png" width="100%" height="100%" alt="home logo"/>
                    </div>

                    <ul className={styles.homeList}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="">Library</NavLink></li>
                        <li><NavLink to="">Bookmarks</NavLink></li>
                        <li><NavLink to="">History</NavLink></li>
                        <li><NavLink to="">Profile</NavLink></li>
                    </ul>

                    <ul className={styles.discoverList}>
                        <li><NavLink to="">Genres</NavLink></li>
                        <li><NavLink to="">Top Rated</NavLink></li>
                        <li><NavLink to="">New Releases</NavLink></li>
                    </ul>
                    <ul className={styles.settingsList}>
                        <li><NavLink to="">Preferences</NavLink></li>
                        <li><NavLink to="">Appeareance</NavLink></li>
                        <li><NavLink to="">Help & Support</NavLink></li>
                    </ul>
                    <div className={styles.premium}>
                        <h4>Go Premium</h4>
                        <p className={styles.premiumP}>Unlock unlimited stories, advanced features and ad free reading.</p>
                        <button>Try Premium</button>
                    </div>
            </nav>
        </>
    )
};

export default Nav;