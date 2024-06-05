import { FC, useRef, ChangeEvent } from "react";
import { ImageUpload } from "../utils/cloudinary/imageUpload";
// import { ImageUploadIcon } from "@/components/parts/ImageUploadIcon"; // You may need to create this component
// import { toast, Toaster } from "sonner";
 // You may need to create this function



interface CustomImageFileInputProps {
  onChange: (file: File | null | string) => void;
}

export const CustomImageFileInput: FC<CustomImageFileInputProps> = ({
  onChange,
}) => {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;



    try {
      const imageUrl = await ImageUpload(file);

      if (!imageUrl) {
        throw new Error("Image upload failed");
      }

      onChange(imageUrl);
    } catch (error) {
      // toast.error("Image upload failed. Please check the console for details.");
      console.error("Image upload error:", error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div>
   
      <div className="flex justify-center">
 
        {/* Use your own component for the image upload icon */}
      </div>
      <p className="text-sm text-gray-400 my-2">
        Click the button below to select an image
      </p>
      <button
        type="button"
        className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Upload Image
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*" 
        className="hidden"
      />
      <p className="text-xs leading-5 p-1 text-gray-400">Image up to 10MB</p>
    </div>
  );
};
