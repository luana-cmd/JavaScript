window.revelar = scrollReveal({ reset: true });

window.reveal('efeito -ing-top', {
    duration: 20000,
    distance: '90px',
    origin: "left",
})

revelar.reveal('.clientes-efeito', {
    duration: 2000,
    distance: '120px',
})

revelar.reveal('.principais-peodutos', {
    duration: 2000,
    distance: '200px'
})