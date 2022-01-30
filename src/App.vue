<template>
  <div id="app">
    <hr />
    <form>
      <label for="fname">First Name</label>
      <input type="text" v-model="name" placeholder="Enter name..." />
      <label for="fname">Number</label>
      <input type="text" v-model="number" placeholder="Enter number..." />
      <button type="submit" v-on:click.prevent="addNewUser()">Add</button>
      <button v-on:click.prevent="saveStorage()">
        Save All
      </button>
    </form>
    <hr />
    <ol>
      <li v-for="(contact, index) in contacts" v-bind:key="index">
        {{ `${contact.name} ............................................................ ${contact.number} `}}

        <button  id="but-remove" v-on:click="removeElement(index)">Remove</button>
        <hr />
      </li>
    </ol>
  </div>
</template>

<script>
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
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c87a5;
  margin-top: 60px;
  margin: 50px auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
li {
  font-size: 20px;
  text-align: left;
  margin-left: 15px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button{
  width: 50%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>
