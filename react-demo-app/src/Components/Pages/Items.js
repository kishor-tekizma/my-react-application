import marketItems from 'C:/Users/Kishor/Desktop/React/my-react-application/react-demo-app/src/ItemsData.json';
import ItemsList from './ItemsList';
function Items(props){
    return (<section>
        <h1>The Available items</h1>
        <ItemsList items={marketItems}/>
    </section>
    )
}

export default Items;