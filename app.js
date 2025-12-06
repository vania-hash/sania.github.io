// Theme toggle (migrated from inline script in portfolio.html)
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    const root = document.documentElement;
    if(root.hasAttribute('data-light')){
      root.removeAttribute('data-light');
      root.style.setProperty('--bg','#071124');
    } else {
      root.setAttribute('data-light','1');
      root.style.setProperty('--bg','#f7fafc');
    }
  });
});
