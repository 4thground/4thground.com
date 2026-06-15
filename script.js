document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.body-text, .large-text').forEach(el => {
    const words = el.textContent.trim().split(' ');
    el.innerHTML = words.map((word, i) => `<span style="animation-delay: ${i * 0.015}s">${word}</span>`).join(' ');
  });
});
