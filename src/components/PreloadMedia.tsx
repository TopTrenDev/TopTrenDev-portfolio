/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: PreloadMedia.tsx
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
*/

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

