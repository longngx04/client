<template>
    <div>
      <table class="ui celled table">
        <thead>
          <tr>
            <th colspan="5">List Of Tasks</th>
          </tr>
          <tr>
            <th>Tasks</th>
            <th>Created Date</th>
            <th>Status</th>
            <th colspan="3">Menu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, i) in tasks" :key="i">
            <td>{{ task.name }}</td>
            <td>{{ task.created_date }}</td>
            <td>{{ task.status }}</td>
            <td>
              <router-link
                class="ui button green"
                :to="{ name: 'Show', params: { id: task._id } }"
              >
                Show
              </router-link>
            </td>
            <td>
              <router-link
                class="ui button yellow"
                :to="{ name: 'Edit', params: { id: task._id } }"
              >
                Edit
              </router-link>
            </td>
            <td>
              <a class="ui button red" @click.prevent="onDelete(task._id)">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>
import {ViewAllTasks, DeleteATask} from "../helpers/apiConsume";

export default{
    name:"Tasks",
    data(){
        return {
            tasks:[],
        }
    },
    async mounted(){
        this.tasks = await ViewAllTasks()
    },
    methods: {
            async onDelete(id) {
        //1. display confirm message before deletion
        const deleteConfirm = window.confirm(
            "Are you sure to delete this word ?"
        );
        if (deleteConfirm) {
            //2. delete word from database
            await DeleteATask(id);
            //3. refresh the word list (remove deleted words)
            const updatedTask = this.task.filter((task) => task._id !== id);
            this.task = updatedTask;
            //4. display flash message after deletion
            this.flash("Delete word succeed !");
            }
        },
    
    }
}
</script>