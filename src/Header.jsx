import{ useState } from 'react';
import logo from './img/logo.png'
import { Link } from 'react-scroll';
const Header = ({bgclr}) => {
  const [menu, setmenu]= useState(0);
  const menuItems=['Home','Program','About us','Campus','Testimonials','Contact us'];
  const pageNo= ['home','program','about','campus','testimonials','contact']
 return (
<>
<div className={`row ${bgclr?'bg-dark':'bg-transparent'} position-fixed nav text-white d-flex flex-row`} style={{zIndex:'4'}}>
      <div className='col-4 d-flex align-items-center justify-content-center'>
        <img className='w-100 p-2' src={logo} alt="" /></div>
      <div className={`head ${bgclr?'bg-dark':'bg-transparent'} collapse col-md-8 d-md-flex align-items-md-center justify-content-md-around`}>
        {
          menuItems.map((val,ind)=>{
            return(
              <div className={`p-2 ps-2 pe-2 ${ind===menu?'active':''}`}><Link onClick={()=>setmenu(ind)} to={pageNo[ind]} offset={-60} duration={500}>{val}</Link></div>
            )
          })
        }
     
      </div>
      <div className="position-absolute menubtn d-block d-md-none fw-bold me-2" data-bs-toggle="collapse" data-bs-target=".head" aria-expanded="false">!!!</div>
    </div></>    
)

}

export default Header