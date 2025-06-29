import { useState } from "react";
import Loader from "./Loader";

interface PreloadMediaProps {
  children: any;
  images: string[];
}

const PreloadMedia = ({ images, children }: PreloadMediaProps) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  const _imageElements = images.map((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = onLoad;
    return img;
  });

  return loaded ? children : <Loader />;
};

export default PreloadMedia;

