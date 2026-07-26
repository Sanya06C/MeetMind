import React, { useState, useCallback } from 'react';
import { Upload } from 'lucide-react';

const UploadCard = ({ onUpload, accept = 'audio/*,video/*', maxSize = 100 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.size <= maxSize * 1024 * 1024) {
        setFileName(file.name);
        if (onUpload) onUpload(file);
      }
    }
  }, [maxSize, onUpload]);

  const handleFileSelect = useCallback((e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.size <= maxSize * 1024 * 1024) {
        setFileName(file.name);
        if (onUpload) onUpload(file);
      }
    }
  }, [maxSize, onUpload]);

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-16 w-full max-w-4xl">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-2xl p-16 text-center transition-all duration-200
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
        `}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
            <Upload className="w-12 h-12 text-gray-500" />
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-700 font-semibold text-2xl">
              {fileName ? fileName : 'Drop your meeting file here'}
            </p>
            <p className="text-gray-400 text-lg">
              or click to browse
            </p>
          </div>

          <input
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          
          <label
            htmlFor="file-upload"
            className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg cursor-pointer hover:bg-blue-700 transition-colors duration-200"
          >
            Upload Meeting
          </label>

          <p className="text-gray-400 text-sm">
            Max file size: {maxSize}MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
