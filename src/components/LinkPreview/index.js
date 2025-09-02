import React, { useEffect, useMemo, useRef, useState } from 'react';
import { PreviewCard, PreviewImage, PreviewInfo, PreviewTitle, PreviewDomain } from './linkPreview.styles';
import { Ring } from '@uiball/loaders';

const getDomain = (url) => {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch (_) {
    return '';
  }
};

const buildMicrolinkUrl = (url) => {
  const params = new URLSearchParams({ url, screenshot: 'true', meta: 'false' });
  return `https://api.microlink.io/?${params.toString()}`;
};

const LinkPreview = ({ url, title, fallbackImage }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  const domain = useMemo(() => getDomain(url), [url]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !url || error || imgUrl) return;
    let cancelled = false;
    const fetchPreview = async () => {
      try {
        setLoading(true);
        const res = await fetch(buildMicrolinkUrl(url));
        if (!res.ok) throw new Error('microlink-failed');
        const data = await res.json();
        const src = data?.data?.screenshot?.url || data?.data?.image?.url || null;
        if (!cancelled) setImgUrl(src);
      } catch (e) {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchPreview();
    return () => { cancelled = true; };
  }, [inView, url, imgUrl, error]);

  const source = imgUrl || fallbackImage || null;

  return (
    <PreviewCard ref={ref} href={url} target="_blank" rel="noopener noreferrer" aria-label={title || domain}>
      {source ? (
        <PreviewImage src={source} alt={title || domain} loading="lazy" decoding="async" />
      ) : (
        <div className="loader" aria-hidden>
          {loading && <Ring size={22} lineWeight={5} speed={2} color="var(--colorSecondary)" />}
        </div>
      )}
      <PreviewInfo>
        <PreviewTitle title={title}>{title}</PreviewTitle>
        <PreviewDomain>{domain}</PreviewDomain>
      </PreviewInfo>
    </PreviewCard>
  );
};

export default LinkPreview;
