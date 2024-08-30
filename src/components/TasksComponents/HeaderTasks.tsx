import styles from "./HeaderTasks.module.css"

interface HeaderTasksProps {
    totalTasks: number,
    completedTasks: number,
}

export function HeaderTasks({totalTasks, completedTasks}: HeaderTasksProps) {
    return (
        <header className={styles.headerContainer}>
            <aside>
                <p>Tarefas Criadas</p>
                <span>{totalTasks}</span>
            </aside>
            <aside>
                <p>Concluidas</p>
                <span>{completedTasks} de {totalTasks}</span>
            </aside>
        </header>
    )
}