import {reactive, watch, onMounted} from "vue";
import {createId} from "@/lib/createId";
import showToast from "@/lib/showToast";
import {h} from "vue";

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
const tagToast = (message: string) => {
    showToast({content: h("h2", message), showTime: 2000});
};
const addTag = () => {
    const tagName = window.prompt("请输入标签名");
    if (tagName === null || tagName === "") {
        tagToast("请输入标签名");
    } else if (tagExist(tagName)) {
        tagToast("标签已存在");
    } else {
        tags.push({id: createId(), name: tagName});
    }
};
const findTag = (id: number) => {
    return tags.find(tag => tag.id === id);
};
const _deleteTag = (id: number) => {
    const tag = findTag(id);
    let index;
    tag && tags.splice(index = tags.indexOf(tag), 1);
    return index;
};
const deleteTag = (id: number) => {
    _deleteTag(id);
    tagToast("删除成功");
};
const updateTag = (id: number, name: string) => {
    const index = _deleteTag(id) || tags.length;
    tags.splice(index, 0, {
        id, name
    });
    tagToast("修改成功");
};
const useTag = () => {
    onMounted(() => {
        watch(tags, () => {
            window.localStorage.setItem("tags", JSON.stringify(tags));
        }, {
            deep: true
        });
    });
    return {tags, addTag, deleteTag, findTag, updateTag};
};
export {useTag};