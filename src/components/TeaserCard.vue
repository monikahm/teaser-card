<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  size: 'xl' | 'large' | 'medium' | 'small'
  title?: string
  ingress: string
  tags: Array<String>
  initialLetter?: Boolean
  id?: number
}>()
const showAll = ref(false)

const shortTitle = () => {
  if (props.title) {
    return props.title.length > 30 ? props.title.substring(0, 30) + '...' : props.title
  }
  return undefined
}

const shortIngress = () => {
  if (props.ingress) {
    return showAll.value
      ? props.ingress
      : props.ingress.length > 120
        ? props.ingress.substring(0, 120) + '...'
        : props.ingress
  }
  return undefined
}

const handleTitleClick = () => {
  // Dispatch custom event with action name and data
  const actionData = {
    action: 'action_content',
    title: props.title,
    id: props.id
  }
  const event = new CustomEvent('customAction', { detail: actionData })
  document.dispatchEvent(event)
}
const handleMediaClick = () => {
  // Dispatch custom event with action name and data
  const actionData = {
    action: 'action_media',
    title: props.title,
    id: props.id
  }
  const event = new CustomEvent('customAction', { detail: actionData })
  document.dispatchEvent(event)
}
</script>

<template>
  <div
    :class="'teaser-card teaser-card--' + props.size"
    @mouseover="showAll = true"
    @mouseleave="showAll = false"
  >
    <img
      alt="Vue logo"
      class="teaser-card__logo"
      src="../assets/exampleimg.jpeg"
      @click="handleMediaClick"
    />
    <div class="teaser-card__content" @click="handleTitleClick">
      <div class="teaser-card--relative">
        <div class="teaser-card--absolute">
          <h1 class="teaser-card__title">{{ shortTitle() }}</h1>
          <h3 :class="{ 'teaser-card--initial-letter': props.initialLetter }">
            {{ shortIngress() }}
          </h3>
        </div>
        <h1 class="teaser-card__title">{{ props.title }}</h1>
        <h3 :class="{ 'teaser-card--initial-letter': props.initialLetter }">
          {{ props.ingress }}
        </h3>
      </div>
      <div>
        <span v-for="(tag, index) in props.tags" :key="index">
          <span>{{ tag.toLocaleUpperCase() }}</span>
          <span v-if="props.tags.length > index + 1">{{ ' | ' }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --font-800: 800;
  --font-600: 600;
  --font-400: 400;
}

span {
  font-variant: all-petite-caps;
}
.teaser-card--relative {
  position: relative;
  visibility: hidden;
}
.teaser-card--absolute {
  position: absolute;
  visibility: visible;
}

/* Common styles for all teaser cards */
.teaser-card {
  --img-height: 400px;
  cursor: pointer;
  background-color: var(--color-background);
  box-sizing: border-box;
  display: flex;
  height: fit-content; /* remove this if height should follow the parent contaner and add height 100% to __content*/
  border-bottom: 1px solid rgb(114, 114, 114);
}

.teaser-card__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding: 1rem;
}

/* Logo styles */
.teaser-card .teaser-card__logo {
  object-fit: cover;
  max-height: var(--img-height);
}

/* Extra Large Card */
.teaser-card--xl {
  flex-direction: column;
  position: relative;
}

.teaser-card--xl h1 {
  font-weight: 800;
  font-size: 2rem;
  font-variant: small-caps;
}

.teaser-card--xl .teaser-card__content {
  flex-direction: column-reverse;
  justify-content: flex-end;
  height: calc(var(--img-height) / 2);
  color: white;
  position: absolute;
  bottom: 0;
}

/* Large Card */
.teaser-card--large {
  --card-height: 320px;
  --img-height: calc((var(--card-height) / 3) * 2);
  flex-direction: column;
}

.teaser-card--large h1 {
  font-size: 1rem;
  font-weight: 400;
}

.teaser-card--large h3 {
  font-size: 2rem;
  font-weight: 600;
}

/* Medium Card */
.teaser-card--medium {
  --img-height: 160px;
}

.teaser-card--medium .teaser-card__logo {
  width: var(--img-height);
}

.teaser-card--medium h1 {
  font-size: 1rem;
}

.teaser-card--medium h3 {
  font-weight: 600;
  font-size: 1.5rem;
}

/* Small Card */
.teaser-card--small {
  --img-height: 160px;
  background-color: rgb(255, 248, 239);
}

.teaser-card--small .teaser-card__logo {
  display: none;
}

.teaser-card--small .teaser-card--initial-letter::first-letter {
  font-size: 2rem;
}
</style>
