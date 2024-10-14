// Hover effect for displaying alt text
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('mousemove', function (e) {
    const hoverText = document.getElementById('hoverText');
    hoverText.style.display = 'block';
    hoverText.style.left = e.pageX + 10 + 'px';
    hoverText.style.top = e.pageY + 10 + 'px';
    hoverText.textContent = this.alt;
  });

  img.addEventListener('mouseout', function () {
    const hoverText = document.getElementById('hoverText');
    hoverText.style.display = 'none';
  });
});