import { listAll, getDownloadURL } from "firebase/storage";

// storageImagesRef: a reference to images from firebase storage

export default function getImages(storageImagesRef) {
  const imgURLs = [];

  listAll(storageImagesRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        imgURLs.push(url);
      });
    });
  });

  console.log(imgURLs);

  return imgURLs;
}
