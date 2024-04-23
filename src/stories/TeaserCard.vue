<script setup lang="ts">
import { ref } from 'vue'
import './teasercard.css'

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
