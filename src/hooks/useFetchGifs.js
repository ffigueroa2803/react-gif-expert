import { useEffect, useState } from "react";
import { getGifs } from "./../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category) => {
    const newdata = await getGifs(category);
    setImages(newdata);
  };

  useEffect(() => {
    getImages(category);
    setIsLoading(false);
  }, []);

  return {
    images,
    isLoading,
  };
};
