<template>
    <div>
      <h1>New Task</h1>
      <form action="" @submit.prevent="onSubmit">
        <div class="ui labeled input fluid">
          <div class="ui label">Task Name</div>
          <input type="text" required v-model="task.name" />
        </div>
        <br />
        <div class="ui labeled input fluid">
          <div class="ui label"> Created Date</div>
          <input type="date" required v-model="task.created_date" />
        </div>
        <br />
        <div class="ui labeled input fluid">
        <div class="ui label">Status</div>
        <select required v-model="task.status" class="ui dropdown">
          <option value="" disabled>Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">On-Going</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
        <button class="ui primary button">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { CreateATask } from "../helpers/apiConsume";
  export default {
    name: "Add",
    data() {
      return {
        task: {},
      };
    },
    methods: {
      onSubmit: async function () {
        //1. add new word to database using axios
        await CreateATask(this.task);
        //2. display succeed message using vue-flash
        this.flash("Add new task succeed !");
        //3. redirect to word list using $router
        this.$router.push("/tasks");
      },
    },
  };
  </script>