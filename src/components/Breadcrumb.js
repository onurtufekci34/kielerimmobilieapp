import {useLocation,Link} from 'react-router-dom'

export default function Breadcrumb() {


    const location = useLocation();

    let currentLink =''

    const crubms = location.pathname.split('/')
                .filter(crumb => crumb!=='')
                .map(crumb=>{
                    currentLink += `/${crumb}`

                    return (
                        <div className='crumb' key={crumb}>
                            <Link to={currentLink}>{crumb}</Link>

                        </div>
                    )
                })


    
  return (
    <div className='breadcrumbs'> 
        {crubms}
    </div>
  )
}
