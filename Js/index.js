// SIDEBAR
const menuItems = document.querySelectorAll(`.menu-item`);

//MESSAGES
const messageNotification = document.querySelector(`#message-notification`);
const messages = document.querySelector(`.messages`);
const message = document.querySelectorAll(`.message`);
const messageSearch = document.querySelector(`#message-search`);

//THEME
const theme = document.querySelector(`#theme`);
const themeModal = document.querySelector(`.customize-theme`);
const fontSizes = document.querySelectorAll(`.choose-size span`);
var root = document.querySelector(`:root`);
const colorPalette = document.querySelectorAll(`.choose-color span`);
const bg1 = document.querySelector(`.bg-1`);
const bg2 = document.querySelector(`.bg-2`);
const bg3 = document.querySelector(`.bg-3`);


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
    message.forEach(chat => {
        let name = chat.querySelector(`h5`).textContent.toLowerCase();

        if(name.indexOf(val) != -1)
        {
            chat.style.display = `flex`;
        }
        else
        {
            chat.style.display = `none`;
        }
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

// ===============THEME CUSTOMIZATION======================

const openThemeModal = () => {
  themeModal.style.display = `grid`;
}

const closeThemeModal = (e) => {
if(e.target.classList.contains(`customize-theme`))
{
    themeModal.style.display = `none`;
}
}

themeModal.addEventListener(`click`, closeThemeModal);
theme.addEventListener(`click`, openThemeModal);

// ===================FONT SIZES IN THEME======================

const changeActiveSize = () => {
fontSizes.forEach(size => {
    size.classList.remove(`active`);
})

} 

fontSizes.forEach(size => {
    
    size.addEventListener(`click`, () => {

        changeActiveSize();
    let fontSize;
    size.classList.toggle(`active`);

        if(size.classList.contains(`font-size-1`))
    {
        fontSize = `10px`;
        root.style.setProperty(`--sticky-top-left`, `5.4rem`);
        root.style.setProperty(`--sticky-top-right`, `5.4rem`);
    }

    else if(size.classList.contains(`font-size-2`))
    {
        fontSize = `13px`;
        root.style.setProperty(`--sticky-top-left`, `5.4rem`);
        root.style.setProperty(`--sticky-top-right`, `-7rem`);
    }

    else if(size.classList.contains(`font-size-3`))
    {
        fontSize = `16px`;
        root.style.setProperty(`--sticky-top-left`, `-2rem`);
        root.style.setProperty(`--sticky-top-right`, `-17rem`);
    }

    else if(size.classList.contains(`font-size-4`))
    {
        fontSize = `19px`;
        root.style.setProperty(`--sticky-top-left`, `-5rem`);
        root.style.setProperty(`--sticky-top-right`, `-25rem`);
    }

    else if(size.classList.contains(`font-size-5`))
    {
        fontSize = `22px`;
        root.style.setProperty(`--sticky-top-left`, `-12rem`);
        root.style.setProperty(`--sticky-top-right`, `-35rem`);
    }
    document.querySelector(`html`).style.fontSize = fontSize;

})

})


// ==============CHANGE COLORS==========================

const changeActiveColor = () => {
colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove(`active`);
})
}

colorPalette.forEach(color => {

    color.addEventListener(`click`, () => {

        let primaryHue;
    changeActiveColor();
    color.classList.add(`active`);

         if(color.classList.contains(`color-1`)) 
         {
             primaryHue = 252;
         }

         else if(color.classList.contains(`color-2`)) 
         {
             primaryHue = 52;
         }

         else if(color.classList.contains(`color-3`)) 
         {
             primaryHue = 352;
         }

         else if(color.classList.contains(`color-4`)) 
         {
             primaryHue = 286;
         }

         else if(color.classList.contains(`color-5`)) 
         {
             primaryHue = 202;
         }

         root.style.setProperty(`--primary-color-hue`, primaryHue);
    })
})

// ======================BACKGROUND COLORS=======================

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBG = () => {
    root.style.setProperty(`--light-color-lightness`, lightColorLightness);
    root.style.setProperty(`--dark-color-lightness`, darkColorLightness);
    root.style.setProperty(`--white-color-lightness`, whiteColorLightness);
}

bg1.addEventListener(`click`, () => {
    // darkColorLightness = `95%`;
    // whiteColorLightness = `20%`;
    // lightColorLightness = `15%`;

    // adding active class
    bg1.classList.add(`active`);
    bg2.classList.remove(`active`);
    bg3.classList.remove(`active`);
    changeBG();
    window.location.reload();
})

bg2.addEventListener(`click`, () => {
    darkColorLightness = `95%`;
    whiteColorLightness = `20%`;
    lightColorLightness = `15%`;

    // adding active class
    bg2.classList.add(`active`);
    bg1.classList.remove(`active`);
    bg3.classList.remove(`active`);
    changeBG();
})

bg3.addEventListener(`click`, () => {
    darkColorLightness = `95%`;
    whiteColorLightness = `10%`;
    lightColorLightness = `0%`;

    // adding active class
    bg3.classList.add(`active`);
    bg1.classList.remove(`active`);
    bg2.classList.remove(`active`);
    changeBG();
})