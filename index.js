// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cHelpHub AI - Landing Page Loaded', 'color: #14b8a6; font-weight: bold;');
    
    // Demo user set kar do
    if (!localStorage.getItem('demoUser')) {
      localStorage.setItem('demoUser', 'Ayesha Khan');
    }
  });