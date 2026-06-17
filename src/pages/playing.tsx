import styles from './playing.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../components/api/api';
import { useEffect } from 'react';

function Playing(){
    const toTop= () => {
        window.scrollTo(0,0);
    };
    const navigate = useNavigate();
    const {stories, setIndex, visibleText, setVisibleText, level, isPlaying, setIsPlaying} = useApi();
    const {name} = useParams();
    //console.log(stories);
    const book = stories.filter(x => x.name === name);
    //console.log(book[0]?.story)
    const words = book[0]?.story?.join(" ").split(" ") || [];
    console.log(words)
    
    useEffect(() => {
    if (!isPlaying || !words.length) return;

    const interval = setInterval(() => {
        setIndex(prev => {
            if (prev >= words.length) {
                clearInterval(interval);
                return prev;
            }

            const nextIndex = (prev + 5);

            setVisibleText(words.slice(prev, nextIndex).join(" "));
            return nextIndex;
        });
    }, level);

    return () => clearInterval(interval);
}, [isPlaying, words]);
    return(
        <>
            <section className={styles.playing}>
                <p className={styles.playingTitle}>{book[0]?.name}</p>
                <div className={styles.playingTop}>

                    <div className={styles.topLeft}>
                        {visibleText ? visibleText : "Press play when ready"}
                    </div>

                </div>

                <div className={styles.playingBot}>
                    <div className={styles.controlsContainer}>
                        <button onClick={() => setIsPlaying(false)}>PAUSE</button> <button onClick={() => setIsPlaying(true)}>PLAY</button><button onClick={() => {setIsPlaying(false), setIndex(0), setVisibleText(""),navigate("/"), toTop}}>END</button>
                    </div>
                </div>

            </section>
        </>
    )
};

export default Playing;