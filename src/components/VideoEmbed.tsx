
import React from 'react';

interface VideoEmbedProps {
  url: string;
  className?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ url, className = "" }) => {
  // Function to get embed URL based on platform
  const getEmbedUrl = (url: string): string => {
    // Handle YouTube URLs
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      // If already an embed URL, return as is
      if (url.includes("youtube.com/embed/")) return url;
      
      // Extract video ID
      let videoId = "";
      if (url.includes("youtube.com/watch?v=")) {
        videoId = url.split("v=")[1];
        const ampersandPosition = videoId.indexOf("&");
        if (ampersandPosition !== -1) {
          videoId = videoId.substring(0, ampersandPosition);
        }
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1];
      }
      
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle Vimeo URLs
    if (url.includes("vimeo.com")) {
      // If already an embed URL, return as is
      if (url.includes("player.vimeo.com/video/")) return url;
      
      // Extract video ID
      const vimeoId = url.split("vimeo.com/")[1];
      return `https://player.vimeo.com/video/${vimeoId}`;
    }
    
    // Return original URL if not recognized
    return url;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className={`relative w-full pt-[56.25%] ${className}`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-md"
        src={embedUrl}
        title="Video Embed"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
