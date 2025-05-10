"use client";
import { useEffect, useState } from 'react';

export const useMarkdownIt = () => {
  const [md, setMd] = useState<any>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import('markdown-it').then(markdownIt => {
      const mdInstance = markdownIt.default({
        html: false,
        linkify: true,
        typographer: true
      });
      setMd(mdInstance);
    });
  }, []);

  const renderMarkdown = (text: string): string => {
    if (!md) return text;
    try {
      return md.render(text);
    } catch (error) {
      console.error('Error rendering markdown:', error);
      return text;
    }
  };

  return { renderMarkdown };
};