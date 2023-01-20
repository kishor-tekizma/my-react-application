// import Card from './Card';
import classes from './ItemsList.module.css';
function ItemsList(props){
    return (
        <div className={classes.container}>
            {props.items.map((myItem,i) => {
                // return <li className={classes.item}>
                //     <div>
                //         <img className={classes.image} src={myItem.image} alt={myItem.productname}/>
                //     </div>
                //     <div>
                //         <h3>{myItem.productname}</h3>
                //         <p>{myItem.Cost}</p>
                //         <p>{myItem.description}</p>
                //     </div>
                // </li>
               
                
                return <div className={classes.cont}>
                    {/* <div className={classes.break}> </div> */}
                <div key={i.id} className={classes.cardlist}>
                    <div>
                        <img className={classes.image} src={myItem.image} alt={myItem.productname}/>
                    </div>
                     <div>
                        <h3>{myItem.productname}</h3>
                         <p>{myItem.Cost}</p>
                          <p>{myItem.description}</p>
                       </div>
                      
                </div>
                  
            
                </div>
                 
            })}
       
            
        </div>  
    )
   
}

export default ItemsList;