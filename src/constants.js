import { 
  TrendingUp as Reto,
  Receipt as Evaluacion,
  Work as Patrocinio,
  SquareFoot as Prototipo,
  PlayArrow as Ejecucion,  
  Block as Cierre, 

  // EDA
  LabelImportant as Activa,
  Cancel as Cancelada,
  Pause as Suspendida,
  EditAttributes as Completada
  //
} from '@material-ui/icons';

const sizeFont = '4rem'

export const EtasIcons = [
  Reto         ,
  Evaluacion   ,
  Patrocinio   ,
  Prototipo    ,
  Ejecucion    ,
  Cierre       , 
];

export const EdasIcons = [
  Activa, 
  Suspendida,
  Cancelada,
  Completada
]



export const CardsData = {
    "getAllEtapas": {
      "Tipo": [
        "EDO",
        "EDA",
        "ETA"
      ],
      "Etapas": [
        {
          "_id": "5f08c28c5657d19c7c6e1f72",
          "Tabla": "EDO",
          "Clave": "ACT",
          "Orden": 10,
          "Titulo": "Activo"
        },
        {
          "_id": "5f08c28c5657d19c7c6e1f75",
          "Tabla": "EDO",
          "Clave": "SUS",
          "Orden": 20,
          "Titulo": "Suspendido"
        },
        {
          "_id": "5f08c28c5657d19c7c6e1f76",
          "Tabla": "EDO",
          "Clave": "CAN",
          "Orden": 30,
          "Titulo": "Cancelado"
        },
        {
          "_id": "5f08c28c5657d19c7c6e1f77",
          "Tabla": "EDO",
          "Clave": "CIE",
          "Orden": 40,
          "Titulo": "En cierre"
        },
        {
          "_id": "5f08c28c5657d19c7c6e1f78",
          "Tabla": "EDO",
          "Clave": "IMP",
          "Orden": 50,
          "Titulo": "Implementado"
        },
        {
          "_id": "5f08c28c5657d19c7c6e1f79",
          "Tabla": "EDA",
          "Clave": "ACT",
          "Orden": 10,
          "Titulo": "Activa"
        },
        {
          "_id": "5f08c28c5657d19c7c6e1f7a",
          "Tabla": "EDA",
          "Clave": "CAN",
          "Orden": 30,
          "Titulo": "Cancelada"
        },
        {
          "_id": "5f08c28c5657d19c7c6e1f7b",
          "Tabla": "EDA",
          "Clave": "SUS",
          "Orden": 20,
          "Titulo": "Suspendida"
        },
        {
          "_id": "5f08c28c5657d19c7c6e1f7c",
          "Tabla": "EDA",
          "Clave": "COM",
          "Orden": 40,
          "Titulo": "Completada"
        },
        {
          "_id": "5f08c2abcc104ee8dc0ca32e",
          "Tabla": "ETA",
          "Clave": "1000",
          "Orden": 10,
          "Titulo": "Reto"
        },
        {
          "_id": "5f08c2abcc104ee8dc0ca32f",
          "Tabla": "ETA",
          "Clave": "2000",
          "Orden": 20,
          "Titulo": "Evaluación"
        },
        {
          "_id": "5f08c2abcc104ee8dc0ca330",
          "Tabla": "ETA",
          "Clave": "3000",
          "Orden": 30,
          "Titulo": "Patrocinio"
        },
        {
          "_id": "5f08c2abcc104ee8dc0ca331",
          "Tabla": "ETA",
          "Clave": "4000",
          "Orden": 40,
          "Titulo": "Prototipo"
        },
        {
          "_id": "5f08c2abcc104ee8dc0ca332",
          "Tabla": "ETA",
          "Clave": "5000",
          "Orden": 50,
          "Titulo": "Ejecución"
        },
        {
          "_id": "5f08c2abcc104ee8dc0ca333",
          "Tabla": "ETA",
          "Clave": "6000",
          "Orden": 60,
          "Titulo": "Cierre"
        }
      ]
    }
  }



