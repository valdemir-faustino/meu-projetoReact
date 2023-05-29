function ListaDeItens({ itens }) {
    return (
      <ul>
        {itens.map(item => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    );
  }
export default ListaDeItens  