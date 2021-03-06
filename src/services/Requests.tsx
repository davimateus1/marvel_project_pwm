import axios from "axios";
import md5 from "md5";

const publicKey = "3904dc663bbe2ed676a9555afd4156d6";
const privateKey = "016f35b135c9ebf77e744d06947a2ae0a5fc629e";

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const route1 = `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`;
export const route2 = `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`;
export const route3 = `http://gateway.marvel.com/v1/public/series?ts=${time}&apikey=${publicKey}&hash=${hash}`;
export const route4 = `http://gateway.marvel.com/v1/public/events?ts=${time}&apikey=${publicKey}&hash=${hash}`;
export const route5 = `http://gateway.marvel.com/v1/public/creators?ts=${time}&apikey=${publicKey}&hash=${hash}`;
export const route6 = `http://gateway.marvel.com/v1/public/stories?ts=${time}&apikey=${publicKey}&hash=${hash}`;

export const CharactersRequest = async () => {
  try {
    const response = await axios.get(route1);
    return response.data.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const ComicsRequest = async () => {
  try {
    const response = await axios.get(route2);
    return response.data.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const SeriesRequest = async () => {
  try {
    const response = await axios.get(route3);
    return response.data.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const EventsRequest = async () => {
  try {
    const response = await axios.get(route4);
    return response.data.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const CreatorsRequest = async () => {
  try {
    const response = await axios.get(route5);
    return response.data.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const StoriesRequest = async () => {
  try {
    const response = await axios.get(route6);
    return response.data.data.results;
  } catch (err) {
    console.log(err);
  }
};
