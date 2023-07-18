const home=document.getElementById("header");
const  about=document.getElementById("about");
const work=document.getElementById("My-Works");
const contact=document.getElementById("contact");
const service=document.getElementById("services");

let links = document.querySelectorAll('.links a');

links.forEach((link) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      function scrollview(event, divisionId) {
        event.preventDefault();
        const division = document.getElementById(divisionId);
        if (division) {
          division.scrollIntoView({ behavior: 'smooth' });
        }
      }
      window.scrollview = scrollview;
  
    //   const targetId = this.getAttribute('href');
    //   const targetSection = document.querySelector(targetId);
    //   if (targetSection) {
    //     // Remove "active" class from all sections
    //     [home, about, projects].forEach(section => {
    //       section.classList.remove('active');
    //     });
  
    //     // Add "active" class to the corresponding section
    //     targetSection.classList.add('active');
    //   }
      
    });
  });
const message=document.getElementById("message");

const scriptURL = 'https://script.google.com/macros/s/AKfycbxuculGjf-JAtSdUqVyr9aO1mgpa5zqyXMiNVTqW01i1LfyjoZO9WwXCjofoC4XWrx6/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML="Message sent Successfully"
        setTimeout(()=>{
          message.innerHTML=""
        },3000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
  const contact_form=(division_id)=>{
const div_id=document.getElementById("contact");
div_id.scrollIntoView({behavior:'smooth'});
window.scrollview = scrollview;
  }
const sidemenu=document.getElementById("sidemenu");
const closemenu=()=>{
  sidemenu.style.right="-200px";
}
const openmenu=()=>{
sidemenu.style.right="0";
}



  