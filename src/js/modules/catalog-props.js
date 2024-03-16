import vars from "../vars/vars";

let customSelect = document.querySelector('.custom-select');
let customSelectDrop = document.querySelector('.custom-select__dropdown');
let customSelectTop = document.querySelector('.custom-select__top');
let customSelectItems = document.querySelectorAll('.custom-select__item');

if(customSelectItems){
    customSelectItems.forEach(item => {
        item.addEventListener('click', () => {
            let textItem = item.textContent;
            customSelectTop.textContent = textItem;
        })
    })
}
customSelect.addEventListener('click', () => {
    customSelectDrop.classList.toggle('custom-select--hide');
    customSelect.classList.toggle('custom-select--open');
    customSelect.style.minWidth = 115 + "px"

    if(customSelectDrop.classList.contains('custom-select__item')){
        let text = customSelectDrop.target.textContent;
        console.log(text);
    }
});



vars.$catalogColumns.addEventListener('click', (e) => {
    if (e.target && e.target.dataset.columns && (e.target.classList.contains('catalog-columns__btn') || e.target.closest('.catalog-columns__item'))) {
        let columns = e.target.dataset.columns;
        let $columnsBtn = document.querySelectorAll('.catalog-columns__btn');

        if ($columnsBtn && $columnsBtn.length > 0) {
            $columnsBtn.forEach(el => {
                if (el) {
                    el.classList.remove("catalog-columns__btn--current");
                }
            });
        }

        if (e.target) {
            e.target.classList.add('catalog-columns__btn--current');
        }

        if (vars.$catalogGridContent) {
            vars.$catalogGridContent.classList.remove('current-grid3');
            vars.$catalogGridContent.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        }
    }


 
    

});
const createChoiceItem = (text) => {
    // Создаем новый элемент кнопки
    const newChoiceItem = document.createElement('button');
    newChoiceItem.className = 'btn-reset catalog-choice__item choice-generate';
    newChoiceItem.textContent = text;
    return newChoiceItem;
};

vars.$catalogFilterItems.forEach(el => {
    el.querySelector('input').addEventListener('change', (e) => {
        let checked = e.target.checked;
        let choiceItemContainer = el.querySelector('.custom-checkbox');

        if (checked) {
            choiceItemContainer.classList.add('custom-checkbox--active');
            let text = el.querySelector('.custom-checkbox__text').textContent;

            // Создаем новый элемент выбора
            let newChoiceItemElement = createChoiceItem(text);

            // Получаем первый дочерний элемент vars.$catalogChoice
            let firstChild = vars.$catalogChoice.firstElementChild;

            // Вставляем новый элемент в начало vars.$catalogChoice
            if (firstChild) {
                vars.$catalogChoice.insertBefore(newChoiceItemElement, firstChild);
            } else {
                vars.$catalogChoice.appendChild(newChoiceItemElement);
            }

            // Сохраняем ссылку на новый элемент выбора в choiceItemContainer
            choiceItemContainer.newChoiceItemElement = newChoiceItemElement;
        } else {
            choiceItemContainer.classList.remove('custom-checkbox--active');
            // Удаляем соответствующий элемент выбора из DOM
            if (choiceItemContainer.newChoiceItemElement) {
                choiceItemContainer.newChoiceItemElement.remove();
                // Удаляем ссылку, чтобы избежать утечек памяти
                delete choiceItemContainer.newChoiceItemElement;
            }
        }

        // Проверяем, есть ли активные чекбоксы
        const activeCheckbox = document.querySelector('.custom-checkbox--active');
        vars.$catalogChoice.style.display = activeCheckbox ? 'block' : 'none';
    });

    vars.$catalogChoice.addEventListener('click', (e) => {
        if (e.target.classList.contains('catalog-choice__item')){
            e.target.remove();

            let text = e.target.textContent.trim();

            document.querySelector(`[data-text = "${text}"]`).querySelector('input').checked = false;
            document.querySelector(`[data-text = "${text}"]`).classList.remove('custom-checkbox--active')
        }


        if (e.target.classList.contains('catalog-choice__clear')){
            Array.from(e.currentTarget.children).forEach(el => {
                if(!el.classList.contains("catalog-choice__clear")){
                    el.remove();
                }

                vars.$catalogFilterItems.forEach(el => {

                    el.querySelector('input').checked = false;
                    el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
                    document.querySelector('.catalog-choice').style.display = 'none'
                })
            });

            e.currentTarget.style.display = "none"
        }


        if(e.currentTarget.children.length === 1){
            e.currentTarget.style.display = "none";
        }
        
    })
});

