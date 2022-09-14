// import { TokkoSearchArgs } from "../modelos/TokkoSearchArgs";

export const Paginas = {
    Home: 'home',
    Propiedad: 'propiedad',
    Propiedades: 'propiedades',
    Emprendimiento: 'emprendimiento',
    Emprendimientos: 'emprendimientos',
    AsistentePersonal: 'asistente-personal'
};

export const Fragmentos = {
    Buscador: 'buscador',
    Alquiler: 'alquiler',
    Venta: 'venta',
    Duit360: 'duit360',
    Servicios: 'servicios',
    Consejeros: 'consejeros',
    Contacto: 'contacto',
};

export const Secciones = {
    Home: {
        Nombre: 'Home',
        Pagina: Paginas.Home,
        Fragmento: ''
    },
    Alquiler: {
        Nombre: 'Alquiler',
        Pagina: Paginas.Propiedad,
        Fragmento: Fragmentos.Alquiler
    },
    Venta: {
        Nombre: 'Venta',
        Pagina: Paginas.Propiedades,
        Fragmento: Fragmentos.Venta
    },
    Emprendimientos: {
        Nombre: 'Emprendimientos',
        Pagina: Paginas.Emprendimientos,
        Fragmento: ''
    },
    Duit360: {
        Nombre: 'Duit 360º',
        Pagina: Paginas.Home,
        Fragmento: Fragmentos.Duit360
    },
    Servicios: {
        Nombre: 'Servicios',
        Pagina: Paginas.Home,
        Fragmento: Fragmentos.Servicios
    },
    Consejeros: {
        Nombre: 'Consejeros',
        Pagina: Paginas.Home,
        Fragmento: Fragmentos.Consejeros
    },
    Contacto: {
        Nombre: 'Contacto',
        Pagina: Paginas.Home,
        Fragmento: Fragmentos.Contacto
    },
    AsistentePersonal: {
        Nombre: 'Asistente Personal',
        Pagina: Paginas.AsistentePersonal,
        Fragmento: ''
    }
};

export const Consejeros = [
    {
        nombre: 'Agustín Aznarez',
        posicion: 'Consejero',
        telefono: '(351) 3102556',
        email: 'agustin@duitpropiedades.com.ar',
        facebook: 'https://www.facebook.com/agustin.aznarez',
        twitter: '',
        linkedin: '',
        instagram: '',
        foto: 'agustin-aznarez-profile.jpg',
    },
    {
        nombre: 'Daniel Ganim',
        posicion: 'Consejero',
        telefono: '(351) 5647780',
        email: 'danielganim@duitpropiedades.com.ar',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        foto: 'daniel-ganim-profile.jpg',
    },
    {
        nombre: 'Fernando Gavier',
        posicion: 'Consejero',
        telefono: '(0351) 5145491',
        email: 'fgavier@duitpropiedades.com.ar',
        facebook: 'https://www.facebook.com/fngavier',
        twitter: 'https://twitter.com/fngavier',
        linkedin: '',
        instagram: '',
        foto: 'fernando-gavier-profile.jpg',
    },
    {
        nombre: 'Hugo Miranda',
        posicion: 'Consejero',
        telefono: '(351) 2462630',
        email: 'hmiranda@duitpropiedades.com.ar',
        facebook: ' ',
        twitter: '',
        linkedin: '',
        instagram: '',
        foto: 'hugo-miranda-profile.jpg',
    },
    {
        nombre: 'Severo Sosa',
        posicion: 'Consejero',
        telefono: '(351) 5648467',
        email: 'severo@duitpropiedades.com.ar',
        facebook: 'https://www.facebook.com/sapo.sosa',
        twitter: 'https://twitter.com/severososa',
        linkedin: 'https://www.linkedin.com/in/severo-sosa-barreneche-590a3b1b/',
        instagram: 'http://www.instagram.com/sapososa/',
        foto: 'severo-sosa-profile.jpg',
    },
    {
        nombre: 'Carolina Valarolo',
        posicion: 'Consejera',
        telefono: '(351) 5513711',
        email: 'carolina@duitpropiedades.com.ar',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        foto: 'carolina-valarolo-1-profile.jpg',
    },
    {
        nombre: 'Teresita Sciortino',
        posicion: 'Secretaria Administración',
        telefono: '(351) 6840250',
        email: 'teresita@duitpropiedades.com.ar',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        foto: 'recepcion-profile.jpg',
    },
    {
        nombre: 'Santiago Paulus',
        posicion: 'Asesor',
        telefono: '(351) 5908204',
        email: 'santiago@duitpropiedades.com.ar',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        foto: 'santiago-pablu-profile.jpg',
    }
];

