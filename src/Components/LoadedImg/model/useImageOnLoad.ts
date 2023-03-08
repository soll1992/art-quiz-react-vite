import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function useImageOnLoad() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const { quiz } = useParams();

  useEffect(() => {
    if (isLoaded) {
      setIsLoaded(false);
    }
  }, [quiz]);

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    if (imageRef.current?.complete) setIsLoaded(true);
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [isLoaded]);

  return {
    imageRef,
    isLoaded,
  };
}
