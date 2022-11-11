const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); // observe each element

object.onclick = function(){this.onclick} 

window.onclick = myFunction;

  function myFunction() {
document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}