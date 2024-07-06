/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const ads = document.querySelectorAll(".promo__adv img"),
      genre = document.querySelector(".promo__genre"),
      bg = document.querySelector(".promo__bg"),
      movieList = document.querySelector(".promo__interactive-list"),
      movies = movieList.querySelectorAll(".promo__interactive-item");

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

ads.forEach(item => {
    item.remove();
})

genre.textContent = "ДРАМА";

bg.style.backgroundImage = 'url("../img/bg.jpg")';

movieDB.movies.sort();

movies.forEach((item, i) => {
    item.innerHTML = `${i+1} ${movieDB.movies[i]}`;
});













