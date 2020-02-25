import { registerApplication, start } from 'single-spa'
registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => {},
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);
start();