//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
const form = document.getElementById('preferencesForm');
const fontSizeSelect = document.getElementById('fontsize');
const fontColorSelect = document.getElementById('fontcolor');

window.addEventListener('DOMContentLoaded', () => {
  const savedFontSize = localStorage.getItem('fontSize');
  const savedFontColor = localStorage.getItem('fontColor');

  if (savedFontSize) {
    document.documentElement.style.setProperty('--fontsize', savedFontSize);
    fontSizeSelect.value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty('--fontcolor', savedFontColor);
    fontColorSelect.value = savedFontColor;
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fontSize = fontSizeSelect.value;
  const fontColor = fontColorSelect.value;

  localStorage.setItem('fontSize', fontSize);
  localStorage.setItem('fontColor', fontColor);

  document.documentElement.style.setProperty('--fontsize', fontSize);
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});
});