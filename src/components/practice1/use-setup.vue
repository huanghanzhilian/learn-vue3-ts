<template>
  <h1>{{ count }}</h1>
  <p>{{ double }}</p>
  <a herf="javascript:;" @click="addCount">add</a>
  <p>Name: {{ person.name }}</p>
  <p>Age: {{ person.age }}</p>
  <a herf="javascript:;" @click="person.change">change name</a>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <a herf="javascript:;" @click="change">change name</a>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2); // double 是 computedRef 对象
    const addCount = () => {
      count.value++; // 使用引用类型，修改一个，其他也会更新
    }
    const person = reactive({
      name: 'viking',
      age: 20,
      change() {
        person.name = 'maomao';
        person.age = 30;
      }
    })
    const person2 = toRefs(person);
    return {
      count,
      addCount,
      double,
      person,
      ...person2
    }
  }
})
</script>
