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

                    <div className={styles.topRight}>
                        {/*<div className={styles.controls}>
                            <input name="slowest" value="slowest" type="checkbox"/>
                            <label htmlFor="slowest">slowest</label>

                            <input name="slow" value="slow" type="checkbox"/>
                            <label htmlFor="slow">slow</label>

                            <input name="medium" value="medium" type="checkbox"/>
                            <label htmlFor="medium">medium</label>

                            <input name="fast" value="fast" type="checkbox"/>
                            <label htmlFor="fast">fast</label>
                        </div>
                        <div className={styles.controls}>
                            <input name="22" value="22px" type="checkbox"/>
                            <label htmlFor="22">default (22px)</label>

                            <input name="24" value="24" type="checkbox"/>
                            <label htmlFor="24">24 px</label>

                            <input name="26" value="26" type="checkbox"/>
                            <label htmlFor="26">26 px</label>

                            <input name="28" value="28" type="checkbox"/>
                            <label htmlFor="28">28 px</label>
                        </div>
                        <div className={styles.controls}>
                            <input name="light" value="light" type="checkbox"/>
                            <label htmlFor="light">light</label>

                            <input name="dark" value="dark" type="checkbox"/>
                            <label htmlFor="dark">dark</label>
                        </div>*/}
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