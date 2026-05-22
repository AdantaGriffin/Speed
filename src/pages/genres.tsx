import styles from './genres.module.scss';
import { useParams, Link } from 'react-router-dom';
import { useApi } from '../components/api/api';

function Genres(){
    const {id, name} = useParams();
    const {stories, categories} = useApi();
    const filtered = stories.filter(x => x.type === id);
    //console.log(stories);
    const cat = categories.filter(x => x.id === id);
    console.log(cat[0].image);

    return(
        <>
            <section className={styles.genres}>
                <div style={{ backgroundImage: `url(${cat[0]?.image})`, backgroundSize: '100% 100%'}} className={styles.genresHero}>
                    
                </div>
                <div className={styles.genresStories}>
                    <ul className={styles.genresList}>
                        {filtered?.map(x => (
                            <li
                            className={styles.story} 
                            key={x.id}>
                                <Link to={`/genres/${x.id}/${x.name}`}>
                                    <img src={x.cover} alt="story cover"/>
                                    <p className={styles.storyTitle}>{x.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Genres;