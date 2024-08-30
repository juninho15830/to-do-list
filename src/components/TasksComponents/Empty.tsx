import styles from "./Empty.module.css"
import  Clipboard  from "../../assets/Clipboard.svg"

export function Empty() {
    return (
        <div className={styles.container}>
            <img src={Clipboard} alt="imagem de prancheta de anotações" width={56}/>
            <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}