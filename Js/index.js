// SIDEBAR
const menuItems = document.querySelectorAll(`.menu-item`);

//MESSAGES
const messageNotification = document.querySelector(`#message-notification`);
const messages = document.querySelector(`.messages`);
const message = document.querySelectorAll(`.message`);
const messageSearch = document.querySelector(`#message-search`);

// ==================SIDEBAR==================

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

// =================MESSAGES=====================

// searching chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val)
    message.forEach(chat => {
        let name = chat.querySelector(`h5`).textContent.toLocaleLowerCase();
    })
}

messageSearch.addEventListener(`keyup`, searchMessage);


messageNotification.addEventListener(`click`, () =>{
    messages.style.boxShadow = `0 0 1rem var(--color-primary)`; 
    document.querySelector(`#message-notification .notifications-count`).style.display = `none`;
    
    setTimeout(() => {
        messages.style.boxShadow = `none`; 
    }, 2000);
})