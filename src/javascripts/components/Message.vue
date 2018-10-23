<template lang="html">
  <div class="message-item">
    <img class="icon" :src="message.icon" />
      <div class="body">
          <div class="info">
              <div class="name">{{ message.name }}</div>
              <div class="time">{{ message.time }}</div>
          </div>
          <div class="text">{{ message.text }}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      require: true,
    }
  }
}
</script>
