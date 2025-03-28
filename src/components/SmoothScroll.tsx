'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if the clicked element is an anchor tag with a hash
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');

        if (href) {
          const targetId = href.replace('#', '');
          const element = document.getElementById(targetId);

          if (element) {
            // Scroll smoothly to the target element
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });

            // Update URL hash without jumping
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleLinkClick);

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return null; // This component doesn't render anything
}
