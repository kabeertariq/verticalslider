const SliderContainer = document.querySelector('.slider-container');
const LeftSlider = document.querySelector('.left-slider');
const RightSlider = document.querySelector('.right-slider');
const UpButton = document.querySelector('.button-up');
const DownButton = document.querySelector('.button-down');
const SlideLength = RightSlider.querySelectorAll('div').length;
let ActiveSlideIndex = 0
LeftSlider.style.top = `-${(SlideLength - 1) * 100}vh`

UpButton.addEventListener('click', () => ChangeSlide('up'));
DownButton.addEventListener('click', () => ChangeSlide('down'));

const ChangeSlide = (direction) => {
    SlideHeight = SliderContainer.clientHeight;
    if(direction === "up"){
        ActiveSlideIndex++
        if(ActiveSlideIndex > SlideLength - 1){
            ActiveSlideIndex = 0
        }

        RightSlider.style.transform = `translateY(-${ActiveSlideIndex * SlideHeight}px)`
        LeftSlider.style.transform = `translateY(${ActiveSlideIndex * SlideHeight}px)`
    }


    if(direction === "down"){
        ActiveSlideIndex--
        // if(ActiveSlideIndex > SlideLength - 1){
        //     ActiveSlideIndex = 0
        // }
        if(ActiveSlideIndex < 0){
            ActiveSlideIndex = SlideLength - 1;
        }
        

        RightSlider.style.transform = `translateY(-${ActiveSlideIndex * SlideHeight}px)`
        LeftSlider.style.transform = `translateY(${ActiveSlideIndex * SlideHeight}px)`
    }
}
