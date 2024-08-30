import styles from "./Task.module.css"
import { Trash, Check } from "phosphor-react"

interface TaskProps {
  task: {
    id: string;
    content: string;
    isChecked: boolean;
  }
  onTaskDelete: (id: string) => void
  onToggleTask: (id: string, isChecked: boolean) => void
}

export function Task({ task, onTaskDelete, onToggleTask }: TaskProps) {
  const styleCheckedBox = task.isChecked ? styles['checked-box'] : styles['unchecked-box']
  const styleCheckedTask = task.isChecked ? styles['checked-paragraph'] : ''

  return (
    <div className={styles.task} >
      <div className={styles.container}>
        <div>
          <label htmlFor="checkbox">
            <div>
              <span className={`${styles.checkbox} ${styleCheckedBox}`} onClick={() => onToggleTask(task.id, task.isChecked)}>
                {task.isChecked && <Check size={12} />}
              </span>
            </div>
            <p className={`${styles.paragraph} ${styleCheckedTask}`}>
              {task.content}
            </p>
          </label>
        </div>
        <button
          onClick={() => onTaskDelete(task.id)}//É preciso passar função anonima quando necessario passar parametros dentro da função no component
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}