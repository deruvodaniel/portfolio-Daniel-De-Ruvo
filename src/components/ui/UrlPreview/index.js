import React, { useState, useEffect } from 'react';
import { 
  PreviewContainer, 
  PreviewImage, 
  LoadingSpinner, 
  ErrorFallback 
} from './urlPreview.styles';

const UrlPreview = ({ url, fallbackImage, alt, disablePreview = false, ...props }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(!disablePreview);
  const [hasError, setHasError] = useState(disablePreview);

  useEffect(() => {
    // Si el preview está deshabilitado, usar directamente la imagen de fallback
    if (disablePreview) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    if (!url) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    // Intentar con servicios más confiables en orden de preferencia
    const tryPreviewServices = async () => {
      const services = [
        // Opción 1: Screenshotlayer (demo key, mejor calidad)
        `https://api.screenshotlayer.com/api/capture?access_key=demo&url=${encodeURIComponent(url)}&viewport=1440x900&format=PNG&fullpage=0`,
        
        // Opción 2: htmlcsstoimage.com (proxy version)
        `https://htmlcsstoimage.com/demo_images/image.jpg?url=${encodeURIComponent(url)}`,
        
        // Opción 3: Website Screenshot API alternativa
        `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=400&h=300`,
        
        // Opción 4: thum.io con diferentes parámetros
        `https://image.thum.io/get/crop/400/300/noanimate/png/${url}`,
        
        // Opción 5: mini.s-shot.ru (ruso pero gratuito y funcional)
        `https://mini.s-shot.ru/1024x768/PNG/400/Z100/?${url}`
      ];

      for (let i = 0; i < services.length; i++) {
        const serviceUrl = services[i];
        
        try {
          console.log(`Trying service ${i + 1}:`, serviceUrl);
          
          const img = new Image();
          img.crossOrigin = "anonymous";
          
          const imagePromise = new Promise((resolve, reject) => {
            img.onload = () => {
              // Verificar que la imagen no sea un placeholder genérico
              if (img.naturalWidth > 100 && img.naturalHeight > 100) {
                resolve(serviceUrl);
              } else {
                reject('Image too small, likely a placeholder');
              }
            };
            img.onerror = () => reject('Image failed to load');
            img.src = serviceUrl;
          });

          const result = await Promise.race([
            imagePromise,
            new Promise((_, reject) => setTimeout(() => reject('timeout'), 4000))
          ]);

          console.log(`Success with service ${i + 1}`);
          setPreviewUrl(result);
          setIsLoading(false);
          setHasError(false);
          return;

        } catch (error) {
          console.warn(`Service ${i + 1} failed:`, error);
          continue;
        }
      }

      // Si todos los servicios fallan, usar imagen de fallback
      console.log('All services failed, using fallback image');
      setHasError(true);
      setIsLoading(false);
    };

    // Añadir un delay pequeño para evitar spam a los servicios
    const timeout = setTimeout(tryPreviewServices, 100);
    return () => clearTimeout(timeout);
  }, [url, disablePreview]);

  if (isLoading) {
    return (
      <PreviewContainer {...props}>
        <LoadingSpinner>
          <div className="spinner" />
          <span>Cargando preview...</span>
        </LoadingSpinner>
      </PreviewContainer>
    );
  }

  if (hasError || !previewUrl) {
    return (
      <PreviewContainer {...props}>
        <ErrorFallback>
          {fallbackImage ? (
            <img src={fallbackImage} alt={alt} loading="lazy" decoding="async" />
          ) : (
            <div className="error-message">
              <span>📸</span>
              <p>Preview no disponible</p>
            </div>
          )}
        </ErrorFallback>
      </PreviewContainer>
    );
  }

  return (
    <PreviewContainer {...props}>
      <PreviewImage 
        src={previewUrl} 
        alt={alt}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </PreviewContainer>
  );
};

export default UrlPreview;