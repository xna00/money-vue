import {reactive, watch, onMounted} from "vue";
import {createId} from "@/lib/createId";

type Tag = {
    id: number;
    name: string;
}
const defaultTags = (): Tag[] => [
    {id: createId(), name: "衣"},
    {id: createId(), name: "食"},
    {id: createId(), name: "住"},
    {id: createId(), name: "行"}
];
const tags = reactive<Tag[]>([]);
const localTags = JSON.parse(window.localStorage.getItem("tags") || JSON.stringify(defaultTags()));
tags.push(...localTags);
console.log(tags);
window.localStorage.setItem("tags", JSON.stringify(tags));
const tagExist = (tagName: string) => {
    for (let i = 0; i < tags.length; i++)
        if (tags[i].name === tagName)
            return true;
    return false;
};
const addTag = () => {
    const tagName = window.prompt("请输入标签名");
    if (tagName === null || tagName === "") {
        console.log()
    } else if (tagExist(tagName)) {
        console.log();
    } else {
        tags.push({id: createId(), name: tagName});
    }
};
const findTag = (id: number) => {
    return tags.find(tag => tag.id === id)
}
const filterTag = (id: number) => tags.filter(tag => tag.id !== id)
const deleteTag = (id: number) => {
    // setTags(filterTag(id))
}
const updateTag = (id: number, name: string) => {
    // setTags(filterTag(id).concat({id, name}))
}
const useTag = () => {
    onMounted(() => {
        watch(tags, () => {
            window.localStorage.setItem("tags", JSON.stringify(tags));
        }, {
            deep: true
        });
    });
    return {tags, addTag};
};
export {useTag};