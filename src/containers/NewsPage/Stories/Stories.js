import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../../../shared/apiLink';
import { getStory } from '../../../shared/apiLink';
import Story from './Story/Story';
import './Stories.scss';

export default function Stories() {
    const [storyIds, setStoryIds] = useState([]);
    const [favoriteStory, setFavoriteStory] = useState({})
    const [favorite, setFavorite] = useState(false);

    const [prevLikedItem, setPrevLikedItem] = useState(null);
    const [likedItem, setLikedItem] = useState(null);

    const getAndSetStoryIds = async () => {
        const res = await getStoryIds();
        setStoryIds(res);
    }

    const getAndSetFavorite = async () => {
        const res = await getStory(likedItem);
        setFavoriteStory(res);
    }

    const setStoryValue = (storyId = null) => {
        // set and keep track of the previously selected Item, and update the current/likedItem
        setPrevLikedItem(likedItem);
        setLikedItem(storyId);
    }

    const handleLikeOnClick = (storyId) => {

        setStoryValue(storyId);
        // if current state is equal to the previous state. param should be null, else it should return the story id
    }

    useEffect(() => {
        const activeQuery = document.querySelectorAll('.Story .heart-icon');

        if (likedItem && activeQuery) {
            // This removes the previous heart icon if it exists
            if (prevLikedItem && activeQuery[prevLikedItem - 1].classList.contains('active')) {
                activeQuery[prevLikedItem - 1].classList.remove('active');
            }
            activeQuery[likedItem - 1].classList.add('active');
        }

        console.log('likedItem', likedItem, 'prevLikedItem', prevLikedItem);

        // if current likedItem is equal to the previous likedItem, Remove Heart icon and unset the current listItem 
        if (likedItem === prevLikedItem) {
            if (prevLikedItem && activeQuery[prevLikedItem - 1].classList.contains('active')) {
                activeQuery[prevLikedItem - 1].classList.remove('active');
            }
            setStoryValue();
        }
    }, [likedItem, prevLikedItem]);

    useEffect(() => {
        getAndSetStoryIds();
        getAndSetFavorite();
        //setFavorite(prevFavorite => !prevFavorite)
        // console.log('isLiked', likedItem);
    }, [likedItem]);

    const renderNews = storyIds.map((index, storyId) => {
        return <Story
            key={index}
            storyId={storyId}
            setStoryValue={setStoryValue}
            handleLikeOnClick={handleLikeOnClick}
        />
    });

    return (
        <div>
            {(favoriteStory) ? (
                <div className="favorite">
                    <a href={favoriteStory.url} target='_blank' rel="noreferrer"><p>{favoriteStory.title}</p></a>
                    <p>{favoriteStory.id}</p>
                    <p>By: {favoriteStory.by}</p>
                    <p>Posted: {new Date(favoriteStory.time * 1000).toString()}</p>
                </div>
            ) : ""}
            <br />
            <div className="Stories">
                {renderNews}
            </div>
        </div>
    )
}