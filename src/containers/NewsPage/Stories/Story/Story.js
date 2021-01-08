import React, { useState, useEffect } from 'react';
import { getStory } from '../../../../shared/apiLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Story.scss';

export default function Story({ storyId, setStoryValue }){
    const [story, setStory] = useState({});
    const [like, setLike] = useState(true);

    const getAndSetStoryId = async () => {
        const res = await getStory(storyId);
        setStory(res);
        //console.log(story);
    };

    const toggleLike = (togId) => {
        const active = document.querySelectorAll('.Story .heart-icon');
        if(active && like){
            active.classList.add('active');
            console.log(active.classList);
            setStoryValue(togId);
        }else{
            active.classList.remove('active');
        }
        //console.log(active);
        
    }

    useEffect(()=>{
        //getStory(storyId).then(data => data && data.url && setStory(data));
        getAndSetStoryId();
    }, []);

    //const changeColour = like ? "red" : "grey";
    //console.log(story);
    

    return story && story.url ? (
        <div className="Story">
            <a href={story.url}><p>{story.title}</p></a>
            <p>{story.id}</p>
            <p>By: {story.by}</p>
            <p>Posted: {story.time}</p>
            <button className="likeBtn"
                onClick={() => {
                    toggleLike(story.id);
                    setLike(!like);
                }}    
            >
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </button>
        </div>
    ): null;
}