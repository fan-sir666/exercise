import { useState } from "react";

export default function useStorage(key, initialValue) {
    // 声明状态
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    })

    const setState = (value) =>{
        
    }
}
