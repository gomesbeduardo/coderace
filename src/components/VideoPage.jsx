import React from 'react';
import VideoPlayer from "./VideoPlayer"

export function VideoPage() {
    return (
        <div className="App">
          <VideoPlayer src="src\assets\images\videos\video.mp4" width="800" height="450" />
        </div>
      );
    }