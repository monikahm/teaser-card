<template>
  <div
    :class="'teaser-card teaser-card--' + size"
    @mouseover="showAll = true"
    @mouseleave="showAll = false"
  >
    <img
      alt="Vue logo"
      class="teaser-card__logo"
      src="../assets/exampleimg.jpeg"
      @click="onClick({ name: 'action_media', id, title })"
    />
    <div class="teaser-card__content" @click="onClick({ name: 'action_content', id, title })">
      <div class="teaser-card--relative">
        <div class="teaser-card--absolute">
          <h1 class="teaser-card__title">{{ shortTitle() }}</h1>
          <h3 :class="{ 'teaser-card--initial-letter': initialLetter }">
            {{ shortIngress() }}
          </h3>
        </div>
        <h1 class="teaser-card__title">{{ title }}</h1>
        <h3 :class="{ 'teaser-card--initial-letter': initialLetter }">
          {{ ingress }}
        </h3>
      </div>
      <div>
        <span v-for="(tag, index) in tags" :key="index">
          <span>{{ tag.toLocaleUpperCase() }}</span>
          <span v-if="tags.length > index + 1">{{ ' | ' }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import './teasercard.css'

export default {
  props: {
    size: {
      type: String,
      validator: function (value: string) {
        return ['xl', 'large', 'medium', 'small'].indexOf(value) !== -1
      }
    },
    title: {
      type: String,
      required: false
    },
    ingress: {
      type: String,
      required: true
    },
    tags: {
      type: Array<String>,
      required: true
    },
    initialLetter: {
      type: Boolean,
      required: false
    },
    id: {
      type: Number,
      required: true
    }
  },
  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)
    const showAll = ref(false)

    return {
      showAll,
      shortIngress() {
        if (props.ingress) {
          return showAll.value
            ? props.ingress
            : props.ingress.length > 120
              ? props.ingress.substring(0, 120) + '...'
              : props.ingress
        }
        return undefined
      },
      shortTitle() {
        if (props.title) {
          return props.title.length > 30 ? props.title.substring(0, 30) + '...' : props.title
        }
        return undefined
      },
      onClick({ name, id, title }: { name: string; id: number; title?: string }) {
        emit('click', { name, id, title })
      }
    }
  }
}
</script>
