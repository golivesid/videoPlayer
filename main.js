// данные (пример)
const playlists = [
  {
    title: "Образовательные видео",
    videos: [
      {
        title: "Мотивация",
        fileUrl: "./video/video_1.mp4",
        chanel: "",
        isOnline: false,
      },
      {
        title: "",
        fileUrl: "./video/video_1.mp4",
        chanel: "",
        isOnline: false,
      },
      {
        title: "",
        fileUrl: "./video/video_1.mp4",
        chanel: "",
        isOnline: false,
      },
    ],
  },
  {
    title: "Спорт",
    videos: [
      {
        title: "",
        fileUrl: "https://www.youtube.com/watch?v=zJNkxuechzY&ab_channel=IvanKrasavin",
        chanel: "",
        isOnline: false,
      },
      {
        title: "",
        fileUrl: "https://www.youtube.com/watch?v=zJNkxuechzY&ab_channel=IvanKrasavin",
        chanel: "",
        isOnline: false,
      },
    ],
  },
  {
    title: "Мотиващия",
    videos: [
      {
        title: "",
        fileUrl: "./video/video_1.mp4",
        chanel: "",
        isOnline: false,
      },
      {
        title: "",
        fileUrl: "./video/video_1.mp4",
        chanel: "",
        isOnline: false,
      },
    ],
  },
  
];

// основной контейнер
const App = document.getElementById("root");

// добавление элементов в дерево
App.append(
  HeaderComponent("./assets/logo/Vector.png", 'MyVideoPlayer'),
  MainComponent(),
  SideBoxContainer(),
  FooterComponent()
);

// выбор основного контейнера
const mainElement = document.querySelector(".main");

// отрисовка приложения
PlaylistComponent(playlists, mainElement);

// функции создания элементов
function createElement(tag, classes = [], attributes = {}, textContent = "") {
    const element = document.createElement(tag);
    if (classes.length) {
      classes.forEach((cl) => {
        element.classList.add(cl);
      });
    }
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    element.textContent = textContent;
    return element;
};
function createHeader(tag, title) {
    const element = createElement('header', ['header_container']);
    const titleElement = createElement(tag,  ['header_title']);
    titleElement.textContent = title;
    element.append(titleElement)
    return element;
};

// функции компоненты
function HeaderComponent(logoUrl, headerText) {
    const element = createElement("header", ["app_header"]);
    const imageElement = createElement("img", ["header_logo"], { src: logoUrl });
    const titleElement = createElement("span", ["header_title"]);
    titleElement.textContent = headerText;
  
    element.append(imageElement, titleElement);
    return element;
};
function MainComponent() {
  const element = createElement("main", ["main"]);
  return element;
};
function FooterComponent() {
  const element = createElement("footer", ["footer"]);
  return element;
};
function SideBoxContainer() {
  const element = createElement("aside", ["sideBox"]);
  return element;
};
function HeaderVideoContainer(title) {
    const element = createElement('header', ['header_video'], {}, title)
    return element;
};
function PlaylistComponent(inputPlaylists, main) {
    inputPlaylists.forEach((playlist) => {
        const container = createElement('section', ['playlist']);
        
        container.append(createHeader('h2', playlist.title), VideoComponent(playlist))
        main.append(container)
    });
};
function VideoComponent(inputPlaylist) {
    // создаем контейнер для всех видео плейлиста
    const element = createElement('div', ['container_videos']);
    // в цикле обходим плейлист
    inputPlaylist.videos.forEach((video) => {
        // создаем контейнер для каждого видео
        const container = createElement('div', ['container_video']);
        // создем сам жлемент видео
        const videoElement = createElement('video', ['video'], {src: video.fileUrl, controls: true});
        // добавляем в дерево
        container.append(videoElement,HeaderVideoContainer(video.title))
        element.append(container)
    });

    return element;
};

