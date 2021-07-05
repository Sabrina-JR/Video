import axios from "axios";

const KEY = "AIzaSyDfZq0n_q6dNgDlpgK3miSLn8pw1K1pGDM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
