import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Metodología"
    | "Escritura"
    | "Estadística"
    | "Normas APA"
    | "Sustentación";
  date: string; // ISO
  dateLabel: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  relatedService: { titulo: string; to: string; texto: string };
  blocks: ArticleBlock[];
};

export const CATEGORIES = [
  "Todos",
  "Metodología",
  "Escritura",
  "Estadística",
  "Normas APA",
  "Sustentación",
] as const;

export const articles: Article[] = [
  {
    slug: "como-elegir-tema-tesis-5-criterios",
    title:
      "Cómo elegir el tema de tu tesis: 5 criterios que usan los buenos investigadores",
    excerpt:
      "Elegir bien el tema puede ahorrarte meses de retrabajo. Estos cinco criterios te ayudan a decidir con cabeza fría antes de escribir la primera línea.",
    category: "Metodología",
    date: "2026-06-12",
    dateLabel: "12 de junio de 2026",
    readingMinutes: 7,
    image: blog2,
    imageAlt: "Estudiante analizando temas de investigación",
    relatedService: {
      titulo: "Asesoría de tesis",
      to: "/asesoria-de-tesis",
      texto:
        "Un asesor especializado te ayuda a delimitar tu tema y a planear cada capítulo.",
    },
    blocks: [
      {
        type: "p",
        text: "Casi todas las tesis que se estancan comparten un problema de origen: el tema fue elegido por impulso, por moda o porque el profesor lo sugirió sin más criterio. Después de acompañar a miles de estudiantes, hemos visto que los buenos investigadores aplican, consciente o intuitivamente, cinco filtros antes de comprometerse con un tema. Aplícalos tú también.",
      },
      { type: "h2", id: "interes", text: "1. Interés genuino y sostenido" },
      {
        type: "p",
        text: "Una tesis dura meses. Si el tema no te importa de verdad, cada revisión pesará el doble. Pregúntate: ¿leería sobre esto en mi tiempo libre? ¿podría explicarlo con entusiasmo a un amigo? Un interés real no garantiza rigor, pero sin él el proyecto se vuelve una carga insostenible.",
      },
      {
        type: "quote",
        text: "El mejor combustible metodológico es la curiosidad genuina: sostiene la disciplina cuando la motivación externa se agota.",
      },
      { type: "h2", id: "factibilidad", text: "2. Factibilidad real" },
      {
        type: "p",
        text: "Un buen tema es aquel que efectivamente puedes ejecutar con los recursos que tienes: tiempo, acceso a la población de estudio, permisos institucionales, presupuesto y competencias técnicas. Muchos proyectos ambiciosos fracasan porque nadie preguntó al inicio: ¿podré aplicar 400 encuestas presenciales trabajando en jornada completa?",
      },
      {
        type: "ul",
        items: [
          "¿Tengo acceso a la muestra que necesito?",
          "¿Dispongo de instrumentos o debo diseñarlos?",
          "¿Cuento con software especializado (SPSS, NVivo, AtlasTi)?",
          "¿Me alcanza el semestre para recolectar y analizar datos?",
        ],
      },
      { type: "h2", id: "vacio", text: "3. Vacío o aporte identificable" },
      {
        type: "p",
        text: "Una tesis no repite lo ya dicho: aporta algo. Ese aporte no siempre es un descubrimiento revolucionario; puede ser una nueva población, un contexto local, un instrumento adaptado o una integración teórica. Haz una revisión bibliográfica preliminar en Scopus, Scielo y repositorios universitarios y pregúntate: ¿dónde encaja lo que quiero decir? Si todo ya está dicho, replantea el ángulo.",
      },
      { type: "h2", id: "delimitacion", text: "4. Delimitación estricta" },
      {
        type: "p",
        text: "El tema debe caber en una tesis, no en una enciclopedia. Delimítalo por población, período, lugar y variables específicas. \"Educación en Colombia\" no es un tema; \"factores asociados a la deserción en programas técnicos del SENA en Antioquia entre 2020 y 2024\" sí lo es. Cuanto más específico, más manejable y defendible.",
      },
      { type: "h2", id: "relevancia", text: "5. Relevancia académica y profesional" },
      {
        type: "p",
        text: "Piensa a mediano plazo: ¿este tema me abre puertas? Un buen tema conecta con tu trayectoria profesional, con líneas de investigación de tu programa o con problemáticas reales de tu sector. Además de defenderlo, luego lo podrás capitalizar en artículos, ponencias o entrevistas laborales.",
      },
      { type: "h2", id: "cierre", text: "Antes de escribir la primera línea" },
      {
        type: "p",
        text: "Escribe tu tema en una sola oración y somételo a los cinco filtros. Si alguno falla, ajusta antes de invertir semanas de trabajo. Y recuerda: elegir bien el tema no es un lujo metodológico, es la decisión más rentable de toda tu tesis.",
      },
    ],
  },
  {
    slug: "normas-apa-7-en-10-minutos",
    title: "Normas APA 7 en 10 minutos: los errores que más puntos te quitan",
    excerpt:
      "APA 7 parece infinita, pero el 80% de los descuentos vienen de una decena de errores. Domínalos y tu documento gana profesionalismo al instante.",
    category: "Normas APA",
    date: "2026-06-25",
    dateLabel: "25 de junio de 2026",
    readingMinutes: 8,
    image: blog1,
    imageAlt: "Documento académico con formato APA",
    relatedService: {
      titulo: "Formato y citación APA 7",
      to: "/normas-apa",
      texto:
        "Revisamos el APA 7 de tu documento y te capacitamos para que cites sin errores.",
    },
    blocks: [
      {
        type: "p",
        text: "APA 7 es un estándar internacional que parece complicado hasta que descubres que en la práctica los jurados revisan casi siempre los mismos puntos. Esta guía condensa los errores más frecuentes que vemos en tesis y trabajos de grado, y te da la versión corta y correcta.",
      },
      { type: "h2", id: "formato-general", text: "Formato general del documento" },
      {
        type: "p",
        text: "APA 7 exige interlineado 2.0 en todo el cuerpo (sí, incluso en la lista de referencias), márgenes de 2.54 cm por lado, sangría de 1.27 cm al inicio de cada párrafo y numeración en la esquina superior derecha desde la portada. Fuentes admitidas: Times New Roman 12, Calibri 11, Arial 11, Georgia 11 o Lucida 10. Elige una y respétala en todo el documento.",
      },
      { type: "h2", id: "citas", text: "Citas dentro del texto" },
      {
        type: "p",
        text: "La regla es simple: cita corta (menos de 40 palabras) va entre comillas dentro del párrafo; cita larga va en párrafo aparte, sangría de 1.27 cm y sin comillas. En ambos casos, el paréntesis lleva apellido, año y página.",
      },
      {
        type: "ul",
        items: [
          "Cita narrativa: García (2023) señala que…",
          "Cita entre paréntesis: … (García, 2023, p. 45).",
          "Tres o más autores: (García et al., 2023). Nunca listes a todos.",
          "Cita de cita: evítala; busca la fuente original.",
        ],
      },
      { type: "h2", id: "referencias", text: "Lista de referencias" },
      {
        type: "p",
        text: "El error más común es la incoherencia entre lo citado y lo referenciado: cada cita del texto debe tener su entrada en la lista, y viceversa. Ordena alfabéticamente, aplica sangría francesa (colgante) y usa cursivas solo en el título de la obra o de la revista, según el tipo de fuente.",
      },
      {
        type: "quote",
        text: "Si algo aparece en tus referencias pero no en el texto, sobra. Si algo aparece en el texto pero no en las referencias, es un descuento seguro.",
      },
      { type: "h2", id: "dois", text: "DOI y enlaces" },
      {
        type: "p",
        text: "APA 7 pide incluir DOI como hipervínculo (https://doi.org/...) siempre que exista. Para fuentes web sin DOI, se incluye la URL directa. Ya no se antepone \"Recuperado de\" salvo cuando el contenido puede cambiar (por ejemplo, un tuit o una entrada de Wikipedia).",
      },
      { type: "h2", id: "tablas-figuras", text: "Tablas y figuras" },
      {
        type: "p",
        text: "Cada tabla y figura debe estar numerada (Tabla 1, Figura 1), tener un título en cursiva debajo del número y una nota de fuente si no es de elaboración propia. Se referencian en el texto por su número (\"como se observa en la Tabla 3\"), no por su ubicación (\"en la tabla de abajo\").",
      },
      { type: "h2", id: "portada", text: "Portada versión estudiante" },
      {
        type: "p",
        text: "APA 7 introdujo la portada versión estudiante: título centrado en la mitad superior, nombre del autor, filiación institucional, código del curso, nombre del profesor y fecha. Sin encabezado de cornisa (running head), que en la versión estudiante se elimina.",
      },
      { type: "h2", id: "checklist", text: "Checklist final antes de entregar" },
      {
        type: "ol",
        items: [
          "Fuente y tamaño consistentes en todo el documento.",
          "Todas las citas del texto están en la lista de referencias.",
          "Referencias con sangría francesa y ordenadas alfabéticamente.",
          "DOIs como hipervínculos vivos.",
          "Tablas y figuras numeradas y con nota de fuente.",
          "Portada versión estudiante correcta.",
        ],
      },
      {
        type: "p",
        text: "Con estos ajustes te ahorras el 80% de los descuentos por forma. Y sí, vale la pena revisarlo antes: entregar impecable transmite rigor incluso antes de que el jurado empiece a leer el contenido.",
      },
    ],
  },
  {
    slug: "que-prueba-estadistica-usar-en-tu-tesis",
    title: "Qué prueba estadística usar en tu tesis: guía simple para no estadísticos",
    excerpt:
      "Elegir la prueba equivocada invalida meses de trabajo. Con estas cuatro preguntas y un mapa mental sabrás por dónde empezar sin ser estadístico.",
    category: "Estadística",
    date: "2026-07-04",
    dateLabel: "4 de julio de 2026",
    readingMinutes: 9,
    image: blog3,
    imageAlt: "Gráficos estadísticos en pantalla",
    relatedService: {
      titulo: "Análisis estadístico con SPSS",
      to: "/analisis-estadistico-spss",
      texto:
        "Te capacitamos para procesar e interpretar tus datos con solvencia.",
    },
    blocks: [
      {
        type: "p",
        text: "La pregunta más común en asesoría estadística no es cómo se corre una prueba en SPSS, sino cuál corresponde. Y no es un misterio: elegir la prueba adecuada depende de responder ordenadamente cuatro preguntas. Esta guía es un mapa mental, no un curso, pero te evitará el error más caro de una tesis cuantitativa.",
      },
      { type: "h2", id: "objetivo", text: "1. ¿Qué quieres saber?" },
      {
        type: "p",
        text: "Empieza por el objetivo, no por el dato. Toda pregunta cuantitativa cae en una de tres familias: describir un fenómeno, comparar grupos o poblaciones, o establecer una relación entre variables. Si tu objetivo es describir, las medidas descriptivas y las frecuencias son suficientes. Si es comparar o relacionar, necesitarás inferencia estadística.",
      },
      { type: "h2", id: "variables", text: "2. ¿Qué tipo de variables tienes?" },
      {
        type: "p",
        text: "El tipo de variable determina la familia de pruebas. Simplifica así: cualitativa (nominal u ordinal) o cuantitativa (intervalar o de razón). No mezcles: una escala Likert de 5 puntos puede tratarse como ordinal (más conservador) o como cuantitativa (más común en la práctica), pero elige y justifícalo.",
      },
      {
        type: "ul",
        items: [
          "Comparar promedios entre dos grupos: t de Student (paramétrica) o U de Mann-Whitney (no paramétrica).",
          "Comparar promedios entre tres o más grupos: ANOVA o Kruskal-Wallis.",
          "Relacionar dos variables cuantitativas: correlación de Pearson o Spearman.",
          "Relacionar dos variables cualitativas: Chi cuadrado.",
          "Predecir: regresión lineal, logística o múltiple según el caso.",
        ],
      },
      { type: "h2", id: "supuestos", text: "3. ¿Se cumplen los supuestos?" },
      {
        type: "p",
        text: "Las pruebas paramétricas (t, ANOVA, Pearson, regresión) exigen normalidad de los datos, homogeneidad de varianzas y una muestra razonable. Verifícalo con Kolmogorov-Smirnov o Shapiro-Wilk y con Levene. Si no se cumplen, usa el equivalente no paramétrico y no fuerces el resultado: el jurado leerá tu prueba de normalidad.",
      },
      {
        type: "quote",
        text: "Correr una t de Student sin comprobar normalidad es como ganar un partido sin árbitro: el resultado no cuenta.",
      },
      { type: "h2", id: "muestra", text: "4. ¿De qué tamaño es tu muestra?" },
      {
        type: "p",
        text: "Muestras pequeñas (n<30) sesgan hacia pruebas no paramétricas. Muestras grandes toleran análisis más complejos como ANOVA factorial, regresión logística o modelos multivariados. Además, calcula desde el inicio el tamaño mínimo con una fórmula muestral: te ahorrará que un jurado te cuestione la representatividad.",
      },
      { type: "h2", id: "mapa", text: "Mapa rápido de decisión" },
      {
        type: "ol",
        items: [
          "Describir → media, mediana, moda, frecuencias, tablas de contingencia.",
          "Comparar 2 grupos cuantitativos → t o U de Mann-Whitney.",
          "Comparar 3+ grupos cuantitativos → ANOVA o Kruskal-Wallis + post hoc.",
          "Relación cuanti-cuanti → Pearson o Spearman según normalidad.",
          "Relación cuali-cuali → Chi cuadrado (+ V de Cramer para tamaño de efecto).",
          "Predicción con desenlace continuo → regresión lineal múltiple.",
          "Predicción con desenlace binario → regresión logística.",
        ],
      },
      { type: "h2", id: "interpretacion", text: "Interpretar, no solo reportar" },
      {
        type: "p",
        text: "Una tabla de SPSS no defiende tu tesis: la defiende tu lectura de esa tabla. Reporta siempre valor del estadístico, grados de libertad, valor p y tamaño de efecto. Y traduce a lenguaje natural: qué significa en tu problema real. Un p<0.05 sin interpretación no dice nada; un tamaño de efecto explicado dice todo.",
      },
      {
        type: "p",
        text: "Si respondes las cuatro preguntas y sigues el mapa, tomarás decisiones estadísticas defendibles aunque no seas estadístico. Y si te queda una duda, acompáñate: elegir mal la prueba puede costarte semanas de reanálisis que un asesor experimentado detecta en 15 minutos.",
      },
    ],
  },
  {
    slug: "como-empezar-trabajo-de-grado-guia-paso-a-paso",
    title: "¿Cómo empezar un trabajo de grado? Guía paso a paso para universitarios",
    excerpt:
      "Del tema difuso al problema bien planteado. Una ruta ordenada para arrancar tu trabajo de grado sin dar vueltas en círculos.",
    category: "Metodología",
    date: "2026-07-15",
    dateLabel: "15 de julio de 2026",
    readingMinutes: 8,
    image: blog2,
    imageAlt: "Estudiante organizando el inicio de su trabajo de grado",
    relatedService: {
      titulo: "Asesoría de trabajos de grado",
      to: "/asesoria-trabajos-de-grado",
      texto:
        "Te acompañamos desde la elección del tema hasta la sustentación con un plan de trabajo realista.",
    },
    blocks: [
      {
        type: "p",
        text: "Empezar un trabajo de grado es la etapa donde más estudiantes se traban: no por falta de capacidad, sino por falta de método. Esta guía ordena el arranque en pasos concretos para que salgas de la hoja en blanco con un problema bien planteado y un plan realista.",
      },
      { type: "h2", id: "linea", text: "1. Ubica tu línea de investigación" },
      {
        type: "p",
        text: "Antes de pensar en el tema, revisa las líneas de investigación de tu programa. Cada facultad publica un documento con áreas prioritarias: encajar allí te facilita conseguir asesor, jurados afines y bibliografía accesible. Trabajar por fuera de la línea es posible, pero cuesta el triple.",
      },
      { type: "h2", id: "tema", text: "2. Aterriza el tema desde tu interés real" },
      {
        type: "p",
        text: "Escribe tres áreas que te interesen profesionalmente y crúzalas con problemáticas actuales de tu contexto. Ese cruce es la mina donde vive tu tema. No busques originalidad absoluta: busca especificidad y pertinencia.",
      },
      { type: "h2", id: "revision", text: "3. Haz una revisión bibliográfica preliminar" },
      {
        type: "p",
        text: "Antes de escribir una palabra, dedica una semana a mapear qué se ha dicho sobre tu tema. Usa Scopus, Scielo, Google Scholar y los repositorios de tu universidad. Guarda cada referencia en Zotero o Mendeley desde el día uno; agradecerás no reconstruirlas al final.",
      },
      {
        type: "ul",
        items: [
          "Filtra por publicaciones de los últimos 5 años.",
          "Prioriza revistas indexadas sobre blogs y notas de opinión.",
          "Registra el hallazgo clave de cada texto en una frase.",
          "Identifica autores que se repiten: son tus referentes obligados.",
        ],
      },
      { type: "h2", id: "problema", text: "4. Formula el problema de investigación" },
      {
        type: "p",
        text: "El problema no es tu tema: es la tensión o vacío que quieres resolver dentro de él. Redáctalo en una pregunta clara, delimitada por población, tiempo y lugar. Si no cabe en una oración, todavía no está listo.",
      },
      {
        type: "quote",
        text: "Un problema bien formulado ya contiene la mitad de la metodología. Uno mal formulado te obliga a improvisar hasta la sustentación.",
      },
      { type: "h2", id: "objetivos", text: "5. Deriva objetivos y justificación" },
      {
        type: "p",
        text: "El objetivo general responde directamente a tu pregunta. Los específicos son los pasos concretos para lograrlo, en verbos observables (analizar, identificar, comparar). La justificación explica por qué vale la pena hacerlo desde lo académico, lo social y lo personal.",
      },
      { type: "h2", id: "cronograma", text: "6. Diseña un cronograma honesto" },
      {
        type: "p",
        text: "Divide el semestre en bloques: marco teórico, metodología, trabajo de campo, análisis y redacción final. Asigna fechas conservadoras y bloquea horas fijas por semana. Un trabajo de grado no se hace en atracones: se hace en sesiones cortas, sostenidas y protegidas del ruido.",
      },
      {
        type: "p",
        text: "Si sigues estos seis pasos antes de empezar a redactar, arrancas con brújula y no con improvisación. Y si en algún punto te trabas, pedir asesoría a tiempo es mucho más barato que reescribir capítulos enteros al final.",
      },
    ],
  },
  {
    slug: "10-errores-mas-comunes-al-hacer-una-tesis",
    title: "Los 10 errores más comunes al hacer una tesis (y cómo evitarlos)",
    excerpt:
      "De temas gigantes a marcos teóricos copiados: los errores que más frenan tesis en pregrado y posgrado, con la forma corta de evitarlos.",
    category: "Metodología",
    date: "2026-07-22",
    dateLabel: "22 de julio de 2026",
    readingMinutes: 9,
    image: blog1,
    imageAlt: "Estudiante revisando errores en su tesis",
    relatedService: {
      titulo: "Asesoría de tesis",
      to: "/asesoria-de-tesis",
      texto:
        "Un asesor experimentado detecta estos errores antes de que te cuesten semanas de retrabajo.",
    },
    blocks: [
      {
        type: "p",
        text: "Después de acompañar tesis en pregrado, maestría y doctorado, los errores se repiten con una regularidad casi cómica. La buena noticia: son evitables si los conoces desde el inicio. Estos son los diez que más frenan procesos y la versión corta de cómo esquivarlos.",
      },
      { type: "h2", id: "e1", text: "1. Elegir un tema demasiado amplio" },
      {
        type: "p",
        text: "\"La educación en Colombia\" no es un tema, es una enciclopedia. Delimita por población, período, lugar y variable. Cuanto más específico, más manejable y defendible.",
      },
      { type: "h2", id: "e2", text: "2. Empezar a escribir sin revisión bibliográfica" },
      {
        type: "p",
        text: "Redactar antes de leer es la receta perfecta para reescribir todo. Dedica dos o tres semanas a mapear qué se ha dicho antes de proponer tu enfoque.",
      },
      { type: "h2", id: "e3", text: "3. Confundir problema con tema" },
      {
        type: "p",
        text: "El tema es el terreno; el problema es la tensión concreta dentro de él. Sin esa distinción, la pregunta de investigación queda genérica y la metodología no aterriza.",
      },
      { type: "h2", id: "e4", text: "4. Copiar y pegar el marco teórico" },
      {
        type: "p",
        text: "El marco teórico no es un collage de definiciones: es una conversación entre autores que sostiene tu propia postura. Si no aparece tu voz articulando, es solo transcripción.",
      },
      { type: "h2", id: "e5", text: "5. Objetivos que no dialogan con la metodología" },
      {
        type: "p",
        text: "Si tu objetivo dice \"analizar\" pero tu metodología solo describe, hay incoherencia. Cada objetivo específico debe tener una técnica asociada y un producto verificable.",
      },
      { type: "h2", id: "e6", text: "6. Muestras improvisadas" },
      {
        type: "p",
        text: "\"Encuesté a 30 personas porque me alcanzó el tiempo\" no es un criterio muestral. Justifica el tamaño con fórmula o con saturación teórica, según el enfoque.",
      },
      { type: "h2", id: "e7", text: "7. Elegir mal la prueba estadística" },
      {
        type: "p",
        text: "Correr una t de Student sin verificar normalidad o usar Chi cuadrado con celdas vacías invalida el análisis. Antes de calcular, revisa supuestos.",
      },
      { type: "h2", id: "e8", text: "8. Descuidar normas APA hasta el final" },
      {
        type: "p",
        text: "Aplicar APA al cierre convierte la última semana en un infierno. Configura estilos, plantillas y gestor bibliográfico desde el primer capítulo.",
      },
      { type: "h2", id: "e9", text: "9. Trabajar sin cronograma real" },
      {
        type: "p",
        text: "Sin fechas, la tesis se estira hasta ocupar todo el tiempo disponible. Bloquea horas semanales fijas y protégelas como si fueran una clase.",
      },
      { type: "h2", id: "e10", text: "10. Llegar a la sustentación sin ensayar" },
      {
        type: "p",
        text: "La calidad del documento no garantiza la calidad de la defensa. Simula al menos tres veces con público y cronómetro; los jurados notan la diferencia.",
      },
      {
        type: "quote",
        text: "La mayoría de las tesis no fracasan por falta de talento, sino por falta de método. Y el método se puede aprender.",
      },
      {
        type: "p",
        text: "Si revisas esta lista antes de cada capítulo, te ahorras entre semanas y meses de retrabajo. Y si detectas que ya caíste en dos o tres, la buena noticia es que casi todos son reversibles: se ajustan con orden, no con más esfuerzo.",
      },
    ],
  },
  {
    slug: "diferencia-trabajo-de-grado-tesis-monografia",
    title: "¿Cuál es la diferencia entre un trabajo de grado, una tesis y una monografía?",
    excerpt:
      "Los tres términos se usan como sinónimos, pero exigen alcances muy distintos. Aprende a distinguirlos para no comprometer más de lo que tu carrera pide.",
    category: "Metodología",
    date: "2026-07-29",
    dateLabel: "29 de julio de 2026",
    readingMinutes: 6,
    image: blog3,
    imageAlt: "Libros académicos comparando tipos de trabajos",
    relatedService: {
      titulo: "Asesoría de monografías",
      to: "/asesoria-monografias",
      texto:
        "Definimos contigo el formato correcto según tu nivel académico y reglamento.",
    },
    blocks: [
      {
        type: "p",
        text: "\"Estoy haciendo mi tesis\" es una frase que en Colombia usan por igual estudiantes de pregrado, maestría y doctorado. Y sin embargo, cada uno debería estar haciendo algo distinto. Aclarar los términos evita comprometerte con un alcance que tu reglamento no exige y prepara mejor tu defensa.",
      },
      { type: "h2", id: "trabajo", text: "Trabajo de grado" },
      {
        type: "p",
        text: "Es el término genérico que designa el requisito final para obtener un título de pregrado o especialización. Puede tomar múltiples formatos: monografía, proyecto aplicado, sistematización de práctica, artículo, plan de negocios o pasantía. Su exigencia es demostrar dominio de la disciplina, no necesariamente producir conocimiento nuevo.",
      },
      { type: "h2", id: "monografia", text: "Monografía" },
      {
        type: "p",
        text: "Es un tipo específico de trabajo de grado (y también un formato posible en posgrado) centrado en el análisis documental profundo de un tema. No exige trabajo de campo ni recolección primaria de datos: exige rigor bibliográfico, capacidad de síntesis y una postura argumentada del autor. Es ideal cuando el interés está en revisar, comparar o sistematizar lo ya publicado.",
      },
      { type: "h2", id: "tesis", text: "Tesis" },
      {
        type: "p",
        text: "En sentido estricto, tesis es el trabajo de grado propio de maestría (tesis de maestría) y doctorado (tesis doctoral). Su rasgo distintivo es defender una postura original ante la comunidad académica, aportando conocimiento nuevo mediante investigación empírica, teórica o aplicada. Exige revisión bibliográfica exhaustiva, marco teórico sólido, metodología formal y discusión de resultados.",
      },
      {
        type: "quote",
        text: "En pregrado se demuestra que se aprendió; en maestría, que se sabe investigar; en doctorado, que se aporta algo que antes no existía.",
      },
      { type: "h2", id: "practico", text: "¿Cómo saber cuál te toca?" },
      {
        type: "ul",
        items: [
          "Lee tu reglamento de trabajo de grado: allí está la respuesta oficial.",
          "Consulta al coordinador de programa antes de decidir el formato.",
          "Revisa trabajos aprobados de años recientes de tu misma facultad.",
          "Ajusta el alcance a lo que tu nivel exige, ni menos ni más.",
        ],
      },
      {
        type: "p",
        text: "Comprometerte con una tesis doctoral cuando tu programa pide una monografía es un error caro; a la inversa, entregar una monografía cuando el reglamento pide una tesis es un rechazo casi seguro. Aclarar el formato desde el inicio ahorra meses de retrabajo.",
      },
    ],
  },
  {
    slug: "elegir-tema-de-investigacion-en-una-semana",
    title: "Cómo elegir un buen tema de investigación en menos de una semana",
    excerpt:
      "Un método de 7 días para pasar del \"no sé de qué hacer la tesis\" a un tema delimitado y defendible, con ejemplos por carreras.",
    category: "Metodología",
    date: "2026-08-05",
    dateLabel: "5 de agosto de 2026",
    readingMinutes: 7,
    image: blog2,
    imageAlt: "Estudiante decidiendo tema de investigación",
    relatedService: {
      titulo: "Asesoría de tesis",
      to: "/asesoria-de-tesis",
      texto:
        "Te ayudamos a delimitar tu tema en sesiones cortas y decisivas.",
    },
    blocks: [
      {
        type: "p",
        text: "Elegir tema puede paralizar meses enteros si lo tratas como una decisión metafísica. Trátalo como un proceso de siete días y avanzarás. Este es un método probado con estudiantes de distintas carreras.",
      },
      { type: "h2", id: "d1", text: "Día 1: inventario de intereses" },
      {
        type: "p",
        text: "Escribe sin filtro veinte temas, autores, materias o problemáticas que te importen. No censures nada. El objetivo es tener materia prima, no la respuesta final.",
      },
      { type: "h2", id: "d2", text: "Día 2: cruce con tu carrera" },
      {
        type: "p",
        text: "Tacha los que no se conectan con tu disciplina. Marca los tres que te resultan más atractivos y que además tienen sentido dentro de tu programa.",
      },
      { type: "h2", id: "d3", text: "Día 3: exploración bibliográfica rápida" },
      {
        type: "p",
        text: "Busca cada uno de los tres en Scopus y Scielo. Si un tema tiene 20.000 resultados es demasiado amplio; si tiene 3, probablemente sea inviable. Busca la zona intermedia.",
      },
      { type: "h2", id: "d4", text: "Día 4: delimitación por variables" },
      {
        type: "p",
        text: "Toma los dos temas sobrevivientes y delimítalos por población, período, lugar y variable. Ejemplo: de \"salud mental\" a \"ansiedad en estudiantes de enfermería de Bogotá durante prácticas hospitalarias, 2023-2025\".",
      },
      { type: "h2", id: "d5", text: "Día 5: prueba de factibilidad" },
      {
        type: "p",
        text: "¿Tienes acceso a la muestra? ¿Existen instrumentos? ¿Cabe en el tiempo disponible? Si algún tema falla en factibilidad, descártalo aunque te encante.",
      },
      { type: "h2", id: "d6", text: "Día 6: consulta con dos personas" },
      {
        type: "p",
        text: "Presenta el tema en una oración a un docente y a un profesional del área. Sus reacciones (dudas, entusiasmo, preguntas) te muestran huecos que solo desde afuera se ven.",
      },
      { type: "h2", id: "d7", text: "Día 7: compromiso y planeación mínima" },
      {
        type: "p",
        text: "Elige. Escribe un párrafo de justificación, tres objetivos tentativos y una pregunta de investigación provisional. Ya tienes con qué empezar; el resto se refina en marcha.",
      },
      { type: "h2", id: "ejemplos", text: "Ejemplos por carreras" },
      {
        type: "ul",
        items: [
          "Psicología: burnout en docentes de colegios públicos de Medellín tras la pandemia.",
          "Administración: rotación de personal en pymes del sector gastronómico de Cali.",
          "Ingeniería civil: comportamiento estructural de viviendas informales en laderas de Manizales.",
          "Derecho: aplicación del enfoque diferencial étnico en tutelas de salud, 2022-2025.",
          "Comunicación: representación de la migración venezolana en medios digitales colombianos.",
        ],
      },
      {
        type: "p",
        text: "En siete días no eliges el tema perfecto: eliges uno defendible. Y esa es la diferencia entre avanzar y quedarte otro semestre buscando la idea genial que nunca llega.",
      },
    ],
  },
  {
    slug: "normas-apa-7-guia-practica-con-ejemplos",
    title: "Normas APA 7: guía práctica con ejemplos actualizados",
    excerpt:
      "Los formatos APA 7 que sí vas a usar en tu tesis, con ejemplos reales de libros, artículos, sitios web, redes sociales y documentos oficiales.",
    category: "Normas APA",
    date: "2026-08-12",
    dateLabel: "12 de agosto de 2026",
    readingMinutes: 8,
    image: blog1,
    imageAlt: "Ejemplos de citación en normas APA 7",
    relatedService: {
      titulo: "Formato y citación APA 7",
      to: "/normas-apa",
      texto:
        "Revisamos el APA 7 de tu documento y te explicamos cada ajuste.",
    },
    blocks: [
      {
        type: "p",
        text: "Los manuales de APA 7 son gigantes, pero en la práctica vas a usar diez o quince formatos como máximo. Esta guía te da los ejemplos actualizados de lo que realmente aparece en una tesis colombiana promedio.",
      },
      { type: "h2", id: "libro", text: "Libro con un autor" },
      {
        type: "p",
        text: "Apellido, Inicial. (Año). Título del libro en cursiva. Editorial. Ejemplo: Sampieri, R. (2020). Metodología de la investigación. McGraw-Hill.",
      },
      { type: "h2", id: "capitulo", text: "Capítulo de libro editado" },
      {
        type: "p",
        text: "Ejemplo: Bonilla, E. (2022). Enfoques mixtos en ciencias sociales. En J. Torres (Ed.), Investigación social contemporánea (pp. 45-72). Universidad Nacional de Colombia.",
      },
      { type: "h2", id: "articulo", text: "Artículo de revista científica" },
      {
        type: "p",
        text: "Ejemplo: Ramírez, C., & Duque, M. (2024). Deserción universitaria en programas técnicos. Revista Colombiana de Educación, 88(2), 112-134. https://doi.org/10.17227/rce.88.2.112",
      },
      { type: "h2", id: "web", text: "Página web institucional" },
      {
        type: "p",
        text: "Ejemplo: Ministerio de Educación Nacional. (2025, 12 de marzo). Estadísticas de matrícula 2024. https://www.mineducacion.gov.co/estadisticas-2024",
      },
      { type: "h2", id: "tesis", text: "Tesis de repositorio" },
      {
        type: "p",
        text: "Ejemplo: Gómez, L. (2023). Factores asociados al rendimiento académico en ingeniería [Tesis de maestría, Universidad de los Andes]. Repositorio institucional Uniandes. https://repositorio.uniandes.edu.co/handle/1992/12345",
      },
      { type: "h2", id: "redes", text: "Publicación en redes sociales" },
      {
        type: "p",
        text: "APA 7 sí permite citar redes. Ejemplo: Presidencia de Colombia [@infopresidencia]. (2025, 5 de febrero). Anuncio de política educativa [Publicación]. X. https://x.com/infopresidencia/status/…",
      },
      { type: "h2", id: "ley", text: "Ley o norma jurídica colombiana" },
      {
        type: "p",
        text: "Ejemplo: Congreso de la República de Colombia. (2012, 17 de octubre). Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial No. 48.587.",
      },
      { type: "h2", id: "citas", text: "Citas en el texto" },
      {
        type: "ul",
        items: [
          "Un autor: (Ramírez, 2024) o Ramírez (2024) señala…",
          "Dos autores: (Ramírez & Duque, 2024).",
          "Tres o más autores desde la primera cita: (Ramírez et al., 2024).",
          "Cita textual corta: … (Ramírez, 2024, p. 45).",
          "Cita textual larga (40+ palabras): párrafo aparte con sangría, sin comillas.",
        ],
      },
      {
        type: "quote",
        text: "APA 7 no premia al que se sabe el manual: premia al que aplica los diez formatos correctos en todo el documento sin contradecirse.",
      },
      {
        type: "p",
        text: "Configura tu gestor bibliográfico (Zotero o Mendeley) desde el primer capítulo con la plantilla APA 7 y evitarás pasar los últimos tres días de la tesis peleando con puntos y comas.",
      },
    ],
  },
  {
    slug: "que-es-el-marco-teorico-y-como-escribirlo",
    title: "¿Qué es el marco teórico y cómo escribirlo correctamente?",
    excerpt:
      "El marco teórico no es un resumen de libros: es la conversación de autores que sostiene tu postura. Estructura, pasos y errores comunes.",
    category: "Escritura",
    date: "2026-08-19",
    dateLabel: "19 de agosto de 2026",
    readingMinutes: 8,
    image: blog3,
    imageAlt: "Estructura de un marco teórico",
    relatedService: {
      titulo: "Revisión bibliográfica",
      to: "/revision-bibliografica",
      texto:
        "Te ayudamos a mapear la literatura y a construir un marco teórico coherente.",
    },
    blocks: [
      {
        type: "p",
        text: "El marco teórico es el capítulo donde más tesis se atascan porque suele confundirse con un compilado de definiciones. En realidad es otra cosa: es la conversación entre autores que sostiene tu problema y prepara tu metodología. Aquí la estructura clara y los errores frecuentes.",
      },
      { type: "h2", id: "funcion", text: "¿Para qué sirve?" },
      {
        type: "p",
        text: "Cumple tres funciones inseparables: (1) demostrar que conoces lo que se ha dicho sobre tu tema, (2) justificar los conceptos y variables que usas y (3) mostrar el vacío o tensión que tu investigación viene a llenar. Sin las tres, no es marco teórico: es apuntes de clase.",
      },
      { type: "h2", id: "estructura", text: "Estructura recomendada" },
      {
        type: "ol",
        items: [
          "Antecedentes: investigaciones previas relevantes (internacional, nacional, local).",
          "Bases teóricas: teorías y modelos que sustentan tu enfoque.",
          "Bases conceptuales: definiciones operativas de tus variables clave.",
          "Marco legal o institucional (si aplica): normas, políticas o lineamientos.",
          "Cierre integrador: síntesis de cómo esta base sostiene tu problema.",
        ],
      },
      { type: "h2", id: "pasos", text: "Cómo escribirlo paso a paso" },
      {
        type: "p",
        text: "Primero, mapea al menos 30 fuentes recientes en tu gestor bibliográfico. Segundo, agrúpalas por tema y por enfoque. Tercero, redacta cada apartado como una conversación: qué dice el autor A, cómo dialoga con B, dónde se separa de C y dónde entras tú. Cuarto, cierra cada sección con una frase que conecte con tu problema.",
      },
      {
        type: "quote",
        text: "Un buen marco teórico se lee como una mesa redonda entre autores que tú moderas. Uno malo se lee como una lista de definiciones encadenadas.",
      },
      { type: "h2", id: "errores", text: "Errores más comunes" },
      {
        type: "ul",
        items: [
          "Copiar y pegar definiciones de diccionarios en línea.",
          "Citar 40 autores sin articular sus posturas entre sí.",
          "Incluir teorías que después no se usan en la metodología.",
          "Confundir marco teórico con marco histórico o estado del arte.",
          "Redactar en pasado sin voz propia: solo transcripción.",
        ],
      },
      { type: "h2", id: "extension", text: "¿Cuánto debe medir?" },
      {
        type: "p",
        text: "En pregrado, entre 15 y 25 páginas suele ser suficiente. En maestría, entre 25 y 45. En doctorado, no hay techo pero sí una regla: cada página debe estar justificada por su aporte al problema. Extenderse sin criterio no suma; resta.",
      },
      {
        type: "p",
        text: "Un marco teórico bien construido no solo aprueba: te vuelve la vida más fácil en el resto del documento porque ya tienes definiciones claras, autores mapeados y una postura visible. La metodología, entonces, casi se escribe sola.",
      },
    ],
  },
  {
    slug: "como-redactar-objetivos-generales-y-especificos",
    title: "Cómo redactar objetivos generales y específicos sin equivocarte",
    excerpt:
      "El error más frecuente en tesis es tener objetivos que no dialogan con la pregunta ni con la metodología. Fórmulas simples y ejemplos por área.",
    category: "Escritura",
    date: "2026-08-26",
    dateLabel: "26 de agosto de 2026",
    readingMinutes: 7,
    image: blog2,
    imageAlt: "Redacción de objetivos de investigación",
    relatedService: {
      titulo: "Asesoría de tesis",
      to: "/asesoria-de-tesis",
      texto:
        "Revisamos y afinamos tus objetivos para que sostengan toda la investigación.",
    },
    blocks: [
      {
        type: "p",
        text: "Los objetivos son la columna vertebral de la tesis: si están mal formulados, toda la metodología cojea. Y sin embargo, es donde más estudiantes improvisan. Estas fórmulas te ayudan a redactarlos sin ambigüedad.",
      },
      { type: "h2", id: "general", text: "Objetivo general" },
      {
        type: "p",
        text: "Debe responder directamente a tu pregunta de investigación. Uno solo, redactado con un verbo en infinitivo, delimitado por población, tiempo y lugar. Fórmula: Verbo + objeto de estudio + población + contexto + propósito.",
      },
      {
        type: "p",
        text: "Ejemplo: Analizar los factores asociados a la deserción académica en estudiantes de programas técnicos del SENA Antioquia entre 2020 y 2024, con el fin de proponer estrategias de retención.",
      },
      { type: "h2", id: "especificos", text: "Objetivos específicos" },
      {
        type: "p",
        text: "Son los pasos concretos para lograr el general. Entre tres y cinco, jamás decorativos. Cada uno debe corresponder a una acción metodológica verificable y producir un entregable identificable en el documento final.",
      },
      {
        type: "ul",
        items: [
          "Identificar los factores individuales asociados a la deserción.",
          "Describir los factores institucionales y académicos involucrados.",
          "Comparar patrones de deserción entre modalidades presencial y virtual.",
          "Proponer lineamientos de retención basados en los hallazgos.",
        ],
      },
      { type: "h2", id: "verbos", text: "Verbos recomendados por nivel" },
      {
        type: "p",
        text: "Usa la taxonomía de Bloom como referencia. Para pregrado se aceptan verbos de conocimiento y aplicación (identificar, describir, analizar). En maestría se esperan verbos de análisis y evaluación (comparar, evaluar, proponer). En doctorado, verbos de creación (formular, diseñar, teorizar).",
      },
      {
        type: "quote",
        text: "Un objetivo que empieza con \"conocer\" o \"entender\" no se puede medir. Y lo que no se puede medir no se puede defender en sustentación.",
      },
      { type: "h2", id: "errores", text: "Errores frecuentes" },
      {
        type: "ul",
        items: [
          "Objetivos que repiten con otras palabras la pregunta de investigación.",
          "Verbos difusos: conocer, entender, saber, aprender.",
          "Objetivos específicos que no se corresponden con ningún capítulo.",
          "Redactar más de cinco específicos y no cumplir la mitad.",
          "Objetivos que exigen un alcance mayor al del nivel académico.",
        ],
      },
      { type: "h2", id: "prueba", text: "Prueba final: coherencia interna" },
      {
        type: "p",
        text: "Pon en una tabla tres columnas: objetivo específico, técnica metodológica, capítulo donde se responde. Si alguna fila queda vacía, hay incoherencia. Corrígela antes de avanzar; después es mucho más caro.",
      },
      {
        type: "p",
        text: "Objetivos bien formulados vuelven la tesis casi autoescribible: cada capítulo sabe a qué responde y cada resultado tiene un lugar claro. Es el capital metodológico más rentable de todo el proceso.",
      },
    ],
  },
  {
    slug: "cuanto-tiempo-tarda-hacer-un-trabajo-de-grado",
    title: "¿Cuánto tiempo tarda realmente hacer un trabajo de grado?",
    excerpt:
      "Un desglose honesto por etapas y consejos de planificación para que no llegues al último mes con la mitad del documento pendiente.",
    category: "Metodología",
    date: "2026-09-02",
    dateLabel: "2 de septiembre de 2026",
    readingMinutes: 7,
    image: blog1,
    imageAlt: "Cronograma de trabajo de grado",
    relatedService: {
      titulo: "Asesoría de trabajos de grado",
      to: "/asesoria-trabajos-de-grado",
      texto:
        "Diseñamos contigo un cronograma realista y te acompañamos a cumplirlo.",
    },
    blocks: [
      {
        type: "p",
        text: "La pregunta \"¿cuánto me demoro?\" no tiene una respuesta única, pero sí una respuesta honesta por etapas. Estos son los tiempos promedio que vemos en estudiantes que trabajan además de estudiar, y consejos para no colapsar en el último mes.",
      },
      { type: "h2", id: "tema", text: "Elección y delimitación del tema (2-3 semanas)" },
      {
        type: "p",
        text: "Aunque parezca poco, es la etapa donde más gente pierde meses. Si te tomas más de tres semanas, probablemente estás huyendo de decidir, no investigando.",
      },
      { type: "h2", id: "marco", text: "Revisión bibliográfica y marco teórico (4-6 semanas)" },
      {
        type: "p",
        text: "Mapear la literatura, leer, tomar notas y redactar el marco teórico consume el bloque más largo. Trabajar con Zotero o Mendeley desde el día uno reduce este tiempo entre 20% y 30%.",
      },
      { type: "h2", id: "metodo", text: "Diseño metodológico (2-3 semanas)" },
      {
        type: "p",
        text: "Definir enfoque, muestra, instrumentos y análisis. Es rápido si el marco teórico está bien; interminable si no lo está. La coherencia interna se paga aquí.",
      },
      { type: "h2", id: "campo", text: "Trabajo de campo y recolección (4-8 semanas)" },
      {
        type: "p",
        text: "El bloque más impredecible: depende de acceso a la muestra, permisos éticos, tasa de respuesta y logística. Presupuesta el doble de lo que crees; casi nunca sobra.",
      },
      { type: "h2", id: "analisis", text: "Análisis de datos (3-5 semanas)" },
      {
        type: "p",
        text: "Procesar, tabular, correr pruebas o codificar entrevistas. Si no dominas el software (SPSS, NVivo, AtlasTi), suma tiempo o consigue asesoría puntual: aquí se pierden semanas por prueba y error.",
      },
      { type: "h2", id: "redaccion", text: "Redacción final y discusión (3-4 semanas)" },
      {
        type: "p",
        text: "Escribir resultados, discusión y conclusiones. Es donde se juega el tono académico y donde muchos subestiman el tiempo porque \"ya tengo todo\".",
      },
      { type: "h2", id: "cierre", text: "Correcciones, APA y sustentación (2-3 semanas)" },
      {
        type: "p",
        text: "Aplicar normas APA, ajustar según observaciones del asesor y preparar la defensa. No es opcional: es la etapa que separa un documento aprobado de uno con distinción.",
      },
      {
        type: "quote",
        text: "En promedio, un trabajo de grado bien hecho toma entre 5 y 8 meses de trabajo sostenido. Menos de eso suele significar improvisación; más, dispersión.",
      },
      { type: "h2", id: "consejos", text: "Consejos de planificación" },
      {
        type: "ul",
        items: [
          "Bloquea al menos 8 horas semanales fijas y protégelas como si fueran una clase.",
          "Divide el cronograma en bloques de 2 semanas con entregables verificables.",
          "Nunca dejes la metodología ni las normas APA para el final.",
          "Ten un asesor con reunión quincenal; sin retroalimentación regular, todo se demora el triple.",
          "Suma un colchón del 25% al tiempo total: siempre pasa algo imprevisto.",
        ],
      },
      {
        type: "p",
        text: "El tiempo no es tu enemigo: la falta de plan sí lo es. Con un cronograma honesto y sesiones semanales protegidas, un trabajo de grado se hace sin colapsos.",
      },
    ],
  },
  {
    slug: "como-defender-una-tesis-con-seguridad",
    title: "Cómo defender una tesis con seguridad: consejos para una sustentación exitosa",
    excerpt:
      "La calidad del documento no basta: la sustentación se prepara aparte. Estructura de exposición, manejo de nervios y respuestas a los jurados.",
    category: "Sustentación",
    date: "2026-09-09",
    dateLabel: "9 de septiembre de 2026",
    readingMinutes: 8,
    image: blog3,
    imageAlt: "Estudiante defendiendo su tesis ante jurados",
    relatedService: {
      titulo: "Preparación de sustentaciones",
      to: "/preparacion-sustentaciones",
      texto:
        "Hacemos simulacros con retroalimentación experta para que llegues seguro a tu defensa.",
    },
    blocks: [
      {
        type: "p",
        text: "Muchos estudiantes entregan un documento excelente y luego pierden puntos en la defensa porque no la prepararon aparte. La sustentación es un examen oral con reglas propias: se prepara con estructura, ensayo y manejo emocional.",
      },
      { type: "h2", id: "estructura", text: "Estructura ideal de la exposición" },
      {
        type: "ol",
        items: [
          "Presentación personal breve (30 segundos).",
          "Problema y justificación: por qué importa (2 minutos).",
          "Objetivos y pregunta (1 minuto).",
          "Metodología esencial, sin abrumar (3 minutos).",
          "Resultados clave con visuales claras (5-7 minutos).",
          "Discusión: qué significan los resultados (3 minutos).",
          "Conclusiones y aportes (2 minutos).",
          "Agradecimientos y cierre (30 segundos).",
        ],
      },
      { type: "h2", id: "slides", text: "Diapositivas que suman, no distraen" },
      {
        type: "p",
        text: "Regla simple: una idea por diapositiva, máximo seis líneas, cero párrafos completos. Las visualizaciones (gráficas, tablas simplificadas, diagramas) valen más que veinte viñetas. Usa la plantilla institucional pero personalízala con sobriedad.",
      },
      { type: "h2", id: "ensayo", text: "Ensaya al menos tres veces" },
      {
        type: "p",
        text: "El primer ensayo será desordenado y largo. El segundo, con cronómetro, mejora la duración. El tercero, con público real (familia, amigos, colegas), calibra tono y respuestas. Los jurados notan de inmediato quién ensayó y quién improvisa.",
      },
      { type: "h2", id: "preguntas", text: "Anticipa las preguntas más comunes" },
      {
        type: "ul",
        items: [
          "¿Por qué eligió este tema?",
          "¿Cuál es el aporte original de su trabajo?",
          "¿Por qué esa metodología y no otra?",
          "¿Cómo garantizó la validez de sus instrumentos?",
          "¿Cuáles son las limitaciones del estudio?",
          "¿Qué investigaciones futuras propone?",
        ],
      },
      {
        type: "p",
        text: "Prepara respuestas de máximo dos minutos para cada una. Si no sabes algo, dilo con calma y ofrece cómo lo abordarías: eso demuestra madurez académica.",
      },
      { type: "h2", id: "nervios", text: "Manejo de nervios" },
      {
        type: "p",
        text: "Los nervios no se eliminan, se canalizan. Duerme bien la noche anterior, come ligero, llega con 30 minutos de anticipación, respira hondo antes de empezar (inhala 4, sostén 4, exhala 6). Habla más lento de lo que crees necesario: el nervio acelera.",
      },
      {
        type: "quote",
        text: "El jurado no te está buscando errores: está verificando que tú dominas tu trabajo. Si lo demuestras, la sustentación se convierte en conversación.",
      },
      { type: "h2", id: "cierre", text: "El día D" },
      {
        type: "p",
        text: "Vístete con formalidad sobria, lleva copia impresa del documento, agua y el archivo en dos formatos (nube y USB). Mira a los jurados a los ojos, agradece las preguntas antes de responder y cierra con una frase que retome tu aporte. La última impresión pesa tanto como la primera.",
      },
      {
        type: "p",
        text: "Una buena defensa no salva un mal documento, pero un documento excelente sin preparación oral pierde puntos evitables. Ensayar con retroalimentación externa es la mejor inversión de la última semana.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(cat: string): Article[] {
  if (cat === "Todos") return articles;
  return articles.filter((a) => a.category === cat);
}
