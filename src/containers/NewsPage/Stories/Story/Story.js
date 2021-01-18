import React, { useState, useEffect } from 'react';
import { getStory } from '../../../../shared/apiLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Story.scss';

export default function Story({ storyId, handleLikeOnClick }){
    const [story, setStory] = useState({});

    const getAndSetStoryId = async () => {
        const res = await getStory(storyId);
        setStory(res);
        //console.log(story);
    };


    useEffect(()=>{
        //getStory(storyId).then(data => data && data.url && setStory(data));
        getAndSetStoryId();
    }, []);


    //const changeColour = like ? "red" : "grey";
    //console.log(story);
    

    return story && story.url ? (
        <div className="Story">
            <a href={story.url} target='_blank' rel="noreferrer"><p>{story.title}</p></a>
            <p>{story.id}</p>
            <p>By: {story.by}</p>
            <p>Posted: {new Date(story.time*1000).toString()}</p>
            <button className="likeBtn"
                onClick={() => {
                    handleLikeOnClick(story.id);
                }}    
            >
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </button>
        </div>
    ): null;
}