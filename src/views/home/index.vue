<template>
  <div :class="style.page">
    <div @click="handleClick">home</div> 
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>
<script>
import style from './index.module.css';
import api from '@/request/api';

export default {
  data () {
    return {
      style,
      input: 'd'
    }
  },
  methods: {
    async handleClick () {
      const data = await this.$http.get(api.getWechat)
      console.log(data, 'pppppppppppp')
    },
    async handlePost () {
      const data = {
        name: 'name'
      }
      const res = await this.$http.post(api.getWechat, data)
      console.log(res, 'pppppppppppp')
    }
  }
};
</script>