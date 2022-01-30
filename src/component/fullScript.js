export default {
  name: "App",
  data() {
    return {
      contacts: [],
      name: "",
      number: "",
      jsonParsed: [],
    };
  },
  mounted() {
    this.jsonParsed = JSON.parse(localStorage.getItem("data"));
    if (this.jsonParsed.length > 0) {
      this.contacts = this.jsonParsed;
    }

    console.log(this.contacts);
  },
  methods: {
    addNewUser() {
      let newUser = {
        name: this.name,
        number: this.number,
      };
      this.contacts.push(newUser);
      this.name = "";
      this.number = "";
    },
    removeElement(index) {
      if (this.contacts.length > 0) {
        this.contacts.splice(index, 1);
      }
    },
    saveStorage() {
      localStorage.setItem("data", JSON.stringify(this.contacts));
    },
  },
};