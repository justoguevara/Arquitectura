
// **************** variables ************************

dat_personas = {};
dat_menus = {};
dat_paginas = {};


// **************** personas ************************

dat_personas.ana ={
imagen: "tierra.jpg",
titulo: "titulo corto",
descripcion: "texto descriptivo",
pagina:"productos",
contacto: "023 658 745"
}

dat_personas.maria ={
    imagen: "cielo.jpg",
    titulo: "titulo corto",
    descripcion: "texto descriptivo er",
    pagina:"contactos",
    contacto: "023 548 754"
}

dat_personas.pedro ={
    imagen: "mar.jpg",
    titulo: "titfdgo fgvdfs",
    descripcion: "texptivo er",
    pagina:"ghdgfh",
    contacto: "013 548 754"
}



// **************** menus ************************

dat_menus.principal ={};
dat_menus.principal.tex = ["Inicio","Categorias","Productos","Contactos"];
dat_menus.principal.vin = ["inicio","","",""];
dat_menus.principal.selec = "pagina";

dat_menus.categorias ={};
dat_menus.categorias.tex = ["PUBLICIDAD","PRODUCTOS DIGITALES","ARQUITECTURA Y DISEÑO"];
dat_menus.categorias.vin = ["arquitectura","arquitectura","arquitectura"];
dat_menus.categorias.selec = "pagina";

dat_menus.publicidad ={};
dat_menus.publicidad.tex = ["CAJAS LUMINOSAS","MODULOS GIRATORIOS","MODULOS INTELIGENTES"];
dat_menus.publicidad.vin = ["cajas_luminosas","modulos_giratorios","modulos_inteligentes"];
dat_menus.publicidad.selec = "pagina";

dat_menus.productos_digitales ={};
dat_menus.productos_digitales.tex = ["DISEÑO WEB","DISEÑO GRAFICO","MODELADO 3D"];
dat_menus.productos_digitales.vin = ["diseno_web","diseno_grafico","modelado_3d"];
dat_menus.productos_digitales.selec = "pagina";

dat_menus.arquitectura_diseno ={};
dat_menus.arquitectura_diseno.tex = ["ARQUITECTURA","INTERIOR","DISEÑOS","IDEAS"];
dat_menus.arquitectura_diseno.vin = ["arquitectura","interior","disenos","ideas"];
dat_menus.arquitectura_diseno.selec = "pagina";




//********************** paginas  ****************************

dat_paginas.secciones = {};
s = dat_paginas.secciones;

//cabeza
dat_paginas.logo = "svg/logo.svg";
dat_paginas.logo2 = "svg/personas.svg";
dat_paginas.menu_principal = dat_menus.principal;
dat_paginas.opciones = "";
dat_paginas.fondo = "mar.jpg";
dat_paginas.pies = {};

//principal
s.inicio = {};
x = s.inicio;
x.tipo = "pagina basica";
x.imagen = "svg/personas.svg";
x.mensaje = "Bienvenidos";
x.fondo = "cielo.jpg";
x.contenido = "";

s.categorias = {};
x = s.categorias;
x.sub_menu = dat_menus.categorias;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.productos = {};
x = s.productos;
x.sub_menu = dat_menus.categorias;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.contactos = {};
x = s.contactos;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

//categorias
s.publicidad = {};
x = s.publicidad;
x.sub_menu = dat_menus.publicidad;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.productos_digitales = {};
x = s.productos_digitales;
x.sub_menu = dat_menus.productos_digitales;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.arquitectura_diseno = {};
x = s.arquitectura_diseno;
x.sub_menu = dat_menus.arquitectura_diseno;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

//publicidad
s.cajas_luminosas = {};
x = s.cajas_luminosas;
x.sub_menu = dat_menus.publicidad;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.modulos_giratorios = {};
x = s.modulos_giratorios;
x.sub_menu = dat_menus.publicidad;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.modulos_inteligentes = {};
x = s.modulos_inteligentes;
x.sub_menu = dat_menus.publicidad;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

//productos digitales
s.diseno_web = {};
x = s.diseno_web;
x.sub_menu = dat_menus.productos_digitales;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.diseno_grafico = {};
x = s.diseno_grafico;
x.sub_menu = dat_menus.productos_digitales;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.modelado_3d = {};
x = s.modelado_3d;
x.sub_menu = dat_menus.productos_digitales;
x.tipo = "pagina basica";
x.imagen = "tierra.jpg";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

//arquitectura y diseño
s.arquitectura = {};
x = s.arquitectura;
x.sub_menu = dat_menus.arquitectura_diseno;
x.tipo = "pagina_mariela_01";
x.imagen = "arq/logos/logo.png";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.interior = {};
x = s.interior;
x.sub_menu = dat_menus.arquitectura_diseno;
x.tipo = "pagina_mariela_01";
x.imagen = "arq/logos/logo.png";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.disenos = {};
x = s.disenos;
x.sub_menu = dat_menus.arquitectura_diseno;
x.tipo = "pagina_mariela_01";
x.imagen = "arq/logos/logo.png";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";

s.ideas = {};
x = s.ideas;
x.sub_menu = dat_menus.arquitectura_diseno;
x.tipo = "pagina_mariela_01";
x.imagen = "arq/logos/logo.png";
x.mensaje = "Bienvenidos";
x.fondo = "";
x.contenido = "";




