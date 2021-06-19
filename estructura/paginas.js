

// funcion de relacion datos-plantilla
// entra como objeto y sale como array
function rel_galeria_01(personas){ 
	todo = [];
	for(let clave in personas){
		p = personas[clave];
		dat = {};
		dat.imagen = p.imagen;
		dat.menu = {};
		dat.menu.tex = ["Ver mas...","Contactos"];
		dat.menu.vin = [p.pagina,p.contacto];
		dat.titulo = p.titulo;
		dat.descripcion = p.descripcion;
		todo.push(dat);
	}
	return todo; //retorna array de datos
}



function rel_pagina_01(paginas){ 
	todo = [];
	secciones = paginas.secciones
	for(let clave in secciones){
		seccion = secciones[clave];
		dat = {};
		dat.nombre = clave;
		dat.tipo = seccion.tipo;
		dat.cabeza = {};
		dat.cabeza.logo = paginas.logo;
		dat.cabeza.imagen = seccion.imagen;
		dat.cabeza.fondo = paginas.fondo;

		dat.cabeza.menu = paginas.menu_principal;
		dat.cabeza.sub_menu = seccion.sub_menu;

		dat.cuerpo = {};
		dat.cuerpo.contenido = seccion.contenido;
		dat.cuerpo.fondo = seccion.fondo;

		dat.pies = "";
		todo.push(dat);
	}
	return todo;
}

function rel__menu__galeria_simple(nombre_menu){ 
	todo = [];
	secciones = paginas.secciones
	for(let clave in secciones){
		p = personas[clave];
		dat = {};
		dat.menu = dat_menus[nombre_menu];
		dat.titulo = p.titulo;
		dat.descripcion = p.descripcion;
		todo.push(dat);
	}
	return todo;  //retorna array de datos
}


function rel_images_a_galeria_01(categoria){ 
	var seccion = dat_imag_01()[categoria];
	var todo = [];
	for(let clave in seccion){
		i = seccion[clave];
		dat = {};
		dat.imagen = seccion.dir + clave + ".jpeg";
		dat.menu = {};
		dat.menu.tex = ["Ver mas...","Contactos"];
		dat.menu.vin = ["",""];    //////////
		dat.titulo = i[0];
		dat.descripcion = i[1];
		todo.push(dat);

	}
	return todo;
}



//******************  paginas ***********************//


Paginas = new Object();     // paginas con enlaces


function carga_paginas(){
	var arg = {};

	var g = Plantilla["galeria"](rel_galeria_01(dat_personas));  // galeria
	var g = Plantilla["galeria"](rel_galeria_01(dat_personas));  // galeria
	var gg = Plantilla["menu exposicion"](dat_menus.categorias);

	var p1 = Plantilla["pagina basica"](rel_pagina_01(dat_paginas));
	var p1 = Plantilla["pagina_mariela_01"](rel_pagina_01(dat_paginas));

	Paginas.inicio.add_cuerpo(gg);
	Paginas.categorias.add_cuerpo(gg);
	
	Paginas.arquitectura.add_cuerpo(...Plantilla["galeria_mariela_01"](rel_images_a_galeria_01("arquitectura")));
	Paginas.interior.add_cuerpo(...Plantilla["galeria_mariela_01"](rel_images_a_galeria_01("interior")));
	Paginas.ideas.add_cuerpo(...Plantilla["galeria_mariela_01"](rel_images_a_galeria_01("ideas")));
	//Paginas.diseno.add_cuerpo(...Plantilla["galeria"](rel_images_a_galeria_01("diseno")));

}


