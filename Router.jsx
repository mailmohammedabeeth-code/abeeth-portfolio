import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext({
  path: window.location.pathname,
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname);

  // Sync state with browser history (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    const handleCustomNavigate = (e) => {
      if (e.detail) {
        navigate(e.detail);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('app:navigate', handleCustomNavigate);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('app:navigate', handleCustomNavigate);
    };
  }, []);

  const navigate = useCallback((to, { replace = false } = {}) => {
    // If the path contains a hash like "/#portals", handle smooth scrolling
    const [targetPath, hash] = to.split('#');
    const finalPath = targetPath || '/';

    if (replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }

    setPath(finalPath);

    if (hash) {
      const scrollToElement = () => {
        const el = document.getElementById(hash) || 
          (hash === 'projects' || hash === 'featured-projects' 
            ? document.getElementById('featured-projects') || document.getElementById('projects') 
            : null);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        setTimeout(scrollToElement, 60);
        setTimeout(scrollToElement, 150);
        setTimeout(scrollToElement, 300);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    // Let default browser behavior take over for external links or modified clicks
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0 || to.startsWith('http')) {
      return;
    }
    e.preventDefault();
    navigate(to);
    if (onClick) onClick(e);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}

