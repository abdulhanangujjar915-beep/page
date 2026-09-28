import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon, RotateCcw, Check, Sparkles } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  currentPhoto: string;
  defaultPhoto: string;
  onClose: () => void;
  onSavePhoto: (photoUrl: string) => void;
  onResetDefault: () => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  currentPhoto,
  defaultPhoto,
  onClose,
  onSavePhoto,
  onResetDefault,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [customUrl, setCustomUrl] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState(currentPhoto);
  const [dragActive, setDragActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    setErrorMsg('');
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('Image size should be less than 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setPreviewPhoto(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleApplyUrl = () => {
    setErrorMsg('');
    if (!customUrl.trim()) {
      setErrorMsg('Please enter a valid image URL.');
      return;
    }
    setPreviewPhoto(customUrl.trim());
  };

  const handleSave = () => {
    onSavePhoto(previewPhoto);
    onClose();
  };

  const handleReset = () => {
    onResetDefault();
    setPreviewPhoto(defaultPhoto);
    setCustomUrl('');
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-semibold text-white">Profile Picture Settings</h3>
            <p className="text-xs text-slate-400 mt-0.5">Apni picture lagayein ya default use karein</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Live Preview */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-800 shrink-0 border-2 border-emerald-500/40">
              <img
                src={previewPhoto}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={() => {
                  setErrorMsg('Could not load image from this URL. Please check the link.');
                }}
              />
            </div>
            <div>
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Live Preview</p>
              <h4 className="text-sm font-medium text-white mt-0.5">Abdul Hanan</h4>
              <p className="text-xs text-slate-400">Web Developer</p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-800/80 rounded-lg">
            <button
              onClick={() => setActiveTab('upload')}
              className={`py-2 px-3 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'upload'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              Upload from Device
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`py-2 px-3 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'url'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Image URL Link
            </button>
          </div>

          {/* Tab 1: Upload from Device */}
          {activeTab === 'upload' && (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
                dragActive
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-500 bg-slate-800/30'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-10 h-10 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-300 mb-2">
                <Upload className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-xs font-medium text-white">Click to select photo or drag & drop</p>
              <p className="text-[11px] text-slate-400 mt-1">PNG, JPG, WebP up to 5MB</p>
            </div>
          )}

          {/* Tab 2: Custom URL */}
          {activeTab === 'url' && (
            <div className="space-y-3">
              <label className="block text-xs font-medium text-slate-300">
                Image Web Link
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="px-3 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors whitespace-nowrap"
                >
                  Preview
                </button>
              </div>
            </div>
          )}

          {errorMsg && (
            <p className="text-xs text-rose-400 leading-tight">{errorMsg}</p>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1.5 py-1 px-2 rounded hover:bg-slate-800"
            >
              <RotateCcw className="w-3 h-3" />
              Reset to Default
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-xs text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-1.5 text-xs font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                Save Picture
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
