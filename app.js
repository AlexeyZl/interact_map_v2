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
  "yakutia": {
    title: "Якутия",
    content: [
      {
        date: "10-12.11.2019",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        text: "Слоган или что там хотели написать",
        image: "/img/rsd.jpg",
        // link: { href: "https://example.com/region1", text: "Подробнее 1" }
      },
      {
        date: "10-12.11.2018",
        type: "II Всероссийских спотивных игр святого благоверного Александра Невского",
        name: "Вера и спорт",
        text: "Слоган или что там хотели написать",
        image: "/img/vera.jpg",
        // link: { href: "https://example.com/region1-2", text: "Подробнее 2" }
      }
    ]
  },
  "irkutsk": {
    title: "Иркутск",
    content: [
      {
        date: "10-12.11.2019",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        text: "Слоган или что там хотели написать",
        image: "/img/rsd.jpg",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "krasnoyarsk": {
    title: "Красноярск",
    content: [
      {
        date: "10-12.11.2019",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        text: "Слоган или что там хотели написать",
        image: "/img/rsd.jpg",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  }
};
//Вызов окна
// Получаем элементы всплывающего окна
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupItems = document.getElementById("popup-items");
const popupClose = document.getElementById("popup-close");
const overlay = document.getElementById("overlay");

// Функция показа всплывающего окна
function showPopup(regionId) {
  const data = regionData[regionId];
  if (!data) return;

  popupTitle.textContent = data.title;
  popupItems.innerHTML = ""; // Очищаем старый контент

  data.content.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "popup-item";

    if (item.date) {
      const date = document.createElement("div");
      date.textContent = item.date;
      date.classList.add("event-date");
      itemDiv.appendChild(date);
    }

    const descDiv = document.createElement("div");
    descDiv.className = "event-description"
    itemDiv.appendChild(descDiv);

    if (item.type) {
      const type = document.createElement("p");
      type.textContent = item.type;
      descDiv.appendChild(type);
    }

    if (item.name) {
      const name = document.createElement("h3");
      name.textContent = item.name;
      descDiv.appendChild(name);
    }  
    if (item.text) {
      const text = document.createElement("p");
      text.textContent = item.text;
      text.classList.add("slogan");
      descDiv.appendChild(text);
    }

    if (item.link) {
      const link = document.createElement("a");
      link.href = item.link.href;
      link.textContent = item.link.text;
      link.target = "_blank";
      itemDiv.appendChild(link);
    }

    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.text || "Изображение";
      itemDiv.appendChild(img);
    }

    popupItems.appendChild(itemDiv);
  });

  popup.classList.add("show");
  overlay.classList.add("show");
}

// Функция скрытия всплывающего окна
function hidePopup() {
  popup.classList.remove("show");
  overlay.classList.remove("show");
}

// Обработчики событий для закрытия окна
popupClose.addEventListener("click", hidePopup);
overlay.addEventListener("click", hidePopup);

// Обработчик клика по регионам
document.getElementById("regions").addEventListener("click", (e) => {
  const regionId = e.target.id;
  showPopup(regionId);
});
