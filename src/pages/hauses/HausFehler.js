import {Link,useRouteError} from 'react-router-dom'

export default function HausFehler() {

    const error = useRouteError();




  return (
    <div className='haus-fehler'>
        <h2>Fehler!!!</h2>
        <p>{error.message}</p>
        <Link to="/">Home Page</Link>

    </div>
  )
}
