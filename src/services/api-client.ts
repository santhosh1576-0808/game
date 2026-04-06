import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bae7ad8753274639a0e673bb640adf17",
  },
});
