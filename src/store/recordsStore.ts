import {reactive, onMounted, watch, h} from "vue";
import showToast from "@/lib/showToast";

export type TagId = number
export type Category = "-" | "="
export type Note = string
export type Amount = string
export type CreatedAt = number
export type RecordItem = {
    selectedTagsId: TagId[];
    category: Category;
    note: Note;
    amount: Amount;
    createAt: CreatedAt;
}
const records = reactive<RecordItem[]>([]);
const localRecords = JSON.parse(window.localStorage.getItem("records") || "[]");
records.push(...localRecords);
const addRecord = (record: RecordItem) => {
    records.push(record);
    showToast({
        content: h("h2", "记录成功"),
        showTime: 2000
    });
};
const useRecords = () => {
    onMounted(() => {
        watch(records, () => {
            window.localStorage.setItem("records", JSON.stringify(records));
        }, {deep: true});
    });
    return {records, addRecord};
};
export {useRecords};