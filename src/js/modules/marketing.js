import vars from "../vars/vars.js";

document.addEventListener('DOMContentLoaded', (event) => {
    const closeMarketing = document.querySelector('.marketing__close');
    let counter = 0; 

    const data = [
        {
            title: "Title of product 1",
            where: "Moscow, Russia",
        },
        {
            title: "Title of product 2",
            where: "Saratov, Russia",
        },
        {
            title: "Title of product 3",
            where: "Rome, Italy",
        },
    ];

    const changeMarketingData = () => {
        vars.$marketing.classList.remove('marketing--visible');

        setTimeout(() => {
            vars.$marketing.classList.add('marketing--visible');
        }, 1000);

        const stringTitle = `${data[counter].title}`;
        const stringWhere = `15 minutes ago ${data[counter].where}`;

        vars.$marketing.querySelector('.marketing__title').textContent = stringTitle;
        vars.$marketing.querySelector('.marketing__when-from').textContent = stringWhere;

        counter++;

        if (counter === data.length) {
            counter = 0;
        }
    };

    setInterval(() => {
        changeMarketingData();
    }, 3000);

    closeMarketing.addEventListener('click', (e) => {
        vars.$marketing.classList.remove('marketing--visible');
    });
});