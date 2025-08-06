// scramble-effect.js
// Hacker-style scramble effect (repeats forever)
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end, char: null });
    }
    // Cancel previous animation, if any
    if (this.frameRequest) {
      if (typeof this.frameRequest === 'number') {
        clearTimeout(this.frameRequest);
      } else {
        cancelAnimationFrame(this.frameRequest);
      }
    }
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        // Slowed down character changes by lowering probability threshold from 0.28 to 0.15
        if (!char || Math.random() < 0.15) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      // Use setTimeout instead of requestAnimationFrame to slow frame rate
      this.frameRequest = setTimeout(this.update, 60); // 60ms per frame ≈ ~16fps (slower than 60fps)
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}


// Continuously repeat the effect
window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById("scramble-name");
  if (!el) return;
  const fx = new TextScramble(el);

  function loop() {
    fx.setText("LostAstr0").then(() => {
      setTimeout(loop, 2000); // Pause 2.5s between each scramble cycle (adjust to preference)
    });
  }
  loop();
});
