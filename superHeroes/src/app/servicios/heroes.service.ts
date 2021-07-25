 import {Injectable} from '@angular/core';

 @Injectable()
 export class HeroesService{

    private heroes:Heroe[] =[
      {
        nombre: "Black Widow",
        bio: `En 1995, los agentes secretos rusos, el supersoldado Alexei Shostakov y la Viuda Negra Melina Vostokoff, se hacen pasar por una familia normal en Ohio con sus hijas de alquiler Natasha Romanoff y Yelena Belova. Cuando la misión de robar información de S.H.I.E.L.D. se completa, la familia escapa a Cuba y se reúne con su jefe, el general Dreykov, que hace que Romanoff y Belova sean llevadas a la Sala Roja para su entrenamiento. Pasan los años y Shostakov es encarcelado en Rusia, mientras que Romanoff deserta a S.H.I.E.L.D. después de bombardear la oficina de Dreykov en Budapest, aparentemente matándolo a él y a su joven hija Antonia; un acto que persigue a Romanoff.

        En 2016, Romanoff es una fugitiva por violar los Acuerdos de Sokovia. Escapa del Secretario de Estado de los Estados Unidos Thaddeus Ross y huye a un piso franco en Noruega suministrado por Rick Mason. Mientras tanto, Belova mata a una ex Viuda Negra renegada, pero entra en contacto con un gas sintético que neutraliza el agente químico de control mental de la Sala Roja. Belova envía el antídoto a Romanoff con la esperanza de que vuelva para ayudar a Belova a liberar a las otras Viudas. Cuando Romanoff se aleja con el antídoto sin saberlo, es atacada por Taskmaster,un asesino especial de la Habitación Roja que copia los poderes de superhéroes y villanos que ve,que la busca. Romanoff consigue escapar de Taskmaster y se da cuenta de que el antídoto procedía de Belova. Las dos se reúnen en Budapest, donde Romanoff se entera de que Dreykov sigue vivo y de que la Sala Roja sigue activa. Poco después, son atacadas por las Viudas Negras, y Romanoff y Belova evaden a las Viudas y a Taskmaster antes de encontrarse con Mason, que les proporciona un helicóptero.

        Romanoff y Belova sacan a Shostakov de la cárcel para conocer la ubicación de Dreykov. Éste les dice que hablen con Vostokoff, que vive en una granja a las afueras de San Petersburgo, donde desarrolló el proceso de control mental químico utilizado en las Viudas. Allí, Belova revela que, aunque no eran una familia real, ella creía que lo eran. Vostokoff admite que envió su ubicación a Dreykov, cuyos agentes llegan y las llevan a la Sala Roja, una instalación aérea.

        Vostokoff y Romanoff utilizan la tecnología de las máscaras faciales para cambiar de lugar antes de ser capturadas, lo que permite a Vostokoff liberar a Shostakov y Belova de sus ataduras. Mientras tanto, Romanoff se enfrenta a Dreykov, que descubre su disfraz. Romanoff se entera de que Taskmaster es Antonia, que sufrió daños tan graves que Dreykov tuvo que ponerle un chip en la cabeza, convirtiéndola en la soldado perfecta, capaz de imitar las acciones de cualquiera que vea, incluidos varios Vengadores. Romanoff intenta matar a Dreykov, pero no consigue dañarlo debido a un bloqueo de feromonas que ha instalado en todas las Viudas. Dreykov revela que controla a las Viudas de todo el mundo a través de la consola de su escritorio. Romanoff se rompe intencionadamente la nariz, seccionando un nervio de su conducto nasal para anular la feromona, y luego ataca a Dreykov. Shostakov lucha contra Taskmaster, mientras Vostokoff destruye uno de los motores de la instalación, y Belova busca a las otras Viudas, que son enviadas para proteger a Dreykov. Juntos, Shostakov y Belova encierran a Taskmaster en una celda.

        Dreykov escapa mientras las Viudas atacan a Romanoff, pero Belova crea una bomba antídoto que libera a las Viudas del control mental. Romanoff se introduce en la mesa de control y copia las ubicaciones de las demás Viudas en todo el mundo mientras la instalación empieza a explotar y a caer. Romanoff recupera los dos viales supervivientes del antídoto y libera a Taskmaster de la celda cerrada. Vostokoff y Shostakov escapan en un avión justo cuando Belova derriba el helicóptero de Dreykov, matándolo. Romanoff le da a Belova un paracaídas antes de enfrentarse a Taskmaster en caída libre. Tras aterrizar, Romanoff utiliza el antídoto en Taskmaster, liberándola de su servidumbre. Las viudas liberadas llegan mientras Belova, Vostokoff y Shostakov se despiden de Romanoff. Ésta le da a Belova el último frasco de antídoto y la unidad portátil, diciéndole que encuentre y libere a las otras Viudas, aún controladas mentalmente. Mientras se van con Antonia, Romanoff espera a Ross y sus hombres, que han llegado para detenerla.

        Dos semanas después, Romanoff se reúne con Mason, que le proporciona un Quinjet. Se marcha con la intención de liberar a los Vengadores detenidos en la Balsa.

        En una escena poscréditos ambientada tras la muerte de Romanoff, Belova se encuentra con la Condesa Valentina Allegra de Fontaine en la tumba de Romanoff. De Fontaine asigna a Clint Barton, al que considera responsable de la muerte de Romanoff, como próximo objetivo de Belova.`,
        img: "assets/img/blackwidow.png",
        aparicion: "1995-11-01",
        casa:"Marvel Studios"
      },
      {
        nombre: "Batman",
        bio: "Los rasgos principales de Batman se resumen en Â«destreza fÃ­sica, habilidades deductivas y obsesiÃ³nÂ». La mayor parte de las caracterÃ­sticas bÃ¡sicas de los cÃ³mics han variado por las diferentes interpretaciones que le han dado al personaje.",
        img: "assets/img/batman.png",
        aparicion: "1939-05-01",
        casa:"DC"
      },
      {
        nombre: "Daredevil",
        bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiaciÃ³n a niveles superhumanos, en el accidente que tuvo cuando era niÃ±o. A pesar de su ceguera, puede \"ver\" a travÃ©s de un \"sexto sentido\" que le sirve como un radar similar al de los murciÃ©lagos.",
        img: "assets/img/daredevil.png",
        aparicion: "1964-01-01",
        casa: "Marvel"
      },
      {
        nombre: "Hulk",
        bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prÃ¡cticamente ilimitados a la vez que aumenta su furia. Dependiendo de quÃ© personalidad de Hulk estÃ© al mando en ese momento (el Hulk Banner es el mÃ¡s dÃ©bil, pero lo compensa con su inteligencia).",
        img: "assets/img/hulk.png",
        aparicion: "1962-05-01",
        casa:"Marvel"
      },
      {
        nombre: "Linterna Verde",
        bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sÃ³lida mediante la utilizaciÃ³n del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder mÃ­stico llamado Starheart), una llama mÃ¡gica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayÃ³ a la Tierra, el cual encontrÃ³ un fabricante de lÃ¡mparas llamado Chang)",
        img: "assets/img/linterna-verde.png",
        aparicion: "1940-06-01",
        casa: "DC"
      },
      {
        nombre: "Spider-Man",
        bio: "Tras ser mordido por una araÃ±a radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o mÃ¡s. Gracias a esta gran fuerza Spider-Man puede realizar saltos Ã­ncreibles. Un \"sentido arÃ¡cnido\", que le permite saber si un peligro se cierne sobre Ã©l, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
        img: "assets/img/spiderman.png",
        aparicion: "1962-08-01",
        casa: "Marvel"
      },
      {
        nombre: "Wolverine",
        bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que Ã©sta sea, ademÃ¡s ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee tambiÃ©n una fuerza sobrehumana, que si bien no se compara con la de otros superhÃ©roes como Hulk, sÃ­ sobrepasa la de cualquier humano.",
        img: "assets/img/wolverine.png",
        aparicion: "1974-11-01",
        casa: "Marvel"
      }
    ];

    constructor(){
      console.log('Servicio listo para usarse')
    }

    getHeroes():Heroe[]{
      return this.heroes;
    }
 }

  export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;

 }


