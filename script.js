
window.addEventListener('scroll',function(){

    let navbar= document.getElementById('navbar');
    if(window.pageYOffset >= 96){

        navbar.classList.add('sticky');
     
    }    else{
        navbar.classList.remove('sticky');
    }
   
  


});

const scrollup = document.querySelector('.scrollup');
window.addEventListener ('scroll',  () => {
if (window.pageYOffset > 200){
    scrollup.classList.add('active');
}
    else{
        scrollup.classList.remove('active');
    }
} ) 



const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['monday', 'tuesday', 'weednesday', 'thursday', 'friday', 'saturday'],
    datasets: [{
      label: 'no.of applicants present',
      data: [18, 15, 16, 10, 13, 10],
      borderWidth: 1
    }]
  },

});



