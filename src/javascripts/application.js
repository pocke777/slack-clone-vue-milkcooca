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
    inputText: "",
    visibled: false,
    name: "sample",
    icon: "https://pocke777.github.io/slides/assets/icon.png"
  },
  methods: {
    send () {
      const now = new Date();
      ds.push({name : this.name, send_at: now, content : this.inputText, icon: this.icon});
      this.inputText = ""
    },
    toggleModal() {
      this.visibled = !this.visibled;
    }
  }
})
