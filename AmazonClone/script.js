const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
  for(i=0; i < imgs.length; i++){
    imgs[i].computedStyleMap.display = 'none';
  }
  imgs[n].computedStyleMap.display = 'block';
}
changeSlide();

prev_btn.addEventListener('Click', (e)=>{
  if(n>0){
    n--;
  }else{
    n = imgs.length - 1;
  }
  changeSlide();

})

next_btn.addEventListener('Click', (e)=>{
  if(n<imgs.length - 1){
    n++;
  }else{
    n = 0;
  }
  changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer) {
    item.addEventListener('Wheel', (evt)=>{
      evt.preventDefacult();
      item.scrollLeft += evt.deltaY;
    })
}



