const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamIndicador + 'px';

let indexSeccionActiva;

// Observer
const observer = new IntersectionObserver((entradas, observer) => {
	entradas.forEach(entrada => {
		if (entrada.isIntersecting) {
			// Obtenemos cual es la seccion que esta entrando en pantalla.
			// console.log(`La entrada ${entrada.target.id} esta intersectando`);

			// Creamos un arreglo con las secciones y luego obtenemos el index del la seccion que esta en pantalla.
			indexSeccionActiva = [...secciones].indexOf(entrada.target);
			indicador.style.transform = `translateX(${tamIndicador * indexSeccionActiva}px)`;
		}
	});
}, {
	rootMargin: '-60px 0px 0px 0px',
	threshold: 0.2
});

// Agregamos un observador para el hero.
observer.observe(document.getElementById('azgk'));

// Asignamos un observador a cada una de las secciones
secciones.forEach(seccion => observer.observe(seccion));

// Evento para cuando la pantalla cambie de tamaño.
const onResize = () => {
	// Calculamos el nuevo tamaño que deberia tener el indicador.
	tamIndicador = menu.querySelector('a').offsetWidth;

	// Cambiamos el tamaño del indicador.
	indicador.style.width = `${tamIndicador}px`;

	// Volvemos a posicionar el indicador.
	indicador.style.transform = `translateX(${tamIndicador * indexSeccionActiva}px)`;
}

window.addEventListener('resize', onResize);

var swiper = new Swiper('.mySwiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},


	breakpoints: {
		620: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1240: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	}
});