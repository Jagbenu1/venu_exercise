import axios from 'axios';

export const baseurl  = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseurl}topstories.json`;
export const storyUrl = `${baseurl}item/`;

export const getStory = async (storyId) =>{
    const {data} = await axios.get(`${storyUrl + storyId}.json?print=pretty`)
        // .then(({data}) => console.log(data))
        // console.log('data', res)
        return data;
}

export const getStoryIds = async () => {
    const {data} = await axios.get(`${topStoriesUrl}?print=pretty&orderBy="$key"&limitToFirst=24`)
        // .then(({ data }) => data);
        return data;
}