export const Contactos = {
    whatsappDuit: {
        numero: 5493512463530,
        formateado: '+54 9 351 2463530'
    },
    whatsappInfo: 5493512463606,
    emailInfo: 'info@duitpropiedades.com.ar',
    emailContacto: 'contacto@duitpropiedades.com.ar',
    telefonoDuit: '+5493512463530',
};

export const Redes = [
    {
        red: 'Facebook',
        url: 'https://www.facebook.com/duitpropiedades',
        icono: 'fab fa-facebook'
    },
    {
        red: 'Instagram',
        url: 'https://www.instagram.com/duitpropiedades/',
        icono: 'fab fa-instagram'
    }
];

export const TiposOperaciones = {
    Alquiler: {
        id: 2,
        nombre: 'Alquiler'
    },
    Venta: {
        id: 1,
        nombre: 'Venta'
    }
};

export const TiposPropiedades = {
    Casas: {
        id: 3,
        nombre: 'Casas / Dúplex',
    },
    Departamentos: {
        id: 2,
        nombre: 'Departamentos',
    },
    Locales: {
        id: 7,
        nombre: 'Locales',
    },
    Oficinas: {
        id: 5,
        nombre: 'Oficinas',
    },
    Terrenos: {
        id: 1,
        nombre: 'Terrenos',
    },
    Cocheras: {
        id: 10,
        nombre: 'Cocheras',
    },
    Depositos: {
        id: 14,
        nombre: 'Depósitos',
    },
    Emprendimientos: {
        id: 99,
        nombre: 'Emprendimientos',
        mostrarSoloParaOperacionesTipo: 1
    },
};

export const PropiedadesSubTipos = {
    // Casas
    3: [
        {
            id: 718,
            nombre: 'Barrios Abiertos',
        },
        {
            id: 719,
            nombre: 'Barrios Cerrados',
        },
    ],
    // Departamentos
    2: [
        {
            id: 673,
            nombre: 'A Estrenar',
        },
        {
            id: 653,
            nombre: 'Construcción',
        },
        {
            id: 674,
            nombre: 'Usados',
        },
    ],
    // Terrenos
    1: [
        {
            id: 720,
            nombre: 'Abiertos',
        },
        {
            id: 721,
            nombre: 'Cerrados',
        },
    ],
};

// export const DefaultTokkoSearchArgs = new TokkoSearchArgs();
// DefaultTokkoSearchArgs.current_localization_id = 0;
// DefaultTokkoSearchArgs.current_localization_type = 'country';
// DefaultTokkoSearchArgs.price_from = 0;
// DefaultTokkoSearchArgs.price_to = 999999999;
// DefaultTokkoSearchArgs.operation_types = [1, 2];
// DefaultTokkoSearchArgs.property_types = [1, 2, 3, 5, 7, 10, 14]; // Buscar solo por los tipos de propiedad acá listados.
// DefaultTokkoSearchArgs.currency = 'ANY';
// DefaultTokkoSearchArgs.filters = [];

// export const DefaultTokkoSearchArgsString = `{"current_localization_id":${DefaultTokkoSearchArgs.current_localization_id},"current_localization_type":"${DefaultTokkoSearchArgs.current_localization_type}","price_from":${DefaultTokkoSearchArgs.price_from},"price_to":${DefaultTokkoSearchArgs.price_to},"operation_types":[${DefaultTokkoSearchArgs.operation_types}],"property_types":[${DefaultTokkoSearchArgs.property_types}],"currency":"${DefaultTokkoSearchArgs.currency}","filters":[${DefaultTokkoSearchArgs.filters}]}`;

export const TokkoConfig = {
    UrlBase: 'https://tokkobroker.com/api/v1',
    Key: 'f26431aec0277d4e7912e2709af35707fb9362e6',
    Lenguaje: 'es_ar',
    Endpoints: {
        Emprendimientos: 'development',
        Propiedades: 'property/search',
        Propiedad: 'property'
    },
    CacheKeys: {
        GetEmprendimientos: 'TokkoService::getEmprendimientos',
        GetEmprendimiento: 'TokkoService::getEmprendimiento',
        GetPropiedadesPorEmprendimiento: 'TokkoService::getPropiedadesPorEmprendimiento',
        GetPropiedad: 'TokkoService::getPropiedad'
    },
    ParamKeys: {
        Orden: 'order',
        Limite: 'limit',
        Key: 'key',
        Lenguaje: 'lang',
        Formato: 'format',
        Id: 'id',
        Emprendimiento: 'development'
    }
};