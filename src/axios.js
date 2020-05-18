import axios from "axios";
const instance = axios.create();
instance.defaults.baseURL = "https://school-bag-96fef.firebaseio.com/";



export default instance;
