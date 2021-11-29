import { ref } from "vue";
import axios from "axios";
const usePost = () => {
    const data = ref(null);
    const loadingFlag = ref(false);
    const error = ref(null);
    async function getList() {
        // 开启加载状态
        loadingFlag.value = true;
        try {
            // 发请求
            let { data: listData } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            // 存数据
            data.value = listData;
        } catch (error) {
            error.value = error.message;
        }
        // 恢复加载状态
        loadingFlag.value = false;
    }
    return { data, loadingFlag, error, getList };
}

export {
    usePost
}