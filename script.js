/* ===================typing animation ===================== */
var typed=new Typed(".typing",{
    strings:["Web Designer","Web Developper","Frontend Developper"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
/* =================== aside ===================== */
const nav=document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection=allSection.length;
    for(let i=0;i<totalNavList;i++){
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBackSection();
            for(let j=0;j<totalNavList;j++)
            {
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth <1200){
                asideSectionTogglerBtn();
            }
        }
    )
    }
    function removeBackSection()
    {
        for(let i=0;i<totalSection;i++){
                allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("active");
        }
        const target =element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active")
    }
    function updateNav(element){
        for(let i=0;i<totalNavList;i++){
            navList[i].querySelector("a").classList.remove("active");
             const target =element.getAttribute("href").split("#")[1];
             if(target==navList[i].querySelector("a").getAttribute("href").split("#")[1])
             {
                navList[i].querySelector("a").classList.add("active");
             }

        }
        
    }
    document.querySelector(".hire-me").addEventListener("click",function(){
        
        const sectionIndex=this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);

    })
    const navTogglerBtn=document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",() =>
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.toggle("open");
        }
    }






/*/*emailjs
// Initialize EmailJS
emailjs.init('sdZRucYpNCDZx2o-t'); // Replace with your EmailJS public key

// Grab the button
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent page reload

  // Get values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
 

  // Send email using EmailJS
  emailjs.send(
    'service_3gqpnwc',   // replace with your EmailJS service ID
    'template_4y4afbl',  // replace with your EmailJS template ID
    {
      name: name,
      email: email,
      subject: subject,
      message: message,
      
    }
  ).then(
    function(response) {
      alert('Email sent successfully!');
      // Optional: clear form
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    },
    function(error) {
      alert('Failed to send email, please try again.');
      console.log(error);
    }
  );
});*/
