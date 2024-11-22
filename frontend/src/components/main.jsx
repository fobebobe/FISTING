import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../config/routes';
import Inauth from './inauth';


const Main = (()=>{
    return(
<Routes>
    {publicRoutes.map((el,i)=><Route path={el.path} Component={el.component} key={i}/>)}
    <Route path='/navigate' Component={Inauth} />
</Routes>
    )
})

export default Main;