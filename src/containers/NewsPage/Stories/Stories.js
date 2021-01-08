import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../../../shared/apiLink';
//import { getStory } from '../../../shared/apiLink'; 
import Story from './Story/Story';



export default function Stories () {
    const [storyIds, setStoryIds] = useState([]);
    const [likeValue, setLikeValue] = useState(null);

    const getAndSetStoryIds = async () => {
         // getStoryIds().then(data => setStoryIds(data));
         const res = await getStoryIds();
         setStoryIds(res);
         console.log('!!!!!!', res);
    }

    
    const setStoryValue = (storyId) => {
        //setLike(!like);
        setLikeValue(storyId);
        console.log(storyId);
    }

    useEffect(()=>{
        getAndSetStoryIds();
    }, []) 


    const renderNews = storyIds.map((index, storyId) => {
        return <Story key={ index } storyId={storyId} setStoryValue = {setStoryValue}/> 
    });

    //https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
    return (
        <div className='Stories'>   
                { renderNews }
        </div> 
    )
}