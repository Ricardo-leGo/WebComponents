
import { DateRange, Face, Fingerprint, VerifiedUser, Bookmarks, Alarm, Dashboard } from '@material-ui/icons';
const coloricon  = "#d7816aff";
export const menu =[
{Name:'Secciones'    , Micon:<Dashboard    style={{color: coloricon}}/>, 
sections:[
  { Name:"Portafolios",path:"Portafolios"},
  { Name:"OCP"        ,path:"OCP"},
  { Name:"Edos. Cta." ,path:"Edos-Cta"},
  { Name:"Usuarios"   ,path:"Usuarios"},
  { Name:"Alarmas"    ,path:"Alarmas"},
] },

{Name:'Proveedores' , Micon:<Face          style={{color: coloricon}}/>, sections:[] },
{Name:'Roles'       , Micon:<Fingerprint   style={{color: coloricon}}/>, sections:[] },
{Name:'Permisos'    , Micon:<VerifiedUser  style={{color: coloricon}}/>, sections:[] },
{Name:'Etapa'       , Micon:<Bookmarks     style={{color: coloricon}}/>, sections:[] },
{Name:'Calendario'  , Micon:<DateRange     style={{color: coloricon}}/>, sections:[] },
]


