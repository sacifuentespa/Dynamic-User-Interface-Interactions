import pic1 from './public/images/galleryImages/pic1.jpg';
import pic2 from './public/images/galleryImages/pic2.jpg';
import pic3 from './public/images/galleryImages/pic3.jpg';
import pic4 from './public/images/galleryImages/pic4.jpg';
import pic5 from './public/images/galleryImages/pic5.jpg';
import pic6 from './public/images/galleryImages/pic6.jpg';
import pic7 from './public/images/galleryImages/pic7.jpg';
import pic8 from './public/images/galleryImages/pic8.jpg';
import arrow from './public/images/icons/arrow.svg';

function showGallery() {
    const galleryPictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

    const main = document.querySelector('.main');

    let picSelector = 0;
    
    const leftPic = document.createElement('button');
    const leftArrow = new (Image);
    leftArrow.src = (arrow);
    leftPic.appendChild(leftArrow);
    leftPic.id = 'leftPic';
    main.appendChild(leftPic);

    const picGallery = document.createElement('div');
    picGallery.classList.add('picGallery')
    const selectedPicture = new(Image);
    selectedPicture.src = galleryPictures[picSelector];
    picGallery.appendChild(selectedPicture);
    main.appendChild(picGallery);

    const rightPic = document.createElement('button');
    const rightArrow = new (Image);
    rightArrow.src = arrow;
    rightPic.appendChild(rightArrow);
    rightPic.id = 'rightPic';
    main.appendChild(rightPic);

    leftPic.addEventListener('click',()=>{
        if(picSelector===0){
            picSelector = 7;
        }else{
            picSelector -= 1;
        }
        selectedPicture.src = galleryPictures[picSelector];
    })

    rightPic.addEventListener('click',()=>{
        if(picSelector===7){
            picSelector = 0;
        }else{
            picSelector += 1;
        }
        selectedPicture.src = galleryPictures[picSelector];
    })
}

export default showGallery


