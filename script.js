// Small script: toggles dark mode and updates the message
const btn = document.getElementById('action');
const msg = document.getElementById('msg');
const title = document.getElementById('title');

let dark = false;
btn.addEventListener('click', ()=>{
  dark = !dark;
  document.body.classList.toggle('dark', dark);
  if(dark){
    title.textContent = 'Nice and cozy ✨';
    msg.textContent = 'Dark mode enabled. Click again to go back.';
    btn.textContent = 'Switch to light';
  } else {
    title.textContent = 'Hello!';
    msg.textContent = 'This is a tiny page with a single button.';
    btn.textContent = 'Click me';
  }
});
