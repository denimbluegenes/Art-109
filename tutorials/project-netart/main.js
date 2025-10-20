// Popups tasks clicks
const windowsEl = document.getElementById('windows');


// My popup window
function spawnPopup(message='Are you still there?'){
  const w = document.createElement('div');
  w.className = 'window';
  w.style.left = `${Math.random()*80+5}vw`;
  w.style.top  = `${Math.random()*80+5}vh`;
  w.style.zIndex = String(100 + Math.floor(Math.random()*400));
  w.style.opacity = '0';
  w.style.transform = 'scale(0.92)';

  const bar = document.createElement('div');
  bar.className = 'bar';
  bar.innerHTML = `<span>Reminder ${Math.floor(Math.random()*999)}</span>`;

  const close = document.createElement('button');
  close.className = 'close';
  close.type = 'button';
  close.textContent = '×';

  


  // close rng
close.addEventListener('click', (e) => {
  e.stopPropagation();
  if (Math.random() < 0.6) {
    for (let i = 0; i < 2; i++) {
      spawnPopup('You have other tasks to do stop ignoring them!');
    }
  } else {
    w.remove();
  }
});

  const body = document.createElement('div');
  body.className = 'body';
  body.innerHTML = `<p>${message}</p>`;

  w.append(bar, close, body);
  windowsEl.appendChild(w);

  // Entrance animation (JS only)
  const start = performance.now();
  function anim(now){
    const t = Math.min(1, (now - start)/180);
    const scale = 0.92 + 0.08*t;
    w.style.transform = `scale(${scale.toFixed(3)})`;
    w.style.opacity = t.toFixed(3);
    if (t < 1) requestAnimationFrame(anim);
  }
  requestAnimationFrame(anim);

  return w;
}

// popup tasks
function doFeed(){
  alert('You pour oats into the bucket.');
  spawnPopup('Forgotten to buy oats');
  spawnPopup('Need to clean the bucket');
  spawnPopup('You have class right now.');
  for (let i=0;i<8;i++) spawnPopup('You forgot to feed the cat!');
}
function doBrush(){
  alert('You brush the mane gently.');
  spawnPopup('The dishes are still dirty.');
  spawnPopup('Where did that brush go?');
  spawnPopup('You need a haircut.');
  for (let i=0;i<5;i++) spawnPopup('Did you clean your room?');
}
function doWalk(){
  alert('You take the horse out for a walk…');
  spawnPopup('Lock the door. Lock the door.');
  spawnPopup('Thaw the meat before dinner.');
  spawnPopup('Your appointment is at 3 PM.');
  for (let i=0;i<8;i++) spawnPopup('Did you do your homework?');
}

// task buttons
document.querySelectorAll('.task').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.id;
    if (id === 'feed') return doFeed();
    if (id === 'brush') return doBrush();
    if (id === 'walk') return doWalk();
  });
});

