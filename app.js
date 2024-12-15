//Активные точки
        // // Находим элементы
        // const coveredElement = document.querySelector('.covered');
        // const pulseContainer = document.querySelector('.pulse-container');

        // // Добавляем обработчики событий
        // coveredElement.addEventListener('mouseover', function() {
        //     pulseContainer.style.display = 'block'; // Показываем .pulse-container при наведении
        // });

        // coveredElement.addEventListener('mouseout', function() {
        //     pulseContainer.style.display = 'none'; // Прячем .pulse-container при уходе курсора
        // });

const regionsLayer = document.getElementById('regions');

regionsLayer.addEventListener('mouseover', (e) => {
  const targetIds = e.target.dataset.target; // Получаем список ID точек
  if (targetIds) {
    const pointIds = targetIds.split(','); // Разделяем их в массив
    pointIds.forEach(id => {
      const point = document.getElementById(id.trim());
      if (point) point.style.display = 'block';
    });
  }
});

regionsLayer.addEventListener('mouseout', (e) => {
  const targetIds = e.target.dataset.target;
  if (targetIds) {
    const pointIds = targetIds.split(',');
    pointIds.forEach(id => {
      const point = document.getElementById(id.trim());
      if (point) point.style.display = 'none';
    });
  }
});
