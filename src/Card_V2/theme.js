const drawerWidth = 240;

export default theme =>({
  root: {
    display: 'flex'
  },

  mainBox:{
    width:"fit-content",
    padding:"1rem",
    border:'solid 1px black',
    borderRadius:'12px',
    

  },
  titleBox:{
    width:'100%',
    display:"flex",
    flexFlow:"row nowrap",
    alignItems:"center",
    justifyContent:"space-between"
  },
  closeButton:{
    marginTop:'-4rem',
    backgroundColor:'#fff',
    zIndex:2,
    float:"rigth",
    boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
  },
  DescriptionBox:{
      width:"20rem",
      margin: '0 auto',
      padding:'.25rem 0',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
  
  },
  clave:{
    width:'100%',
    display:'flex',
    alignItems:'center'

    
  }

})