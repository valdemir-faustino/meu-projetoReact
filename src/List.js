import Item from './Item'

function List(){
    return(
        <>
        <h1>Minha Llista</h1>
        <ul>
            <Item marca="ferrary" ano_lancamento={1985}/>
            <Item marca="fiat" ano_lancamento={1978}/>
            <Item marca="Renaut"/>
        </ul>
        </>
    )
}
export default List