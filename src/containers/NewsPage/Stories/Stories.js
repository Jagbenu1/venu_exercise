import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../../../shared/apiLink';
import Story from './Story/Story';
//import Pagination from 'react-js-pagination';
//require("bootstrap/scss/bootstrap.scss");



export default function Stories () {
    const [storyIds, setStoryIds] = useState([]);
    // const [example, setExample] = useState([1,2,3,4,5,6,8,9,10])
    //const [activePage, setActivePage] = useState(1);
    //const newsPerPage = 3;

    useEffect(()=>{
        getStoryIds().then(data => setStoryIds(data));
        console.log(storyIds);
    }, []) 

    //logic for displaying the current news
    // const indexOfLastNews = activePage * newsPerPage;
    // const indexOfFirstNews = indexOfLastNews - newsPerPage;
    // const currentNews = example.slice(indexOfFirstNews, indexOfLastNews); 
    //console.log(storyIds);

    
    
    // const handlePageChange = ( pageNumber ) => {
    //     console.log(`active page is ${ pageNumber }`);
    //     setActivePage( pageNumber );
    //     //console.log(activePage);
    // };

    

    const renderNews = storyIds.map((storyId, index) => {
        return <Story key={ index } storyId={storyId}/>
        
    });

      


    //https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
    return (
        <div className='Stories'>   
                { renderNews }
                {/* <Pagination
                    activePage = { activePage }
                    itemsCountPerPage={ 2 }
                    totalItemsCount={ example.length }
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                /> */}
        </div> 
    )
}