 import {Injectable} from '@angular/core';

 @Injectable()
 export class HeroesService{

    private heroes:Heroe[] =[
      {
        nombre: "Black Widow",
        resumen: ` No tiene superpoderes, pero fue entrenada como superespía por la Madre Rusia y sabe manejar todo tipo de armas (incluso las más avanzadas tecnológicamente).`,
        habilidades:``,
        img: "assets/img/blackwidow.png",
        aparicion: "1995-11-01",
        casa:"Marvel Studios",
        wiki:` es una película de superhéroes estadounidense de 2021 basada en el personaje de Marvel Comics del mismo nombre. Producida por Marvel Studios y distribuida por Walt Disney Studios Motion Pictures, es la vigésimo cuarta película en el Universo cinematográfico de Marvel (MCU, por sus siglas en inglés). La película fue dirigida por Cate Shortland y escrita por Eric Pearson a partir de una historia de Jac Schaeffer y Ned Benson, y está protagonizada por Scarlett Johansson como Natasha Romanoff/Black Widow junto a Florence Pugh, David Harbour, O. T. Fagbenle, Olga Kurylenko, William Hurt, Ray Winstone y Rachel Weisz. Ambientada después de Capitán América: Civil War (2016), la película sigue a Romanoff huyendo de la justicia y obligada a enfrentarse a su pasado.

        El desarrollo de una película de Black Widow comenzó en abril de 2004 por Lionsgate, con David Hayter adjunto para escribir y dirigir. El proyecto no avanzó y los derechos cinematográficos del personaje volvieron a Marvel Studios en junio de 2006. Johansson fue elegida para el papel en varias películas del UCM, comenzando con Iron Man 2 (2010). Marvel y Johansson expresaron interés en una película en solitario varias veces durante los años siguientes, antes de que Schaeffer y Shortland fueran contratados en 2018. Benson se unió a principios de 2019, y Pearson se agregó más tarde. El rodaje tuvo lugar de mayo a octubre de 2019, en Noruega, Budapest, Marruecos, los Pinewood Studios en el Reino Unido, y en Atlanta y Macon, Georgia.

        Black Widow se estrenó el 29 de junio de 2021 en varios eventos alrededor del mundo, y se estrenó en Estados Unidos el 9 de julio simultáneamente en cines y a través de Disney+ con Premier Access. Es la primera película en la Fase Cuatro del UCM, y se retrasó tres veces desde la fecha de estreno original de mayo de 2020 debido a la pandemia de COVID-19. Viuda Negra batió varios récords de taquilla en su estreno, y ha recaudado más de $314 millones en todo el mundo, convirtiéndose en la quinta película más taquillera de 2021; también obtuvo $60 millones en ingresos globales de Disney+ en su fin de semana de estreno. La película recibió críticas generalmente favorables por parte de la crítica, con elogios para las actuaciones, en particular de Johansson y Pugh, y las secuencias de acción.`
      },
      {
        nombre: "Batman",
        resumen: "Entrenado desde su niñez con el objetivo de algún día combatir el crimen, Batman representa el pináculo de la perfección humana. Atleta a nivel olímpico.",
        habilidades: "",
        img: "assets/img/batman.jpg",
        aparicion: "1939-05-01",
        casa:"DC",
        wiki:`es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger,13​ y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939.

        La identidad secreta de Batman es Bruce Wayne (Bruno Díaz en algunos países de habla hispana),14​15​16​ un multimillonario magnate empresarial y filántropo dueño de Empresas Wayne en Gotham City. Después de presenciar el asesinato de sus padres, el Dr. Thomas Wayne y Martha Wayne en un violento y fallido asalto cuando era niño, juró venganza contra los criminales, un juramento moderado por el sentido de la justicia. Bruce Wayne se entrena física e intelectualmente y crea un traje inspirado en los murciélagos para combatir el crimen, con sus gadgets de combate del batcinturón y sus vehículos.17​

        A diferencia de los superhéroes, no tiene superpoderes: recurre a su intelecto, así como a aplicaciones científicas y tecnológicas para crear armas y herramientas con las cuales lleva a cabo sus actividades. Vive en la mansión Wayne, en cuyos subterráneos se encuentra la Batcueva, el centro de operaciones de Batman. Recibe la ayuda constante de otros aliados, entre los cuales pueden mencionarse Robin, Batgirl (posteriormente Oráculo), Nightwing, el comisionado de la policía local, James Gordon, y su mayordomo Alfred Pennyworth. Una gran variedad de villanos conforman la galería de Batman, incluido su archienemigo, el Joker.

        Se trata de uno de los personajes más emblemáticos de DC Comics. Dada su buena aceptación, obtuvo su propia revista en 1940. Tres años después, Columbia Pictures estrenó la primera adaptación para la televisión del personaje, a la cual le siguió la serie Batman y Robin, en 1949. A mediados de la década de 1960, se lanzó otra serie titulada Batman, que utilizó un concepto más «camp» que terminó apartándolo de su tono sombrío con el que originalmente fue concebido. Más adelante, los escritores Dennis O'Neil, Neal Adams y Frank Miller produjeron nuevo material escrito sobre el universo de Batman entre los años 1970 y 1980, retomando el diseño y elementos originales de la franquicia. Se considera que la película homónima de Tim Burton, estrenada en 1989, tuvo un papel importante en la popularidad contemporánea del hombre murciélago, al igual que la serie de filmes iniciada con Batman Begins en 2005, dirigida por Christopher Nolan.18​ Además de las anteriores producciones, existen varias otras más en las que el personaje y sus elementos han sido incorporados. El actor Ben Affleck lo interpreta en las películas del Universo extendido de DC Batman v Superman: Dawn of Justice (2016), Escuadrón Suicida (2016) y Liga de la Justicia (2017).`
      },
      {
        nombre: "Daredevil",
        resumen: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiaciÃ³n a niveles superhumanos",
        habilidades: "",
        img: "assets/img/daredevil.png",
        aparicion: "1964-01-01",
        casa: "Marvel",
        wiki:``
      },
      {
        nombre: "Hulk",
        resumen: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prÃ¡cticamente ilimitados a la vez que aumenta su furia. Dependiendo de quÃ© personalidad de Hulk estÃ© al mando en ese momento (el Hulk Banner es el mÃ¡s dÃ©bil, pero lo compensa con su inteligencia).",
        habilidades: "",
        img: "assets/img/hulk.png",
        aparicion: "1962-05-01",
        casa:"Marvel",
        wiki:``
      },
      {
        nombre: "Linterna Verde",
        resumen: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sÃ³lida mediante la utilizaciÃ³n del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder mÃ­stico llamado Starheart), una llama mÃ¡gica contenida en dentro de un orbe ",
        habilidades: "",
        img: "assets/img/linternaV.png",
        aparicion: "1940-06-01",
        casa: "DC",
        wiki:``
      },
      {
        nombre: "Spider-Man",
        resumen: "Tras ser mordido por una araÃ±a radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o mÃ¡s. Gracias a esta gran fuerza Spider-Man puede realizar saltos Ã­ncreibles.",
        habilidades: "",
        img: "assets/img/spiderman.png",
        aparicion: "1962-08-01",
        casa: "Marvel",
        wiki:``
      },
      {
        nombre: "Wolverine",
        resumen: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que Ã©sta sea, ademÃ¡s ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee tambiÃ©n una fuerza sobrehumana, que si bien no se compara con la de otros superhÃ©roes como Hulk, sÃ­ sobrepasa la de cualquier humano.",
        habilidades: "",
        img: "assets/img/wolverine1.png",
        aparicion: "1974-11-01",
        casa: "Marvel",
        wiki:``
      },
      


    ];

    constructor(){
      console.log('Servicio listo para usarse')
    }

    getHeroes():Heroe[]{
      return this.heroes;
    }

    getHeroe(idx:number){
      return this.heroes[idx];
    }

    buscarHeroes( termino:string){

      let heroesArray: Heroe[] = [];
      termino = termino.toLowerCase();

      for(let heroe of this.heroes){

        let name = heroe.nombre.toLowerCase();
        if(name.indexOf(termino) >= 0){
          heroesArray.push(heroe);
        }
      }
      return heroesArray;

    }
 }

  export interface Heroe{
    nombre:string;
    resumen:string;
    img:string;
    aparicion:string;
    casa:string;
    wiki:string;
    habilidades:string;
 }