export const dataRolesYPermisos = {
    "Roles": [
        {
          "_id": "5fca568f4440b63d203daac6",
          "Descripcion": "Rol para el director, en el cual puede entrar a todas las vistas pero no actualizar datos",
          "Clave": "DGI",
          "Titulo": "Director general de Innovación",
          "Permisos": [
            "portafolio.index",
            "usuarios.index",
            "historico.index",
            "documentos.index",
            "pim.read",
            "actividades.read",
            "usuarios.read",
            "documentos.read",
            "edc.index"
          ]
        },
        {
          "_id": "5fca5b093602995930f93dec",
          "Descripcion": "Rol para el ver todas las vistas y modificar todas las colecciones",
          "Clave": "APO",
          "Titulo": "Administrador de portafolio",
          "Permisos": [
            "portafolio.index",
            "usuarios.index",
            "historico.index",
            "documentos.index",
            "pim.read",
            "pim.create",
            "pim.update",
            "pim.delete",
            "actividades.read",
            "actividades.create",
            "actividades.update",
            "actividades.delete",
            "usuarios.read",
            "usuarios.create",
            "usuarios.update",
            "usuarios.delete",
            "documentos.read",
            "documentos.create",
            "documentos.update",
            "documentos.delete",
            "prototipos.test",
            "edc.index"
          ]
        },
        {
          "_id": "5fca5b7a3602995930f93ded",
          "Descripcion": "Rol para el ver todas las vistas y modificar todas las colecciones",
          "Clave": "AGE",
          "Titulo": "Administrador general",
          "Permisos": [
            "portafolio.index",
            "usuarios.index",
            "pim.read",
            "pim.update",
            "pim.delete",
            "actividades.read",
            "actividades.create",
            "actividades.update",
            "actividades.delete",
            "usuarios.read",
            "usuarios.create",
            "usuarios.update",
            "usuarios.delete",
            "documentos.read",
            "documentos.create",
            "documentos.update",
            "documentos.delete",
            "historico.index",
            "prototipos.test",
            "documentos.index",
            "edc.index"
          ]
        },
        {
          "_id": "5fca616d3602995930f93dee",
          "Descripcion": "Rol para el ver portafolio y modificar solo actividades",
          "Clave": "GES",
          "Titulo": "Gestor",
          "Permisos": [
            "portafolio.index",
            "usuarios.index",
            "pim.read",
            "actividades.read",
            "actividades.create",
            "actividades.update",
            "actividades.delete",
            "usuarios.read",
            "documentos.read",
            "historico.index",
            "documentos.index",
            "edc.index"
          ]
        },
        {
          "_id": "5fca73123602995930f93def",
          "Descripcion": "Rol para el ver portafolio y modificar solo actividades",
          "Clave": "RES",
          "Titulo": "Responsable",
          "Permisos": [
            "portafolio.index",
            "usuarios.index",
            "pim.read",
            "actividades.read",
            "actividades.create",
            "actividades.update",
            "actividades.delete",
            "usuarios.read",
            "documentos.read",
            "historico.index",
            "documentos.index",
            "edc.index"
          ]
        },
        {
          "_id": "5fca732e3602995930f93df0",
          "Descripcion": "Rol para el ver portafolio, editar si se encuentra en su dirección y modificar solo actividades",
          "Clave": "LID",
          "Titulo": "Líder",
          "Permisos": [
            "portafolio.index",
            "usuarios.index",
            "pim.read",
            "actividades.read",
            "actividades.create",
            "actividades.update",
            "actividades.delete",
            "usuarios.read",
            "documentos.read",
            "documentos.index",
            "edc.index"
          ]
        },
        {
          "_id": "5fda241b72d8be0d04871654",
          "Descripcion": "Rolque solo permite visualizar",
          "Clave": "STD",
          "Titulo": "Básico",
          "Permisos": [
            "portafolio.index",
            "pim.read",
            "actividades.read"
          ]
        },
        {
          "_id": "610a3bd044f2402dbbb646a8",
          "Descripcion": "Rol para el ver portafolio y modificar solo actividades",
          "Clave": "OCP",
          "Titulo": "Responsable OCP",
          "Permisos": [
            "portafolio.index",
            "usuarios.index",
            "pim.read",
            "actividades.read",
            "actividades.create",
            "actividades.update",
            "actividades.delete",
            "usuarios.read",
            "documentos.read",
            "historico.index",
            "documentos.index",
            "edc.index",
            "documento.createPhase"
          ]
        },
        {
          "_id": "611e8e09c806ecbb11ac082f",
          "Descripcion": "Rol para el ver portafolio y modificar solo actividades (Coordinador)",
          "Clave": "COR",
          "Titulo": "Coordinador",
          "Permisos": [
            "portafolio.index",
            "usuarios.index",
            "pim.read",
            "actividades.read",
            "actividades.create",
            "actividades.update",
            "actividades.delete",
            "usuarios.read",
            "documentos.read",
            "historico.index",
            "documentos.index",
            "edc.index"
          ]
        },
        {
          "_id": "6153b1e3136b6797693ae1a4",
          "Descripcion": "Rol para acceder a la vista Bitacora",
          "Clave": "ADB",
          "Titulo": "Administrador de bitácora",
          "Permisos": [
            "bitacora.index",
            "bitaocra.create",
            "bitaocra.partial.create",
            "bitacora.read",
            "bitacora.partial.update",
            "bitacora.partial.read",
            "bitacora.update",
            "bitacora.delete",
            "bitacora.partial.delete",
            "bitacora.Subs.read",
            "bitacota.checklist.check",
            "bitacora.addcomment",
            "bitacora.vinculatepims",
            "bitacora.partial.vincualtepims",
            "bitacora.vinculateActivitys"
          ]
        }
      ],
      "Permisos": [
        {
          "_id": "5fc6e0550c8a0d60cb351826",
          "slug": "portafolio.index",
          "descripcion": "Permite ingresar a la vista Portafolio",
          "grupo": "portafolio"
        },
        {
          "_id": "5fc6e13c0c8a0d60cb351827",
          "slug": "usuarios.index",
          "descripcion": "Permite ingresar a la vista de usuarios",
          "grupo": "usuarios"
        },
        {
          "_id": "5fc6e1a20c8a0d60cb351828",
          "slug": "documentos.index",
          "descripcion": "Permite ingresar a la vista de Documentos",
          "grupo": "documentos"
        },
        {
          "_id": "5fc6e2130c8a0d60cb351829",
          "slug": "historico.index",
          "descripcion": "Permite ingresar a la vista de historicos",
          "grupo": "historico"
        },
        {
          "_id": "5fc6e2790c8a0d60cb35182a",
          "slug": "pim.read",
          "descripcion": "Leer una o mas Iniciativas, Proyectos o Mantenimientos",
          "grupo": "pim"
        },
        {
          "_id": "5fc6e2ec0c8a0d60cb35182b",
          "slug": "pim.create",
          "descripcion": "Crear una Iniciativa, Proyecto o Mantenimiento",
          "grupo": "pim"
        },
        {
          "_id": "5fc6e32e0c8a0d60cb35182c",
          "slug": "pim.update",
          "descripcion": "Actualizar o modificar Iniciativa, Proyecto o Mantenimiento",
          "grupo": "pim"
        },
        {
          "_id": "5fc6e3c00c8a0d60cb35182d",
          "slug": "pim.delete",
          "descripcion": "Eliminar Iniciativa, Proyecto o Mantenimiento",
          "grupo": null
        },
        {
          "_id": "5fc6e4460c8a0d60cb35182e",
          "slug": "actividades.read",
          "descripcion": "Leer actividades de Proyectos, Iniciativas o Mantenimientos",
          "grupo": "pim"
        },
        {
          "_id": "5fc6e4d50c8a0d60cb35182f",
          "slug": "actividades.create",
          "descripcion": "crea actividades de  Proyectos, Iniciativas o Mantenimientos",
          "grupo": "actividades"
        },
        {
          "_id": "5fc6e5280c8a0d60cb351830",
          "slug": "actividades.delete",
          "descripcion": "Eliminar actividades de  Proyectos, Iniciativas o Mantenimientos",
          "grupo": "actividades"
        },
        {
          "_id": "5fc6e5b50c8a0d60cb351831",
          "slug": "actividades.update",
          "descripcion": "actualiza actividades de  Proyectos, Iniciativas o Mantenimientos",
          "grupo": "actividades"
        },
        {
          "_id": "5fc6e60e0c8a0d60cb351832",
          "slug": "usuarios.create",
          "descripcion": "Crear un usuario nuevo",
          "grupo": "usuarios"
        },
        {
          "_id": "5fc6e6610c8a0d60cb351833",
          "slug": "usuarios.read",
          "descripcion": "Permite consultar un usuario",
          "grupo": "usuarios"
        },
        {
          "_id": "5fc6e6910c8a0d60cb351834",
          "slug": "usuarios.delete",
          "descripcion": "Permite eliminar usuarios",
          "grupo": "usuarios"
        },
        {
          "_id": "5fc6e7610c8a0d60cb351835",
          "slug": "usuarios.update",
          "descripcion": "Permite modificar y actualizar usuarios",
          "grupo": "usuarios"
        },
        {
          "_id": "5fc6e801f1abb42954acf0e7",
          "slug": "documentos.update",
          "descripcion": "Permite modificar y actualizar documentos",
          "grupo": "documentos"
        },
        {
          "_id": "5fc6e812f1abb42954acf0e8",
          "slug": "documentos.delete",
          "descripcion": "Permite eliminar documentos",
          "grupo": "documentos"
        },
        {
          "_id": "5fc6e82cf1abb42954acf0e9",
          "slug": "documentos.read",
          "descripcion": "Permite consultar un documentos",
          "grupo": "documentos"
        },
        {
          "_id": "5fc6e848f1abb42954acf0ea",
          "slug": "documentos.create",
          "descripcion": "Crear  documentos nuevos",
          "grupo": "documentos"
        },
        {
          "_id": "6043c56b1571c52e3cfb18f6",
          "slug": "prototipos.test",
          "descripcion": "Permite ver cierto módulo para ser probado antes de salir a producción",
          "grupo": "test"
        },
        {
          "_id": "60ca57b0eeb2c87704e4ed7d",
          "slug": "test.index",
          "descripcion": "Permite probar componentes de la aplicación antes de su lanzamiento",
          "grupo": "test"
        },
        {
          "_id": "60e5e4322505fa4bc0bf8b30",
          "slug": "edc.index",
          "descripcion": "Permite ingresar a la vista de Estados de cuenta y EDC OCP",
          "grupo": "edc"
        },
        {
          "_id": "610a3c4544f2402dbbb646ab",
          "slug": "documentos.createPhase",
          "descripcion": "Crear  fase en un documento OCP",
          "grupo": "documentos"
        },
        {
          "_id": "61415789f0ee050029b45508",
          "slug": "bitacora.partial.vincualtepims",
          "descripcion": "Permite vincular pims solo de la dirección a la cual pertenece el usuario",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b454fb",
          "slug": "bitacora.index",
          "descripcion": "Permite ingresar a la vista Bitacora",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b454ff",
          "slug": "bitacora.partial.read",
          "descripcion": "Permite leer actividades parcialmente, ya sea sólo las propias, asignadas y/o solo a de la direccion a la que el ususario pertenece",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b45506",
          "slug": "bitacora.addcomment",
          "descripcion": "Permite añadir comentarios sobre las subActividases",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b454fc",
          "slug": "bitaocra.create",
          "descripcion": "Permite crear actividades en modo Bitacora",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b454fd",
          "slug": "bitaocra.partial.create",
          "descripcion": "Permite crear actividades en modo Bitacora",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b45502",
          "slug": "bitacora.delete",
          "descripcion": "Permite eliminar cualquier actividad de la bitacora.",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b45504",
          "slug": "bitacora.Subs.read",
          "descripcion": "Permite la lectura de las actividades de tipo checklist",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b454fe",
          "slug": "bitacora.read",
          "descripcion": "Permite leer todas las actividades de la bitacora",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b45509",
          "slug": "bitacora.vinculateActivitys",
          "descripcion": "Permite vincular activides en cualquier dirección",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b45500",
          "slug": "bitacora.partial.update",
          "descripcion": " Permite actulizar los status de las actividades propias",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b45507",
          "slug": "bitacora.vinculatepims",
          "descripcion": "Permite vincular pims en todas las direcciones",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b45501",
          "slug": "bitacora.update",
          "descripcion": "Permite cualquier actualizacion sobre las actividades",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b45503",
          "slug": "bitacora.partial.delete",
          "descripcion": " Permite eliminar actividades propias siendo de la dirección a la que pertenece",
          "grupo": "Bitacora"
        },
        {
          "_id": "61415789f0ee050029b45505",
          "slug": "bitacota.checklist.check",
          "descripcion": "Permite marcar el checkbox de las actividades de tipo checklist ",
          "grupo": "Bitacora"
        }
      ]
}




