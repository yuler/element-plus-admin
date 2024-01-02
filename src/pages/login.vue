<route lang="yaml">
meta:
  title: 登录
  icon: list
  hideInMenu: true
  layout: blank
</route>

<script lang="ts" setup>
import type {FormInstance, FormRules} from 'element-plus'
// import {api} from '~/utils'

const form = reactive({
  username: '',
  password: '',
})
const formRef = ref<FormInstance>()
const formRules = reactive<FormRules>({
  username: [{required: true, message: '请输入用户名'}],
  password: [{required: true, message: '请输入用密码'}],
})

async function onSubmit() {
  // await formRef.value?.validate(async (valid, fields) => {
  //   if (!valid) return
  //   console.log('submit! TODO:')
  //   const result = await api
  //     .post('posts', {
  //       json: {
  //         ...form,
  //       },
  //     })
  //     .json()
  //   console.log(result)
  // })
}

function onReset() {
  if (!formRef) return
  formRef.value?.resetFields()
}
</script>

<template>
  <div w="80" mt="15%" mx="auto">
    <h1 text="center">登录</h1>
    <el-form ref="formRef" :model="form" :rules="formRules" :label-width="80">
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="form.username"
          placeholder="请输入用户名"
          autofocus
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入用密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="onReset">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
