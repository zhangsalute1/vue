import { defineStore } from 'pinia' 
import { ref ,  computed } from 'vue'
export const usedefineStore= defineStore('counter',()=>{
    //定义数据
    const count = ref(0)
    //修改数据的方法(action 同步+异步)
    const increment = ()=>{
        count.value++
    }  
    //getter定义
    const doubleCount = computed(()=>{
        return  count.value*2
    })

    //以对象的方式return供组件使用
    return {
        count,
        increment,
        doubleCount,
    }
})
