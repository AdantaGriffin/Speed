import styles from './story.module.scss';
import { useParams, Link } from 'react-router-dom';
import { useApi } from '../components/api/api';

function Story(){
    const {stories, setLevel} = useApi();
    const {id, name} = useParams();
    //console.log(id, name)
    //console.log(stories)
    const story = stories.filter(x => x.name === name);
    //console.log(story)
    console.log(story[0]?.id)
    return(
        <>
            <section className={styles.story}>

                <div className={styles.top}>

                    <div className={styles.storyDetails}>

                        <div className={styles.image}>
                            <img src={story[0]?.cover} className={styles.coverImage} alt="cover image"/>
                        </div>

                        <div className={styles.details}>

                            <div  className={styles.title}>{story[0]?.name}</div>

                            <div className={styles.quickDetails}>
                                <p>{story[0]?.type}</p>
                                <p>10 min read</p>
                                <p>rating</p>
                            </div>

                            <p className={styles.description}>{story[0]?.brief}</p>

                            <div className={styles.about}>
                                <p>word count: {story[0]?.wordct}</p>
                                <p>time: 5 min</p>
                                <p>language: {story[0]?.language}</p>
                                <p>release: May 2026</p>
                            </div>

                            <div className={styles.storyLove}>list of quick description tags</div>

                        </div>

                    </div>

                    <div className={styles.buttons}>
                        <Link to={`/genres/${story[0]?.id}/${story[0]?.name}/playing`} className={styles.readNow}>Read Now</Link>
                        <Link to="null" className={styles.addToLibrary}>Add to Library</Link>
                    </div>

                    <div className={styles.levels}>
                        <button onClick={() => setLevel(3500)}>🏎️</button><button onClick={() => setLevel(2500)}>🏎️🏎️</button><button onClick={() => setLevel(2000)}>🏎️🏎️🏎️</button>
                    </div>

                </div>
            </section>
        </>
    )
};

export default Story;