import React, { useState, useEffect } from 'react';
import { getStory } from '../../../../shared/apiLink';
import './Story.scss';

export default function Story({ storyId }){
    const [story, setStory] = useState({});

    const getAndSetStoryId = async () => {
        const res = await getStory(storyId);
        setStory(res);
    };

    useEffect(()=>{
        //getStory(storyId).then(data => data && data.url && setStory(data));
        getAndSetStoryId();
    }, []);

    return story && story.url ? (
        <div className="Story">
            <a href={story.url}><p>{story.title}</p></a>
            <p>By: {story.by}</p>
            <p>Posted: {story.time}</p>
        </div>
    ): null;
}