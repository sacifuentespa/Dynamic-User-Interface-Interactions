import './normalize.css';
import './style.css';
import burguerMenu from './public/images/icons/burguerMenu.svg';
import login from './public/images/icons/login.svg';
import gallery from './public/images/icons/gallery.svg';
import contact from './public/images/icons/contact.svg';
import githubIcon from './public/images/icons/github.png';
import galleryScript from './gallery';

const burguerButton = document.querySelector(".burguer");
const burguerIcon = new Image();
burguerIcon.src = burguerMenu;
burguerButton.appendChild(burguerIcon);
burguerIcon.alt = "Menu button"

const loginButton = document.querySelector("#login");
const loginIcon = new Image();
loginIcon.src = login;
loginButton.insertBefore(loginIcon,loginButton.children[0])
loginIcon.alt = "login button"

const galleryButton = document.querySelector("#gallery");
const galleryIcon = new Image();
galleryIcon.src = gallery;
galleryButton.insertBefore(galleryIcon,galleryButton.children[0])
galleryIcon.alt = "gallery button"

const contactButton = document.querySelector("#contact");
const contactIcon = new Image();
contactIcon.src = contact;
contactButton.insertBefore(contactIcon,contactButton.children[0])
contactIcon.alt = "contact button"

const footerLink = document.querySelector('footer a');
const githubImage = new Image();
githubImage.src = githubIcon;
footerLink.appendChild(githubImage)

const menu = document.querySelector(".menu")

galleryScript()

burguerButton.addEventListener('click',()=>{
    if(menu.classList.contains('visible')){
        menu.classList.remove('visible')
    }
    else{
        menu.classList.add('visible')
    }
})



