<<<<<<< HEAD
function tabs() {
    // Tabs

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {

=======
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    // Tabs 

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
    function hideTabContent() {
>>>>>>> 102
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
<<<<<<< HEAD
            item.classList.remove('tabheader__item_active');
=======
            item.classList.remove(activeClass);
>>>>>>> 102
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
<<<<<<< HEAD
        tabs[i].classList.add('tabheader__item_active');
=======
        tabs[i].classList.add(activeClass);
>>>>>>> 102
    }

    hideTabContent();
    showTabContent();

<<<<<<< HEAD
    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
=======
    tabsParent / addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
>>>>>>> 102
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

<<<<<<< HEAD
module.exports = tabs;
=======
export default tabs;
>>>>>>> 102
