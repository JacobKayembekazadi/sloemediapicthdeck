import React from 'react';
import { ImageUploader } from './ImageUploader';
import { ImageGallery } from './ImageGallery';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const handleImageUpload = (_imageUrl: string, imageName: string) => {
    // Images are handled directly by the ImageUploader component
    console.log('Image uploaded:', imageName);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-white/10 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">🛠️ Admin Panel - Image Management</h2>
          <button
            onClick={onClose}
            className="bg-slate-700 hover:bg-slate-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Instructions */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-200 mb-2">📋 How to Add Images to Your Slides</h3>
            <ol className="text-sm text-blue-100 space-y-1 list-decimal list-inside">
              <li>Upload images using the uploader below</li>
              <li>Select an image from the gallery to get its code</li>
              <li>Copy the HTML tag or data URL</li>
              <li>Paste it into your slide content in App.tsx</li>
              <li>The image will appear in your presentation</li>
            </ol>
          </div>

          {/* Image Uploader */}
          <ImageUploader onImageUpload={handleImageUpload} />

          {/* Image Gallery */}
          <ImageGallery />

          {/* Code Examples */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-3">💻 Code Examples</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Basic Image in Slide:</h4>
                <pre className="bg-slate-900 text-slate-300 p-3 rounded text-xs overflow-x-auto">
{`// In your slide content:
<div className="text-center">
  <img 
    src="data:image/jpeg;base64,..." 
    alt="Product showcase" 
    className="w-full max-w-md mx-auto rounded-lg shadow-lg" 
  />
  <p className="text-slate-400 mt-4">Our latest product</p>
</div>`}
                </pre>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Image Grid Layout:</h4>
                <pre className="bg-slate-900 text-slate-300 p-3 rounded text-xs overflow-x-auto">
{`// Multiple images in a grid:
<div className="grid grid-cols-2 gap-4">
  <img src="data:image/..." alt="Before" className="w-full rounded-lg" />
  <img src="data:image/..." alt="After" className="w-full rounded-lg" />
</div>`}
                </pre>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Image with Text Overlay:</h4>
                <pre className="bg-slate-900 text-slate-300 p-3 rounded text-xs overflow-x-auto">
{`// Image with text overlay:
<div className="relative">
  <img src="data:image/..." alt="Background" className="w-full h-64 object-cover rounded-lg" />
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
    <h3 className="text-white text-2xl font-bold">Your Text Here</h3>
  </div>
</div>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-200 mb-2">💡 Pro Tips</h3>
            <ul className="text-sm text-green-100 space-y-1 list-disc list-inside">
              <li>Use appropriate image sizes to keep the presentation fast</li>
              <li>Images are embedded as data URLs (base64) - they'll work offline</li>
              <li>Add descriptive alt text for accessibility</li>
              <li>Use Tailwind classes for responsive sizing: w-full md:w-1/2 lg:w-1/3</li>
              <li>Consider image compression for better performance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
