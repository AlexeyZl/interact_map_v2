//Метки
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

//Массив мероприятий
const regionData = {
  "irkutsk": {
      title: "Регион 1",
      description: "Описание региона 1",
      image: "https://example.com/image1.jpg",
      link: "https://example.com/region1"
  },
  "yakutia": {
      title: "Регион 2",
      description: "Описание региона 2",
      image: "https://example.com/image2.jpg",
      link: "https://example.com/region2"
  },
  "krasnoyarsk": {
    title: "Регион 3",
    description: "Описание региона 3",
    image: "https://example.com/image2.jpg",
    link: "https://example.com/region2"
}  
  // Добавьте данные для остальных регионов
};
//Вызов окна
// Получаем элементы
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImage = document.getElementById("popup-image");
const popupDescription = document.getElementById("popup-description");
const popupLink = document.getElementById("popup-link");
const popupClose = document.getElementById("popup-close");
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

// Показываем всплывающее окно
function showPopup(regionId) {
    const data = regionData[regionId];
    if (!data) return; // Если данных для региона нет, ничего не делаем

    popupTitle.textContent = data.title;
    popupImage.src = data.image;
    popupDescription.textContent = data.description;
    popupLink.href = data.link;

    popup.classList.remove("hidden");
    overlay.style.display = "block";
    popup.style.display = "block";
}

// Скрываем всплывающее окно
function hidePopup() {
    popup.classList.add("hidden");
    overlay.style.display = "none";
    popup.style.display = "none";
}

// Навешиваем обработчики событий
popupClose.addEventListener("click", hidePopup);
overlay.addEventListener("click", hidePopup);

// Обрабатываем клик по регионам
document.getElementById("regions").addEventListener("click", (e) => {
    const regionId = e.target.id; // ID региона
    showPopup(regionId);
});
