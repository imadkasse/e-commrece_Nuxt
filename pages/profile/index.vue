<script lang="ts" setup>
import auth from "~/middlewares/auth";

const { user } = useUserInfo();

definePageMeta({
  middleware: auth,
});
</script>

<template>
  <div>
    <div v-if="user">
      <h1>username: {{ user.username }}</h1>
      <h1>email: {{ user.email }}</h1>
      <h1>password: {{ user.password }}</h1>
    </div>
    <div v-else>username: Not found</div>
  </div>
</template>
