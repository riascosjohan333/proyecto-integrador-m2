export default function SearchBar(props) {
   const { onSearch } = props;

   return (
      <div style={{
      
         height: 80,
         display: 'flex',
         justifyContent: 'end',
         alignItems: 'center',
         }}>
         <input type='search' 
         style={{
            height:40,
            width: 250,
            borderRadius: 10,
            marginRight:20,
         
         }} />
         <button onClick={onSearch} 
         style={{
            height:40,
            width:100,
            borderRadius: 10,
         }}>Agregar</button> 
      </div>
   );
}
