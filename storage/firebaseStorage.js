import * as firebase from "firebase";

export const getImageUrl = async imageName => {
    const PRODUCT_IMAGES_DIR = "/images/products/"
    const storage = firebase.storage();
    return await storage.ref(PRODUCT_IMAGES_DIR + imageName).getDownloadURL();
}