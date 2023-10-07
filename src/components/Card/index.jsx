import container from './styles.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   const { onClose, name, status, species, gender, origin, image, id} = props;

   return (
      <div className={container.container}>
         <button className={container.button} onClick={()=> onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
          <h3 className={container.titulo}>{name}</h3>
         </Link>
     
         <h2>{status} </h2>
         <h2>{species} </h2> 
         <h2>{gender} </h2>
         <h2 className={container.origin}>{origin} </h2>
         <img className={container.imagen} src={image} alt='' />
         </div>
   );
}
