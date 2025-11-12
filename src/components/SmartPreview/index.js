import React, { useState, useEffect } from 'react';
import { 
  PreviewContainer, 
  PreviewImage, 
  LoadingSpinner,
  PreviewOverlay 
} from './smartPreview.styles';

const SmartPreview = ({ url, fallbackImage, alt, ...props }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);

  useEffect(() => {
    if (!url) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    // Intentar obtener preview real de la URL
    const generatePreview = async () => {
      try {
        // Usar múltiples servicios más confiables
        const services = [
          // WordPress mshots (muy confiable)
          `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600&h=400`,
          
          // Screenshotlayer con demo key
          `https://api.screenshotlayer.com/api/capture?access_key=demo&url=${encodeURIComponent(url)}&viewport=1440x900&format=PNG&fullpage=0&width=600`,
          
          // Website Screenshot gratis
          `https://image.thum.io/get/width/600/crop/400/noanimate/${url}`,
        ];

        for (const serviceUrl of services) {
          try {
            // Simplemente intentamos cargar la imagen directamente
            const img = new Image();
            img.crossOrigin = "anonymous";
            
            const imagePromise = new Promise((resolve, reject) => {
              img.onload = () => resolve(serviceUrl);
              img.onerror = () => reject('Failed to load');
              img.src = serviceUrl;
            });

            const result = await Promise.race([
              imagePromise,
              new Promise((_, reject) => setTimeout(() => reject('timeout'), 3000))
            ]);

            setPreviewUrl(result);
            setIsLoading(false);
            setHasError(false);
            return;

          } catch (error) {
            continue;
          }
        }

        // Si todo falla, usar imagen original
        setHasError(true);
        setIsLoading(false);

      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    };

    generatePreview();
  }, [url]);

  const handleTogglePreview = () => {
    setShowOriginal(!showOriginal);
  };

  if (isLoading) {
    return (
      <PreviewContainer {...props}>
        <LoadingSpinner>
          <div className="spinner" />
          <span>Generando preview...</span>
        </LoadingSpinner>
      </PreviewContainer>
    );
  }

  return (
    <PreviewContainer {...props}>
      {!hasError && previewUrl && !showOriginal ? (
        <>
          <PreviewImage 
            src={previewUrl} 
            alt={alt}
            loading="lazy"
            onError={() => setHasError(true)}
          />
          <PreviewOverlay>
            <button onClick={handleTogglePreview} title="Ver imagen original">
              📷
            </button>
          </PreviewOverlay>
        </>
      ) : (
        <>
          <PreviewImage 
            src={fallbackImage} 
            alt={alt}
            loading="lazy"
          />
          {!hasError && (
            <PreviewOverlay>
              <button onClick={handleTogglePreview} title="Ver preview del sitio">
                🌐
              </button>
            </PreviewOverlay>
          )}
        </>
      )}
    </PreviewContainer>
  );
};

export default SmartPreview;