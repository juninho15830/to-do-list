import { ChangeEvent, FormEvent, useState } from "react"
import styles from "./Form.module.css"
import { PlusCircle } from "phosphor-react"

interface FormProps {
    onTaskCreate: (content: string) => void;
}

export function Form({ onTaskCreate }: FormProps) {
    const [content, setContent] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
    
        onTaskCreate(content)
    
        setContent('')
    }

    function handleContentChanged(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value)//Salvando o conteudo do input no estado
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.form}>
            <input
                name="input"
                className={styles.input}
                placeholder="Adicione uma nova tarefa"
                required
                onChange={handleContentChanged}
                value={content}
            />
            <button 
                type="submit"
                className={styles.buttonContainer}
             >
                Criar <PlusCircle size={20} />
            </button>
        </form>
    )
}