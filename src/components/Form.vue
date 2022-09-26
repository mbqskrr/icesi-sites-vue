<template>
    <div>
      <form @submit.prevent="submitForm" v-if="!formSubmitted">
        <span>Name</span><br>
        <input 
          v-model="name"
          type="text"
          placeholder="Nombre del lugar" 
        /><br>
        <span>Descripción</span><br>
        <input 
          v-model="description"
          type="text"
          placeholder="Descripción del lugar" 
        /><br>
        <span>Precios</span><br>
        <input 
          v-model="price"
          type="text"
          placeholder="$" 
        /><br>
        <input 
          class="submit" 
          type="submit" 
          value="Submit"
        >
      </form>
      <!-- <div v-if="formSubmitted">
        <h3>Form Submitted</h3>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Gender: {{ gender }}</p>
        <small>Click on run to launch the app again.</small>
      </div> -->
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          name: "",
          email: "",
          gender: "",
          formSubmitted: false
        };
      },
    //   methods: {
    //     submitForm: function () {
    //       this.formSubmitted = true
    //     }
    //   },
    };
  </script>
  <style>
    form {
      padding: 10px;
      border: 2px solid black;
      border-radius: 5px;
    }
  
    input {
      padding: 4px 8px;
      margin: 4px;
    }
  
    span {
      font-size: 18px;
      margin: 4px;
      font-weight: 500;
    }
  
    .submit {
      font-size: 15px;
      color: #fff;
      background: #222;
      padding: 6px 12px;
      border: none;
      margin-top: 8px;
      cursor: pointer;
      border-radius: 5px;
    }
  
  </style>