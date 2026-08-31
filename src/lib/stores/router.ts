import { writable } from 'svelte/store';

export interface Route {
  path: string;
  params?: Record<string, string>;
}

function getCurrentRoute(): Route {
  const path = window.location.pathname;
  
  // Parse member detail route
  const memberMatch = path.match(/^\/members\/(.+)$/);
  if (memberMatch) {
    return {
      path: '/members/:id',
      params: { id: memberMatch[1] }
    };
  }
  
  return { path };
}

export const currentRoute = writable<Route>(getCurrentRoute());

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  currentRoute.set(getCurrentRoute());
}

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  currentRoute.set(getCurrentRoute());
});