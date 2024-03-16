import vars from "../vars/vars"


// Добавление обработчика событий на каждый фильтр
vars.$catalogFilters.forEach(el => {
    el.addEventListener('click', (e) => {
        el.classList.toggle('catalog-filter--open');
    });
});

// Добавление обработчика событий на кнопку скрытия фильтров
vars.$hideFilters.addEventListener('click', () => {
    vars.$catalogFilters.forEach(el => {
        el.classList.remove('catalog-filter--open');
    });
});

