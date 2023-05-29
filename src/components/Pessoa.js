import styles from './Pessoa.module.css'; 

function Pessoa({nome,idade,profissao,foto}){
    return(
        <div className={styles.pessoaContainer} >
            <img src={foto} alt={nome}/>
            <p className={styles.pessoaContainer}>Nome: {nome}</p>
            <p className={styles.pessoaContainer}>Idade:{idade}</p>
            <p className={styles.pessoaContainer}>Profissao:{profissao}</p>
        </div>
    )

}
export default Pessoa