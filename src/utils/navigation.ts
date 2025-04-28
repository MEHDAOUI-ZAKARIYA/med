import { NavigateFunction } from "react-router-dom";

// Base path for your deployed application
export const BASE_PATH = "/test";

/**
 * Navigate to a path or anchor with proper base path handling
 *
 * @param path The path or anchor to navigate to
 * @param navigate The navigate function from useNavigate()
 */
export const navigateTo = (path: string, navigate: NavigateFunction): void => {
  if (path.startsWith("#")) {
    // Handle in-page anchor navigation
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // Ensure path starts with a slash
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    // Navigate to the path with base path
    navigate(`${BASE_PATH}${normalizedPath}`);
  }
};

/**
 * Create a proper URL with the base path
 *
 * @param path The path to add the base path to
 * @returns The path with the base path
 */
export const getUrl = (path: string): string => {
  if (path.startsWith("http") || path.startsWith("#")) {
    // External URL or anchor, don't modify
    return path;
  }

  // Ensure path starts with a slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
};
