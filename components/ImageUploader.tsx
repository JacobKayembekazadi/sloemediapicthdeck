import React, { useState, useRef } from 'react';

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string, imageName: string) => void;
  className?: string;
}

interface UploadedImage {
  url: string;
  name: string;
  file: File;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, className = "" }) => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageUrl = e.target?.result as string;
          const newImage: UploadedImage = {
            url: imageUrl,
            name: file.name,
            file: file
          };
          
          setUploadedImages(prev => [...prev, newImage]);
          onImageUpload(imageUrl, file.name);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const copyImageUrl = (imageUrl: string) => {
    navigator.clipboard.writeText(imageUrl);
    // You could add a toast notification here
  };

  return (
    <div className={`bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 ${className}`}>
      <h3 className="text-xl font-bold text-white mb-4">📁 Image Upload Manager</h3>
      
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging 
            ? 'border-sky-400 bg-sky-400/10' 
            : 'border-slate-600 hover:border-slate-500'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="text-4xl mb-4">📸</div>
        <p className="text-slate-300 mb-4">
          Drag and drop images here, or click to browse
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Choose Images
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
          aria-label="Upload images"
        />
      </div>

      {/* Uploaded Images Preview */}
      {uploadedImages.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-white mb-3">Uploaded Images</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uploadedImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-24 object-cover rounded-lg border border-slate-600"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <button
                    onClick={() => copyImageUrl(image.url)}
                    className="bg-sky-500 hover:bg-sky-600 text-white text-xs px-2 py-1 rounded mr-1"
                  >
                    Copy URL
                  </button>
                  <button
                    onClick={() => removeImage(index)}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-xs text-slate-400 mt-1 truncate">{image.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
        <h5 className="text-sm font-semibold text-white mb-2">💡 How to use images in slides:</h5>
        <ul className="text-xs text-slate-400 space-y-1">
          <li>• Upload images using the area above</li>
          <li>• Click "Copy URL" to get the image data URL</li>
          <li>• Add the URL to your slide content using &lt;img src="..." /&gt;</li>
          <li>• Images are stored as data URLs (embedded in the page)</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageUploader;
