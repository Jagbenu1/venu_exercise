import axios from 'axios';

export const baseurl  = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseurl}topstories.json`;
export const storyUrl = `${baseurl}item/`;

export const getStory = async (storyId) =>{
    const {data} = await axios.get(`${storyUrl + storyId}.json?print=pretty`)
        //console.log(storyId);
        //.then(({data}) => data)
        return data;
}

export const getStoryIds = async () => {
    const {data} = await axios.get(`${topStoriesUrl}?print=pretty&orderBy="$key"&limitToFirst=13`)
        //.then(({ data }) => data);
        return data;
}