

//******************  plantillas ***********************//

Plantilla = {};



Plantilla["menu geleria"] = function(dat){
    men = null;
    if(dat){
        men = M(...dat.tex);
        men.vin = dat.vin;
        men.selec = dat.selec;
        men.ess.menu.es = "xx cen disx";

        i = men.ess.items;
        i.id = "items_01";
        i.es = "cur-normal borr-5 cen  espix-10 espiy-5 espe-5 dim-0.5";
        i.selec = "cur-normal borr-5 fon-72,119,231,0.5 espix-10 espiy-5 espe-5 dim-1.0";
        i.dim = "fon-72,119,231,1.0";

        t = men.ess.texto;
        t.id = "tex_01";
        t.es = "tex-255,255,255,1 texh-13 text-Helvetica texn dim-0.5";
        t.selec = "tex-255,255,255,1 texh-13 text-Helvetica texn dim-0.5";
        t.dim = "texc-240,240,255,1.0";
    }
    return men;
}

Plantilla["menu principal"] = function(dat){
    men = null;
    if(dat){
        men = M(...dat.tex);
        men.vin = dat.vin;
        men.selec = dat.selec;
        men.ess.menu.es = "xx cen";

        i = men.ess.items;
        i.id = "items_02";
        i.es = "cur-normal borr-20 cen espix-10 espiy-10 espe-5 dim-0.5";
        i.selec = "cur-normal borr-20 fon-72,119,231,0.5 espix-15 espiy-10 espe-5 dim-0.5";
        i.dim = "fon-72,119,231,0.3 espix-15";

        t = men.ess.texto;
        t.id = "tex_02";
        t.es = "tex-255,255,255,1 texh-13 text-Helvetica dim-0.5";
        t.selec = "tex-255,255,255,1 texh-13 text-Helvetica texn dim-0.5";
        t.dim = "texc-240,240,255,1.0";
    }
    return men;
}

Plantilla["menu exposicion"] = function(dat){
    men = null;
    if(dat){
        men = M(...dat.tex);
        men.vin = dat.vin;
        men.selec = dat.selec;
        men.ess.menu.es = "xx cen";

        i = men.ess.items;
        i.id = "items_03";
        i.es = "cur-normal borr-5 fon-33,47,60,1.0 espi-70 espe-5 dim-0.5 foni-mar.jpg";
        i.selec = "cur-normal borr-5 fon-33,47,60,1.0 espi-70 espe-5 dim-0.5";
        i.dim = "fon-147,81,22,1.0";

        t = men.ess.texto;
        t.id = "tex_03";
        t.es = "tex-255,255,255,1 texh-13 text-Helvetica dim-2.0";
        t.selec = "tex-255,255,255,1 texh-13 text-Helvetica texn dim-2.0";
        t.dim = "texc-240,240,255,1.0 esc-1.2";
    }
    return men;
}

Plantilla["menu exposicion 2"] = function(dat){
    men = null;
    if(dat){
        men = M(...dat.tex);
        men.vin = dat.vin;
        men.selec = dat.selec;
        men.ess.menu.es = "xx cen";

        i = men.ess.items;
        i.id = "items_03";
        i.es = "cur-normal borr-5 fon-33,47,60,1.0 espi-70 espe-5 dim-0.5";
        i.selec = "cur-normal borr-5 fon-33,47,60,1.0 espi-70 espe-5 dim-0.5";
        i.dim = "fon-147,81,22,1.0";

        t = men.ess.texto;
        t.id = "tex_03";
        t.es = "tex-255,255,255,1 texh-13 text-Helvetica dim-2.0";
        t.selec = "tex-255,255,255,1 texh-13 text-Helvetica texn dim-2.0";
        t.dim = "texc-240,240,255,1.0 esc-1.2";
    }
    return men;
}


