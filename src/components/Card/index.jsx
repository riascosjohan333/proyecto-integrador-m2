import container from './styles.module.css';


export default function Card(props) {
   const { onClose, name, status, species, gender, origin, image,} = props;

   return (
      <div className={container.container}>
         <button className={container.button} onClick={onClose}>X</button>
         <h2 className={container.titulo}>{name} </h2>
         <h2>{status} </h2>
         <h2>{species} </h2> 
         <h2>{gender} </h2>
         <h2 className={container.origin}>{origin} </h2>
         <img className={container.imagen} src={image} alt='' />
         </div>
   );
}
