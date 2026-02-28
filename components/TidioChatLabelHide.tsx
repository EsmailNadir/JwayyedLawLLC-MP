'use client';

import { useEffect } from 'react';

/**
 * Attempts to hide the Tidio "Chat with us" label when the chat is opened.
 * Note: The Tidio launcher lives inside their iframe (cross-origin), so we
 * cannot modify it from our page. This component is a no-op for now.
 * To hide the label: check Tidio dashboard > Customization, or contact Tidio support.
 */
export default function TidioChatLabelHide() {
  useEffect(() => {
    function onTidioChatApiReady() {
      if (typeof window === 'undefined' || !window.tidioChatApi) return;
      // Tidio label is inside iframe - cannot be modified from our page
    }

    const init = () => {
      if (typeof window === 'undefined') return;
      if (window.tidioChatApi) {
        window.tidioChatApi.on('ready', onTidioChatApiReady);
      } else {
        document.addEventListener('tidioChat-ready', onTidioChatApiReady);
      }
    };

    if (typeof window !== 'undefined') {
      init();
      const t = setTimeout(init, 3000);
      return () => {
        clearTimeout(t);
        document.removeEventListener('tidioChat-ready', onTidioChatApiReady);
      };
    }

    return () => document.removeEventListener('tidioChat-ready', onTidioChatApiReady);
  }, []);

  return null;
}
