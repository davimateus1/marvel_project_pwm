import axios from "axios";
import md5 from "md5";

const publicKey = "3904dc663bbe2ed676a9555afd4156d6";
const privateKey = "016f35b135c9ebf77e744d06947a2ae0a5fc629e";

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const CharactersRequest = async () => {
  try {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
    );
    return response.data.data.results;
  } catch (err) {
    console.log(err);
  }
};
