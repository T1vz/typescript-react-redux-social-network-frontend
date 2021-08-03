export interface Todo {
    subject: string | null
    content: string
    isChecked: boolean
    _id: string
    deadline: Date
}