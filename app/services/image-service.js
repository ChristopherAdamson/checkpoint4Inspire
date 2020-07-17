import store from "../store.js"


// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor() {
    this.getImage()
  }
  getImage() {
    imgApi.get().then(res => {
      console.log(res.data);
      let bgImg = res.data.large_url
      document.body.style.backgroundImage = bgImg
      store.State.imgUrl = bgImg

    }).catch(err => console.error(err))
  }

}

const imageService = new ImageService();
export default imageService;
