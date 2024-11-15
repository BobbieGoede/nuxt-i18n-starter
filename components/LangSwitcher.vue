<script lang="ts" setup>
const { locales } = useI18n();
</script>

<template>
  <div class="language-switcher">
    <NuxtLink
      :to="$switchLocalePath(locale.code)"
      v-for="locale in locales"
      :key="locale.code"
    >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>

<style>
.language-switcher {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 0.5em;
}
</style>
