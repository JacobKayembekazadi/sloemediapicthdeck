import React, { useState } from 'react';

interface ImageData {
  url: string;
  name: string;
  dateAdded: Date;
}

interface ImageGalleryProps {
  className?: string;
  onImageSelect?: (imageUrl: string) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ className = "", onImageSelect }) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    if (selectedImage === images[index]?.url) {
      setSelectedImage(null);
    }
  };

  const selectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    onImageSelect?.(imageUrl);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const generateImageTag = (imageUrl: string, imageName: string) => {
    const altText = imageName.split('.')[0];
    return `<img src="${imageUrl}" alt="${altText}" className="w-full h-auto rounded-lg" />`;
  };

  return (
    <div className={`bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 ${className}`}>
      <h3 className="text-xl font-bold text-white mb-4">🖼️ Image Gallery</h3>
      
      {images.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🎨</div>
          <p className="text-slate-400">No images uploaded yet. Use the Image Uploader to add some!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer border-2 rounded-lg overflow-hidden transition-all ${
                  selectedImage === image.url 
                    ? 'border-sky-400 ring-2 ring-sky-400/50' 
                    : 'border-transparent hover:border-slate-500'
                }`}
                onClick={() => selectImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(index);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-xs text-slate-400 p-1 truncate">{image.name}</p>
              </div>
            ))}
          </div>

          {/* Selected Image Details */}
          {selectedImage && (
            <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <h4 className="text-sm font-semibold text-white mb-3">Selected Image</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-32 object-cover rounded-lg border border-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Data URL:</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={selectedImage}
                        readOnly
                        className="flex-1 bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600"
                        aria-label="Image data URL"
                      />
                      <button
                        onClick={() => copyToClipboard(selectedImage)}
                        className="bg-sky-500 hover:bg-sky-600 text-white text-xs px-3 py-1 rounded"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">HTML Tag:</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={generateImageTag(selectedImage, images.find(img => img.url === selectedImage)?.name || 'image')}
                        readOnly
                        className="flex-1 bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600"
                        aria-label="Generated HTML tag"
                      />
                      <button
                        onClick={() => copyToClipboard(generateImageTag(selectedImage, images.find(img => img.url === selectedImage)?.name || 'image'))}
                        className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
