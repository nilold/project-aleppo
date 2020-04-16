import * as firebase from "firebase";

export const findImageUrl = async (type, imageName) => {
    /*
        Type must be either "place" or "product"
     */
    const PRODUCT_IMAGES_DIR = `/images/${type}/`
    const storage = firebase.storage();
    return await storage.ref(PRODUCT_IMAGES_DIR + imageName).getDownloadURL();
}