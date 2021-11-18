const parallax = document.getElementById('para')
console.log(parallax)

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .3 + 'px';
})