import styles from "./home.module.scss";
import { useApi } from "../api/api";
import { Link } from "react-router-dom";

function Home(){
    const {categories, stories} = useApi();
    const trending = stories.filter(x => x.trending === true);
    const toTop= () => {
        window.scrollTo(0,0);
    };
    console.log(categories);
    return(
        <>
            <section className={styles.home}>

                <div className={styles.homeInput}>
                    <input type="text" className={styles.inputText} placeholder="Search Title, Genre"/>
                    <input type="submit" className={styles.inputSubmit}/>
                </div>

                <div className={styles.homeHero}>
                    <h2>Read stories at the speed that suits you.</h2>
                    <p>Choose your story choose your speed</p>
                    <button>Start Reading</button>
                </div>

                <div className={styles.homeGenres}>
                    <Link className={styles.viewAll} to="genres">view all</Link>
                    <ul className={styles.genresList}>
                        {categories?.map(x => (
                            <li 
                            style={{backgroundImage:`url(${x.image})`, 
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"}}
                            className={styles.genres}
                            key={x.id}>
                                <Link 
                                onClick={toTop}
                                to={`/genres/${x.id}`}>
                                {x.category}
                                </Link>
                            </li>
                        ))}
                        {/*<li className={styles.genres}>1</li>
                        <li className={styles.genres}>1</li>
                        <li className={styles.genres}>1</li>
                        <li className={styles.genres}>1</li>
                        <li className={styles.genres}>1</li>
                        <li className={styles.genres}>1</li>*/}
                    </ul>
                </div>

                <div className={styles.homeTrending}>
                    <Link className={styles.viewAll} to="null">view all</Link>
                    <ul className={styles.trendingList}>
                        {trending.map(x => (
                            <li
                            style={{backgroundImage:`url(${x.cover})`, 
                            backgroundSize: "80% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"}}
                            key={x.id}
                            onClick={toTop}
                            className={styles.trend} >
                                <Link to={`/genres/${x.id}/${x.name}`}>{x.name}</Link>
                            </li>
                        ))}
                        {/*<li className={styles.trend}>1</li>
                        <li className={styles.trend}>1</li>
                        <li className={styles.trend}>1</li>
                        <li className={styles.trend}>1</li>
                        <li className={styles.trend}>1</li>
                        <li className={styles.trend}>1</li>*/}
                    </ul>
                </div>

            </section>
        </>
    )
};

export default Home;