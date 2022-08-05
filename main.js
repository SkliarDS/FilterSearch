

const tabsItems = document.querySelectorAll('.tabs__item');
const tabsContents = document.querySelectorAll('.tabs__content');

tabsItems.forEach(tabItem => {
    tabItem.addEventListener('click', (e)=>{        
        tabsItems.forEach(item => {
            item.classList.remove('tabs__item--active');
        });
        tabItem.classList.add('tabs__item--active');
        let dataItem = e.target.dataset.tab;
        
        tabsContents.forEach(content => {
            content.classList.remove('tabs__content--active');
        });
        let contentItem = document.querySelector(`[data-content="${dataItem}"]`);
        contentItem.classList.add('tabs__content--active');
    });

});