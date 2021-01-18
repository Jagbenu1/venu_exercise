import React, { useState, useEffect } from 'react';
import { getStory } from '../../../../shared/apiLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Story.scss';

export default function Story({ storyId, setStoryValue, isActive, toggleIsActive }){
    const [story, setStory] = useState({});

    const getAndSetStoryId = async () => {
        const res = await getStory(storyId);
        setStory(res);
        //console.log(story);
    };

    const toggleLike = (togId) => {
        toggleIsActive();
        const activeQuery = document.querySelectorAll('.Story .heart-icon');
        // console.log('ACTIVE',active);
        
        // remove the heart icon from all the previously selected items
        for (let i = 0; i < activeQuery.length; i++) {
            if (activeQuery[i].classList.contains('active')) {
                activeQuery[i].classList.remove('active');
            }
        }
        
        activeQuery[storyId - 1].classList.add('active');
         
        setStoryValue(togId);
        
    }

    useEffect(()=>{
        //getStory(storyId).then(data => data && data.url && setStory(data));
        getAndSetStoryId();
    }, []);

    useEffect(()=>{
        console.log('!!isActive!!', isActive);
    }, [isActive]);

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
                    toggleLike(story.id);
                    //console.log(isActive);
                }}    
            >
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </button>
        </div>
    ): null;
}