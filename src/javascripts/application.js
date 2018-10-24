import Message from 'components/Message'

const milkcocoa = new MilkCocoa(process.env.API_KEY);
const ds = milkcocoa.dataStore('sample');

const app = new Vue({
  el: "#app",
  components: {
    Message
  },
  beforeMount() {
    ds.stream()
      .next((err, messages) => {
        this.messages = messages;
      });

    ds.on('push', (value) => {
      this.messages.push(value);
    });
  },
  data: {
    messages: [],
    inputText: ""
  },
  methods: {
    send () {
      const now = new Date();
      ds.push({name : 'kawasaki', send_at: now, content : this.inputText, icon: 'https://avatars1.githubusercontent.com/u/6297063?s=460&v=4'});
      this.inputText = ""
    }
  }
})