Plantilla["pagina basica"] = function(dat){
	var todo = [];
    //console.log("  ******  " + arg);
    for (var x=0; x < dat.length; x++) {
        
        if(dat[x].tipo == "pagina basica"){
            pag = dat[x];
                        imagen = I(pag.cabeza.imagen,"x-250 y-150 espe-20");
                            logo = I(pag.cabeza.logo,"x-400 y-65");
                            menu = Plantilla["menu principal"](pag.cabeza.menu);
                        centro = B(logo,menu,"aba expa");
                        opciones = B("x-250 y-150");
                    franja_menu = B(imagen,centro,opciones,"xx disx fon-35,40,45,1");
                        menu = Plantilla["menu principal"](pag.cabeza.sub_menu);
                    franja_sub_menu = B(menu,"xx fon-3,113,174,1 cen");
                    franja_info = B(pag.cabeza.info,"xx y-20 fon-210,213,218,1 dim-0.5");
                cabeza = B(franja_menu,franja_sub_menu,franja_info,"cen xx");
                cuerpo = B(...pag.cuerpo.contenido,"cen xx fon-240,240,240,1 foni-"+pag.cuerpo.fondo);  // contenido
                pies = B(franja_info,franja_menu,"cen xx");            // temporal
            todo = B(cabeza,cuerpo,pies,"cen expa");
            P(pag.nombre,todo); // creacion de la pagina
        }
    }
}

Plantilla["pagina_mariela_01"] = function(dat){
	var todo = [];
    //console.log("  ******  " + arg);
    for (var x=0; x < dat.length; x++) {
        
        if(dat[x].tipo == "pagina_mariela_01"){
            pag = dat[x];
                        imagen = I(pag.cabeza.imagen,"x-250 y-150 espe-20");
                            logo = I(pag.cabeza.logo,"x-400 y-65");
                            menu = Plantilla["menu principal"](pag.cabeza.menu);
                        centro = B(logo,menu,"aba expa");
                        opciones = B("x-250 y-150");
                    franja_menu = B(imagen,centro,opciones,"xx disx fon-30,30,30,1");
                        menu = Plantilla["menu principal"](pag.cabeza.sub_menu);
                    franja_sub_menu = B(menu,"xx cen espi-10");
                    franja_info = B(pag.cabeza.info,"xx y-30 fon-20,20,20,1 dim-0.5");
                cabeza = B(franja_menu,franja_sub_menu,franja_info,"cen fon-15,15,15 xx");
                cuerpo = B(...pag.cuerpo.contenido,"cen xx fon-30,30,30,1 foni-"+pag.cuerpo.fondo);  // contenido
                pies = B(franja_info,franja_menu,"cen xx");            // temporal
            todo = B(cabeza,cuerpo,pies,"cen fon-15,15,15 expa");
            P(pag.nombre,todo); // creacion de la pagina
        }
    }
}

Plantilla["galeria"] = function(dat){
	var todo = new Array();
	for (var x=0; x < dat.length; x++) {
            img = I(dat[x].imagen,"x-200 y-200 espe-10");
                titulo = B(T(dat[x].titulo,"tex-100,100,120,1 texh-13 texn text-Helvetica"),"espi-5 cen");
                descripcion = B(T(dat[x].descripcion,"tex-0,0,0,1 texh-13 text-Helvetica"),"espi-5");
            textos = B(titulo,descripcion,"xx cen v");
                menu = Plantilla["menu geleria"](dat[x].menu);
                //menu.selec = 
            controles = B(menu,"fon-30,30,30,1");
		todo[x] = B(img,textos,controles,"bor-210,210,220,1 bors borg-3 v cen espe-10 borr-5");
	}
	return todo; // retorna array
}


Plantilla["galeria_mariela_01"] = function(dat){
	var todo = new Array();
	for (var x=0; x < dat.length; x++) {
            img = I(dat[x].imagen,"x-200 y-200");
                titulo = B(T(dat[x].titulo,"tex-200,200,200,1 texh-15 texn text-Helvetica"),"espe-5 cen");
                descripcion = B(T(dat[x].descripcion,"tex-180,180,150,1 texh-12 text-Helvetica"),"espe-5");
            textos = B(titulo,descripcion,"xx cen v");
                menu = Plantilla["menu principal"](dat[x].menu);   //// nenu principal no va
                //menu.selec = 
            controles = B(menu,"fon-45,45,45 borr-3");
		todo[x] = B(img,textos,controles,"bor-50,50,50,1 bors borg-2 v cen espi-3 espe-10 borr-6");
	}
	return todo; // retorna array
}
