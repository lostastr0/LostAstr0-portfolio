(function() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '2';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class ShootingStar {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.len = Math.random() * 80 + 50;
      this.speed = Math.random() * (3.0 - 1.5) + 1.5;  // slower speed between 1.5 and 3
      this.angle = Math.PI / 4;
      this.opacity = initial ? Math.random() : 0;
      this.fadeIn = true;
      this.fadeSpeed = 0.01;  // slower fade speed for longer visibility
    }

    update() {
      this.x += this.speed * Math.cos(this.angle);
      this.y += this.speed * Math.sin(this.angle);

      if (this.fadeIn) {
        this.opacity += this.fadeSpeed;
        if (this.opacity >= 1) this.fadeIn = false;
      } else {
        this.opacity -= this.fadeSpeed;
      }

      if (this.opacity <= 0 || this.x > width || this.y > height) {
        this.reset();
      }
    }

    draw(ctx) {
      ctx.strokeStyle = `rgba(23, 138, 255, ${this.opacity})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x - this.len * Math.cos(this.angle),
        this.y - this.len * Math.sin(this.angle)
      );
      ctx.stroke();
    }
  }

  const shootingStars = [];
  const maxStars = 3;  // number of shooting stars

  for (let i = 0; i < maxStars; i++) {
    shootingStars.push(new ShootingStar());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    shootingStars.forEach(star => {
      star.update();
      star.draw(ctx);
    });
    requestAnimationFrame(animate);
  }

  animate();
})();
