<template lang="html">
  <div class="message-item">
    <img class="icon" :src="message.value.icon" />
      <div class="body">
          <div class="info">
              <div class="name">{{ message.value.name }}</div>
              <div class="time">{{ message.timestamp | formatted_time }}</div>
          </div>
          <div class="text">{{ message.value.content }}</div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    message: {
      type: Object,
      require: true,
    }
  },
  filters: {
    formatted_time(value) {
      const time = moment(value)
      return time.format('YYYY/MM/DD HH:mm')
    }
  },
}
</script>
