export type TagId = number
export type Category = "-" | "="
export type Note = string
export type Amount = string
export type CreatedAt = number
export type RecordItem = {
    selectedTagsId: TagId;
    category: Category;
    note: Note;
    amount: Amount;
    createAt: CreatedAt;
}