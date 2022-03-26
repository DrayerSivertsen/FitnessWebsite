function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

window.addEventListener("scroll", function()
{
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})