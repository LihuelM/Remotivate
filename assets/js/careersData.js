const careersData = [
    {
        title: "Scrum Master",
        description: "Un Scrum Master es responsable de facilitar el proceso Scrum dentro de un equipo de desarrollo ágil. Ayuda a eliminar obstáculos, garantiza que el equipo siga los principios ágiles y mejora la productividad.",
        tags: ["Capacidad de Analisis", "Gestión", "Organización", "Liderazgo"]
    },
    {
        title: "Analista Funcional",
        description: " Un analista funcional trabaja con los clientes para entender sus necesidades y traducirlas en especificaciones técnicas. Actúa como un puente entre el equipo técnico y el cliente.",
        tags: ["Capacidad de Analisis", "Gestión", "Organización", "Liderazgo"]
    },
    {
        title: "Asistente Virtual",
        description: "Un asistente virtual ofrece soporte administrativo remoto, gestionando correos electrónicos, agendas, y tareas administrativas para empresarios y profesionales.",
        tags: ["Gestión", "Organización", "Comunicación"]
    },
    {
        title: "Product Management",
        description: "Lidera el desarrollo de productos desde la concepción hasta el lanzamiento, asegurándose de que cumplan con las necesidades del cliente y los objetivos comerciales.",
        tags: ["Comunicación", "Gestión", "Organización", "Liderazgo"]
    },
    {
        title: "Reclutador Remoto",
        description: "Se especializa en identificar, evaluar y seleccionar talento para empresas, gestionando procesos de contratación de manera remota. Un reclutador remoto construye relaciones con candidatos y clientes, publica vacantes, realiza entrevistas virtuales y coordina la incorporación de nuevos empleados.",
        tags: ["Comunicación", "Gestión", "Empatía"]
    },
    {
        title: "Creadora de Contenido",
        description: "Genera contenido digital como blogs, videos, y publicaciones en redes sociales. Es ideal para quienes disfrutan escribir, filmar, y editar.",
        tags: ["Creatividad", "Expresión", "Comunicación", "Innovación", "Narrativa"]
    },
    {
        title: "Diseñadora Gráfica / Product Designer",
        description: "Diseña elementos visuales como logotipos, banners, y material publicitario. Utiliza software de diseño para crear gráficos atractivos. Usualmente se utilizan herramientas No Code.",
        tags: ["Diseño", "Creatividad", "Estética", "Percepción Visual", "Detalle"]
    },
    {
        title: "Service Designer",
        description: "Diseña experiencias de servicio completas, mapeando interacciones entre usuarios y sistemas a través de múltiples puntos de contacto (digitales y físicos). Su objetivo es mejorar los servicios ofrecidos por una organización, asegurando eficiencia y satisfacción del cliente.",
        tags: ["Estrategia", "Innovación", "Empatía", "Análisis", "Resolución de Problemas"]
    },
    {
        title: "Diseñadora Web",
        description: "Crea y mantiene sitios web, asegurando que sean visualmente atractivos y funcionales. Se requiere conocimiento en HTML, CSS, y herramientas de diseño web.",
        tags: ["Diseño", "Creatividad", "Estructura", "Detalle", "Ingenio"]
    },
    {
        title: "Ilustradora Digital / Animadora Digital",
        description: "Realiza ilustraciones y arte digital para libros, revistas, videojuegos, y otros medios digitales. Crea animaciones y efectos visuales para películas, videojuegos, y contenido en línea.",
        tags: ["Creatividad", "Expresión", "Diseño", "Percepción Visual", "Estética"]
    },
    {
        title: "Fotógrafa Freelance",
        description: "Ofrece servicios de fotografía para eventos, productos y proyectos creativos, editando y vendiendo sus fotos en línea.",
        tags: ["Creatividad", "Observación", "Detalle", "Narrativa", "Expresión"]
    },
    {
        title: "Representante de Atención al Cliente",
        description: "Proporciona soporte y asistencia a los clientes a través de teléfono, chat o correo electrónico. Ayuda a resolver problemas y responde a consultas.",
        tags: ["Comunicación", "Empatía", "Paciencia", "Resolución de Problemas", "Escucha Activa"]
    },
    {
        title: "Vendedora en Línea",
        description: "Utiliza plataformas digitales para vender productos o servicios. Gestiona la tienda en línea, interactúa con los clientes y maneja las ventas.",
        tags: ["Estrategia", "Negociación", "Persuasión", "Empatía", "Orientación a Resultados"]
    },
    {
        title: "Consultora de Marketing Digital",
        description: "Desarrolla y ejecuta estrategias de marketing digital para aumentar la presencia en línea de las empresas y atraer más clientes.",
        tags: ["Estrategia", "Creatividad", "Análisis", "Innovación", "Comunicación"]
    },
    {
        title: "Copywriter",
        description: "Escribe textos persuasivos para anuncios, páginas web, y material de marketing con el fin de atraer y convencer a los clientes.",
        tags: ["Creatividad", "Narrativa", "Persuasión", "Comunicación", "Expresión"]
    },
    {
        title: "Community Manager",
        description: "Gestiona y administra las redes sociales de una empresa, interactuando con la comunidad en línea y creando contenido relevante.",
        tags: ["Comunicación", "Creatividad", "Estrategia", "Gestión", "Innovación"]
    },
    {
        title: "Especialista en SEO",
        description: "Optimiza sitios web para mejorar su posición en los motores de búsqueda, aumentando el tráfico orgánico y la visibilidad en línea.",
        tags: ["Análisis", "Estrategia", "Optimización", "Innovación", "Resolución de Problemas"]
    },
    {
        title: "Desarrolladora de Software",
        description: "Escribe y mantiene el código para aplicaciones y software. Requiere conocimientos en programación y desarrollo de software.",
        tags: ["Lógica", "Resolución de Problemas", "Análisis", "Innovación", "Atención al Detalle"]
    },
    {
        title: "Analista de Datos",
        description: "Interpreta grandes volúmenes de datos para ayudar a las empresas a tomar decisiones informadas. Utiliza herramientas de análisis de datos y software estadístico.",
        tags: ["Análisis", "Pensamiento Crítico", "Estrategia", "Resolución de Problemas", "Precisión"]
    },
    {
        title: "Especialista en Ciberseguridad",
        description: "Protege la información y los sistemas de las empresas contra ciberataques y accesos no autorizados.",
        tags: ["Seguridad", "Atención al Detalle", "Lógica", "Análisis", "Resolución de Problemas"]
    },
    {
        title: "Ingeniera de DevOps",
        description: "Combina desarrollo de software y operaciones de TI para mejorar la eficiencia del ciclo de vida del software, desde la codificación hasta el despliegue y mantenimiento.",
        tags: ["Eficiencia", "Optimización", "Innovación", "Lógica", "Estrategia"]
    },
    {
        title: "Tester de Software",
        description: "Evalúa aplicaciones y sistemas para identificar y reportar errores y problemas, asegurando que el software funcione correctamente.",
        tags: ["Atención al Detalle", "Precisión", "Análisis", "Lógica", "Resolución de Problemas"]
    },
    {
        title: "Desarrolladora de Aplicaciones Móviles",
        description: "Crea y mantiene aplicaciones para dispositivos móviles, utilizando lenguajes de programación específicos para plataformas como iOS y Android.",
        tags: ["Innovación", "Creatividad", "Lógica", "Estrategia", "Resolución de Problemas"]
    },
    {
        title: "Administradora de Bases de Datos",
        description: "Gestiona y mantiene las bases de datos de una empresa, asegurando su seguridad, integridad y disponibilidad.",
        tags: ["Estructura", "Organización", "Lógica", "Análisis", "Seguridad"]
    },
    {
        title: "UX Researcher",
        description: "Está orientado a profesionales con experiencia en investigación de usuarios y diseño centrado en las personas. Su propósito es liderar y ejecutar investigaciones que generen valor para el usuario final y que también contribuyan al crecimiento del negocio.",
        tags: ["Investigación", "Empatía", "Análisis", "Estrategia", "Percepción"]
    },
    {
        title: "Facilitador de Talleres",
        description: "Diseña y dirige talleres prácticos sobre habilidades específicas como emprendimiento, liderazgo, manejo de herramientas digitales, arte, decoración, o alguna profesión que sepas desempeñar.",
        tags: ["Comunicación", "Liderazgo", "Creatividad", "Empatía", "Enseñanza"]
    },
    {
        title: "Mentor en Habilidades Digitales",
        description: "Ayuda a individuos o equipos a adquirir competencias digitales, desde manejo de herramientas hasta habilidades avanzadas en tecnología.",
        tags: ["Educación", "Innovación", "Paciencia", "Comunicación", "Orientación al Aprendizaje"]
    },
    {
        title: "Profesora de Cursos en Línea",
        description: "Crea y/o enseña cursos en línea en plataformas educativas, compartiendo conocimientos y habilidades en diversas áreas temáticas.",
        tags: ["Docencia", "Empatía", "Comunicación", "Estrategia", "Capacitación"]
    },
    {
        title: "Coach de Carrera Profesional",
        description: "Brinda orientación personalizada a personas que desean mejorar su perfil profesional, cambiar de carrera o conseguir nuevas oportunidades laborales.",
        tags: ["Liderazgo", "Estrategia", "Empatía", "Motivación", "Comunicación"]
    },
    {
        title: "Capacitador Empresarial",
        description: "Brinda formación a equipos dentro de empresas, enfocándose en temas como atención al cliente, ventas, trabajo en equipo y productividad.",
        tags: ["Formación", "Liderazgo", "Trabajo en Equipo", "Comunicación", "Motivación"]
    },
    {
        title: "Gestor de Proyectos Digitales",
        description: "Planifica, ejecuta y supervisa proyectos digitales como desarrollos web, campañas de marketing y lanzamientos de productos, asegurándose de cumplir con los objetivos dentro del tiempo y presupuesto establecidos.",
        tags: ["Gestión", "Estrategia", "Organización", "Liderazgo", "Resolución de Problemas"]
    },
    {
        title: "Analista de Mercado",
        description: "Investiga y analiza tendencias del mercado para ayudar a las empresas/personas a identificar oportunidades de negocio y optimizar estrategias comerciales.",
        tags: ["Análisis", "Estrategia", "Investigación", "Toma de Decisiones", "Pensamiento Crítico"]
    },
    {
        title: "Coordinador de Proyectos",
        description: "Gestiona proyectos, coordina tareas y recursos, y se asegura de que los proyectos se completen a tiempo y dentro del presupuesto.",
        tags: ["Gestión", "Organización", "Trabajo en Equipo", "Liderazgo", "Resolución de Problemas"]
    },
    {
        title: "Consultora de Negocios",
        description: "Ofrece asesoramiento estratégico a las empresas para mejorar su eficiencia, productividad y rentabilidad. También puede ser asesorías contables, legales, etc, dependiendo tu especialidad.",
        tags: ["Estrategia", "Análisis", "Liderazgo", "Negociación", "Toma de Decisiones"]
    },
    {
        title: "Planificador Logístico",
        description: "Diseña y optimiza procesos logísticos, gestionando cadenas de suministro y asegurando la eficiencia en el transporte y distribución de productos.",
        tags: ["Estrategia", "Organización", "Optimización", "Resolución de Problemas", "Análisis"]
    },
    {
        title: "Especialista en Financiamiento/ Asesoramiento para Pymes",
        description: "Ayuda a pequeñas y medianas empresas a crecer, identificando opciones de financiamiento, gestionando proyectos de inversión y evaluando su viabilidad económica. Además, si cuentas con experiencia en áreas específicas dentro de una industria, puedes ofrecer asesoramiento especializado, compartiendo tus conocimientos en temas como mantenimiento, seguridad, logística u otros campos clave.",
        tags: ["Análisis", "Negociación", "Estrategia", "Liderazgo", "Gestión"]
    },
    {
        title: "Content Strategist",
        description: "Se especializa en planificar, crear y gestionar contenido estratégico que cumpla objetivos específicos, como informar, atraer usuarios o mejorar la conversión. Trabaja en el desarrollo de guías de estilo, calendarios editoriales y estrategias para diferentes canales.",
        tags: ["Creatividad", "Estrategia", "Narrativa", "Comunicación", "Análisis"]
    }
];
