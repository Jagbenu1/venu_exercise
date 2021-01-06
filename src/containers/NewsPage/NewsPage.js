import React, { useState } from 'react';
import Stories from './Stories/Stories';
import './NewsPage.scss';


export default function NewsPage() {
    let stories = null;
    stories = (
        <Stories />
    )
    
    
    return(
        <div className="Stories">
            {stories}
        </div>
    )
};