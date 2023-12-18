import { defineStore } from 'pinia' 
import { ref ,  computed } from 'vue'
import axios from 'axios'

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
    //定义异步action
    const list = ref([])
    const getList = async ()=>{
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        list.value = res.data.data.channels
    }

    
    //以对象的方式return供组件使用
    return {
        count,
        increment,
        doubleCount,
        list,
        getList,
        
    }
})
