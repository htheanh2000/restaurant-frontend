import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Button from "../button";

interface IProps {
  onChange: (data: any) => void;
}

const UploadAndDisplayImage = forwardRef(({ onChange }:  IProps, ref) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onRemoveFile = () => {
    setSelectedImage(null);
    onChange("");
  };
  const onSelectFile = async (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    const convertedFile = (await convertToBase64(file)) as string;
    console.log("convertedFile", typeof convertedFile);
    onChange(file);

    // Request will be sent from here in the future
  };
  const convertToBase64 = (file: Blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };
  useImperativeHandle(ref, () => ({
    remove: () => onRemoveFile(),
  }));

  return (
    <div className="mt-8">
      {selectedImage ? (
        <div>
          <img
            onClick={() => inputRef.current?.click()}
            className="cursor-pointer w-full mx-auto"
            alt="not found"
            src={URL.createObjectURL(selectedImage)}
          />
          <Button className="my-4" onClick={onRemoveFile}>
            Remove
          </Button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className="flex flex-col items-center rounded-lg border-2 cursor-pointer
            border-gray border-dashed justify-center py-10 px-3"
        >
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 12.9999C11.1989 12.9999 11.3897 12.9209 11.5303 12.7802C11.671 12.6396 11.75 12.4488 11.75 12.2499V3.56038L14.969 6.78088C15.0387 6.85061 15.1215 6.90592 15.2126 6.94366C15.3037 6.9814 15.4014 7.00082 15.5 7.00082C15.5986 7.00082 15.6963 6.9814 15.7874 6.94366C15.8785 6.90592 15.9613 6.85061 16.031 6.78088C16.1007 6.71114 16.156 6.62836 16.1938 6.53725C16.2315 6.44614 16.2509 6.34849 16.2509 6.24988C16.2509 6.15126 16.2315 6.05361 16.1938 5.9625C16.156 5.87139 16.1007 5.78861 16.031 5.71888L11.531 1.21888C11.4613 1.14903 11.3786 1.09362 11.2874 1.05581C11.1963 1.018 11.0987 0.998535 11 0.998535C10.9013 0.998535 10.8037 1.018 10.7125 1.05581C10.6214 1.09362 10.5387 1.14903 10.469 1.21888L5.969 5.71888C5.82817 5.85971 5.74905 6.05071 5.74905 6.24988C5.74905 6.44904 5.82817 6.64005 5.969 6.78088C6.10983 6.92171 6.30084 7.00082 6.5 7.00082C6.69916 7.00082 6.89017 6.92171 7.031 6.78088L10.25 3.56038V12.2499C10.25 12.4488 10.329 12.6396 10.4697 12.7802C10.6103 12.9209 10.8011 12.9999 11 12.9999ZM0.5 16.7499C0.5 16.551 0.579018 16.3602 0.71967 16.2195C0.860322 16.0789 1.05109 15.9999 1.25 15.9999H20.75C20.9489 15.9999 21.1397 16.0789 21.2803 16.2195C21.421 16.3602 21.5 16.551 21.5 16.7499C21.5 16.9488 21.421 17.1396 21.2803 17.2802C21.1397 17.4209 20.9489 17.4999 20.75 17.4999H1.25C1.05109 17.4999 0.860322 17.4209 0.71967 17.2802C0.579018 17.1396 0.5 16.9488 0.5 16.7499Z"
              fill="black"
            />
          </svg>
          <p className="mb-2 pt-2 base-text__light text-xs text-center">
            <span className="">Drag and drop images here</span>
            <br />
            or <span className="text-blue-500 underline">upload</span> from your
            computer
          </p>
        </div>
      )}

      <input
        className="hidden"
        ref={inputRef}
        type="file"
        name="myImage"
        onChange={onSelectFile}
      />
    </div>
  );
});

UploadAndDisplayImage.displayName = 'UploadAndDisplayImage'

export default UploadAndDisplayImage;
