"use client";
import React, { useRef } from "react";
import classes from "./image-picker.module.css";

type ImagePickerProps = { label: string; name: string };

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const imageRef = useRef<HTMLInputElement>(null);

  const handlePickImage = () => {
    imageRef.current?.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
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
