import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../../../shared/apiLink';
import { getStory } from '../../../shared/apiLink';
import Story from './Story/Story';
import './Stories.scss';

export default function Stories () {
    const [storyIds, setStoryIds] = useState([]);
    const [favoriteStory, setFavoriteStory] = useState({})
    const [favorite, setFavorite] = useState(false);
    const [likeValue, setLikeValue] = useState(null);

    const getAndSetStoryIds = async () => {
         const res = await getStoryIds();
         setStoryIds(res);
    }

    const getAndSetFavorite = async () => {
        const res = await getStory(likeValue);
        setFavoriteStory(res);
    }

    const setStoryValue = (storyId) => {
        setLikeValue(storyId);
    }

    useEffect(()=>{
        getAndSetStoryIds();
        getAndSetFavorite();
        //setFavorite(prevFavorite => !prevFavorite)
    }, [likeValue]) 

    const renderNews = storyIds.map((index, storyId) => {
        return <Story key={ index } storyId={ storyId } setStoryValue = { setStoryValue }/> 
    });
    
    return (
        <div> 
                {(favoriteStory) ? (
                    <div className="favorite">
                        <a href={favoriteStory.url} target='_blank' rel="noreferrer"><p>{favoriteStory.title}</p></a>
                        <p>{favoriteStory.id}</p>
                        <p>By: {favoriteStory.by}</p>
                        <p>Posted: {new Date(favoriteStory.time*1000).toString()}</p>
                    </div>
                ) : ""}
                <br/> 
            <div className="Stories">
            { renderNews }
            </div>
        </div> 
    )
}