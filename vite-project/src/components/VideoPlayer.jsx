import React from 'react';
import styles from './VideoPlayer.module.css'; // Opcional: se você quiser adicionar estilos personalizados

const VideoPlayer = ({ src, width = '100%', height = 'auto', controls = true }) => {
  return (
    <div className={styles.videoContainer}>
      <video 
        src={src}
        width={width}
        height={height}
        controls={controls}
        // autoplay={true}  // Use esta linha para iniciar automaticamente
        // loop={true}      // Use esta linha para loop contínuo
        // muted={true}     // Use esta linha para silenciar o vídeo
        className={styles.video}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;