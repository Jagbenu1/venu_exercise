import React, { useState, useEffect } from 'react';
import { getStory } from '../../../../shared/apiLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Story.scss';

export default function Story({ storyId, setStoryValue }){
    const [story, setStory] = useState({});
    const [isActive, setIsActive] = useState(true);

    const getAndSetStoryId = async () => {
        const res = await getStory(storyId);
        setStory(res);
        //console.log(story);
    };

    const toggleLike = (togId) => {
        const activeQuery = document.querySelectorAll('.Story .heart-icon');
        // console.log('ACTIVE',active);
        for (let i = 0; i < activeQuery.length; i++) {
            if (activeQuery[i].classList.contains('active')) {
                activeQuery[i].classList.remove('active');
            }
          }

          if(isActive){
            activeQuery[storyId - 1].classList.add('active');
          }else{
            activeQuery[storyId - 1].classList.remove('active'); 
          }
         

          setStoryValue(togId);
        // if(active && like){
        //     active.classList.add('active');
        //     console.log(active.classList);
        //     setStoryValue(togId);
        // }else{
        //     active.classList.remove('active');
        // }
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
            <a href={story.url} target='_blank' rel="noreferrer"><p>{story.title}</p></a>
            <p>{story.id}</p>
            <p>By: {story.by}</p>
            <p>Posted: {new Date(story.time*1000).toString()}</p>
            <button className="likeBtn"
                onClick={() => {
                    setIsActive(prevIsActive => !prevIsActive);
                    toggleLike(story.id);
                    //console.log(isActive);
                }}    
            >
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </button>
        </div>
    ): null;
}