export const User ={
Correo: "jose_vivanco@banorte.com",
Direccion: "ARQ",
Director: false,
Nombre: "José Martín Vivanco Flores",
Puesto: "GES",
PuestoTitulo: "Gestor",
Rol: ['STD'],
Titulo: "Core Banking",
Ultima: "1630614293890",
UsuarioI: "A8048484",
status: 2,
_id: "61313315592465001823343d",
}




export const direcciones =[
  {
      "Clave": "IAR",
      "Titulo": "IA y Riesgos",
      "status": true
  },
  {
      "Clave": "IA",
      "Titulo": "Inteligencia Artificial",
      "status": false
  },
  {
      "Clave": "CAN",
      "Titulo": "Canales y Arquitectura",
      "status": true
  },
  {
      "Clave": "NB",
      "Titulo": "NBA/NBO",
      "status": true
  },
  {
      "Clave": "RC",
      "Titulo": "Riesgos y Crédito",
      "status": false
  },
  {
      "Clave": "VMC",
      "Titulo": "Ventas Multicanal",
      "status": false
  },
  {
      "Clave": "DGA",
      "Titulo": "DGA Innovación",
      "status": false
  },
  {
      "Clave": "ARQ",
      "Titulo": "Core Banking",
      "status": true
  },
  {
      "Clave": "PMO",
      "Titulo": "Modelos de Negocio y Gestión",
      "status": true
  },
  {
      "Clave": "PRV",
      "Titulo": "Proveedor",
      "status": false
  }
]