const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal'); 

modalBtn.forEach(item => {
    item.addEventListener("click", el => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId)
        modal.classList.add('active');
        // body.classList.add('no-scroll')
        let modalContent = document.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        })

        setTimeout(() => {
            modalContent.style.transform = 'none'
        }, 2);
    })
})

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.target.closest('.modal');

        closeModal(currentModal);
    })
})

modal.forEach(item => { 
    item.addEventListener('click', event => {
        let currentModal = event.target.closest('.modal');

        closeModal(currentModal);
    })
})



/////////////////////////////////////////////////////

const textArea = document.querySelectorAll("[data-autoresize]");

textArea.forEach(item => {
    let textAreaH = item.offsetHeight;
    item.addEventListener('input', event => {
        let $this = event.currentTarget;

        $this.style.height = textAreaH + "px";
        $this.style.height = $this.scrollHeight + "px"
    })
})


function closeModal(currentModal) {
    // let modalContent = currentModal.querySelector(".modal__content");
    // modalContent.removeAttribute('style');
        currentModal.classList.remove('active');
        body.classList.remove('no-scroll');    
    
}

function burger(){
    const body = document.body;
    const burgerBtn = document.querySelector('.burger');

    burgerBtn.addEventListener('click', () => {
        body.classList.toggle('show-sidebar')
        
    })
}

burger();

/////////////////////////////////////////////////

const share = document.querySelector('.post__actions-link');
const shareImg = document.querySelector('.post__actions-share');
const shareModal = document.querySelector('.social-modal');

shareImg.addEventListener('click', () => {
    shareModal.classList.add('active');
});

///////////////////////////////////////////////


// Делаем живые комментарии без авторизации


// Функция для добавления комментария
function addComment(comment) {
    // Получаем существующие комментарии из localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    // Добавляем новый комментарий
    comments.push(comment);
    // Сохраняем обновленный список комментариев в localStorage
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Функция для отображения комментариев
function displayComments() {
    // Получаем комментарии из localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    // Получаем элемент списка комментариев
    let commentsList = document.querySelector('.main--comment');
    // Очищаем текущий список комментариев
    commentsList.innerHTML = '';
    // Добавляем каждый комментарий в список
    comments.forEach(comment => {
        let li = document.createElement('li');
        li.textContent = comment;
        li.innerHTML = `<li class= 'comment__item'><div class='comment__header'><img src='#' alt='' class='comment__img'><p class='comment__person'> Дениска Какойтов<time datetime='2020-12-21 19:21'>неделю назад</time></p></div><div class='comment__text'><p>${comment}</p></div></li>`
        commentsList.appendChild(li);
    });
}

// Обработчик отправки формы
document.querySelector('.comments__form').addEventListener('submit', function(event) {
    event.preventDefault();
    let commentText = document.querySelector('.comments__form-text').value;
    if (commentText) {
        addComment(commentText);
        document.querySelector('.comments__form-text').value = '';
        displayComments();
    }
});

// Отображаем комментарии при загрузке страницы
displayComments();

// Делаем живые комментарии без авторизации

   

function test() {
    const postText = document.querySelector('.add-post__textarea');
    const addPostBtn = document.querySelector('.add-post__btn');
    const postContainer = document.querySelector('.post'); // замените на соответствующий селектор

    addPostBtn.addEventListener('click', () => {
        const textValue = postText.value;

        if (textValue.trim() !== '') { // проверка на пустой текст
            const createPost = document.createElement('div');
            createPost.textContent = textValue; // использование textContent для добавления текста

            postContainer.appendChild(createPost); // использование appendChild для вставки в контейнер
        }
    });
}

test();



