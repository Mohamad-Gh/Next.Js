"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

type ImagePickerProps = { label: string; name: string };

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const imageRef = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const handlePickImage = () => {
    imageRef.current?.click();
  };

  const handleImageChange = () => {
    const file = imageRef.current?.files?.[0] as File | null;

    if (!file) return null;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event?.target?.files?.[0] as File | null;

  //   if (!file) return null;
  //   const fileReader = new FileReader();

  //   fileReader.onload = () => {
  //     setPickedImage(fileReader.result as string);
  //   };

  //   fileReader.readAsDataURL(file);
  // };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image picked yet!</p>
          ) : (
            <Image src={pickedImage} alt="image picked by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
