// ==================SIDEBAR==================

const menuItems = document.querySelectorAll(`.menu-item`);

// Removing active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove(`active`);
    })
}

menuItems.forEach(item => {
    item.addEventListener(`click`, () => {
        // Calling the changing active class function
        changeActiveItem();
        item.classList.add(`active`);

        // Notification Popup

        if(item.id != `notification`)
        {
            document.querySelector(`.notification-popup`).style.display = `none`;
        }
        else
        {
            document.querySelector(`.notification-popup`).style.display = `block`;
            document.querySelector(`#notification .notifications-count`).style.display = `none`;
        }
    })
})

// =================SIDEBAR JS FINISHED============

