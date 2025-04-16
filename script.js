function goTo(screen) {
  const allScreens = ['docsMenuScreen', 'idCardScreen', 'requisitesScreen'];
  allScreens.forEach(id => {
    document.getElementById(id).style.display = 'none';
  });

  if (screen === 'idCard') {
    document.getElementById('idCardScreen').style.display = 'block';
    document.getElementById('backBtn').style.display = 'inline';
  } else if (screen === 'requisites') {
    document.getElementById('requisitesScreen').style.display = 'block';
    document.getElementById('backBtn').style.display = 'inline';
  } else if (screen === 'docsMenu') {
    document.getElementById('docsMenuScreen').style.display = 'block';
    document.getElementById('backBtn').style.display = 'none';
  }
}

// Обработка загрузки фото
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('photoInput');
  input.addEventListener('change', function (event) {
    const preview = document.getElementById('photoPreview');
    preview.innerHTML = '';
    const file = event.target.files[0];
    if (file) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      preview.appendChild(img);
    }
  });

  goTo('docsMenu'); // Запуск с экрана "Цифровые документы"
});
