/*window.addEventListener('load', function(event){
	event.preventDefault();*/

	var imagenes = [{
			src:"assets/img/img-1.jpg",
			alt: "img1",
			caption: "Nombre del Proyecto 1"
		}, {
			src:"assets/img/img-2.jpg",
			alt: "img2",
			caption: "Nombre del Proyecto 2"
		}, {
			src:"assets/img/img-3.jpg",
			alt: "img3",
			caption: "Nombre del Proyecto 3"
		}, {
			src:"assets/img/img-4.jpg",
			alt: "img4",
			caption: "Nombre del Proyecto 4"
		}, {
			src:"assets/img/img-5.jpg",
			alt: "img5",
			caption: "Nombre del Proyecto 5"
		}, {
			src:"assets/img/img-6.jpg",
			alt: "img6",
			caption: "Nombre del Proyecto 6"
		}, {
			src:"assets/img/img-7.jpg",
			alt: "img7",
			caption: "Nombre del Proyecto 7"
		}, {
			src:"assets/img/img-8.jpg",
			alt: "img8",
			caption: "Nombre del Proyecto 8"
		}, {
			src:"assets/img/img-9.jpg",
			alt: "img9",
			caption: "Nombre del Proyecto 9"
		}, {
			src:"assets/img/img-10.jpg",
			alt: "img10",
			caption: "Nombre del Proyecto 10"
		}, {
			src:"assets/img/img-11.jpg",
			alt: "img11",
			caption: "Nombre del Proyecto 11"
		}, {
			src:"assets/img/img-12.jpg",
			alt: "img12",
			caption: "Nombre del Proyecto 12"
		}];

	var ruta = imagenes.map(function (event) {
		return event.src;
	});

	var alt = imagenes.map(function (event){
		return event.alt;
	});

	var caption = imagenes.map(function (event){
		return event.caption;
	});

	function printimg(ruta,alt, caption){
		var galeria = document.getElementById('galeria');
		var figure = document.createElement('figure');
		var figcaption = document.createElement('figcaption');
		var captiontext = document.createTextNode(caption);
		var img = document.createElement('img');
		var a = document.createElement('a');

		img.setAttribute('src', ruta);
		img.classList.add('item');
		figure.appendChild(img);
		figure.classList.add('list')
		figcaption.appendChild(captiontext);
		figcaption.classList.add('text-uppercase');
		figure.appendChild(figcaption);
		galeria.appendChild(figure);

		img.addEventListener('click', function (event){
		var modal = document.getElementById('modal');
		modal.style.display = 'block';
		});
	} 

	for(var i=0; i < imagenes.length; i++){
		printimg(ruta[i], alt[i], caption[i]);
	}



	/*for(var i = 1; i < 13; i++){
		var div = document.createElement('div');
		
		
		var url = "assets/img/img-" + i + ".jpg";
		var text = "Nombre del Proyecto";

		img.setAttribute('src', url);
		figure.appendChild(img);
		figcaption.innerText = text;
		figure.appendChild(figcaption);
		div.appendChild(figure);
		galeria.appendChild(div);

		img.setAttribute('class', 'image');
		div.setAttribute('class', 'gallery')
	}
});

*/