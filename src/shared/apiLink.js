import axios from 'axios';

export const baseurl  = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseurl}topstories.json`;
export const storyUrl = `${baseurl}item/`;

export const getStory = async (storyId) =>{
    const res = await axios.get(`${storyUrl + storyId}.json?print=pretty`)
        .then(({data}) => data)
        return res;
}

export const getStoryIds = async () => {
    const res = await axios.get(`${topStoriesUrl}?print=pretty&orderBy="$key"&limitToFirst=24`)
        .then(({ data }) => data);
        return res;
}