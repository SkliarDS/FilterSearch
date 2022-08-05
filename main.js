

const tabsItems = document.querySelectorAll('.tabs__item');
const tabsContents = document.querySelectorAll('.tabs__content');
const filterItemContents = document.querySelectorAll('[data-filter-tab]');
const filterLists = document.querySelectorAll('[data-filter-list]');
const filterListItems = document.querySelectorAll('.filter-list__item');

// открытие / закрытие "по региону" "по названию тура"
tabsItems.forEach(tabItem => {
    if (tabItem !== null){
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
    };   

});


// открытие / закрытие "регион" "вид тура" "период"
filterItemContents.forEach(filterItem => {
    if (filterItem !== null){
       filterItem.addEventListener('click', function(){ 
            const tabNum = +this.dataset.filterTab;       
            const nextList = this.nextElementSibling;  
            filterLists.forEach(list => {
                list.classList.remove('filter-list--active');
            });            
            tabNum !== 3 ? nextList.classList.add('filter-list--active') : false;
        });     
    };
});

// добовлени активного класса 
filterListItems.forEach(item => {
    if(item !== null){
        item.addEventListener('click', () => {item.classList.toggle('filter-list__item--ative');});
    };
});



// инициализация календаря 
let inputDates = document.querySelectorAll('[data-input]');
let button = {
    content: 'июнь',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let date = new Date('2022-06-1');
        dp.selectDate(date);
        dp.setViewDate(date);
    }
};

let button1 = {
    content: 'Сбросить',
    className: 'custom-button-classname',
    onClick: (dp) => {        
        let date = new Date();
        dp.selectDate(date);
        dp.setViewDate(date);
    }
}

inputDates.forEach(inputData => {
    new AirDatepicker(inputData, {
        // visible: true,
        // inline: true,
        // isMobile: true, // вкл моб.
        classes: 'in-data',
        buttons: [button, button1, 'clear'],
    });   
});

let dpMin, dpMax;

// dpMin = new AirDatepicker('#el1', {
//     onSelect({date}) {
//         dpMax.update({
//             minDate: date,
//             range: true,
//             inline: true,
//         })
//     }
// })
new AirDatepicker('#el1', {
    inline: true
})
new AirDatepicker('#el2', {
    inline: true
})
// dpMax = new AirDatepicker('#el2', {
//     onSelect({date}) {
//         dpMin.update({
//             maxDate: date,
//             range: true,
//         })
//     }
// }) 