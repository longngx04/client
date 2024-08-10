import Vue from "vue";
import Router from "vue-router";
import Add from "./views/Add.vue";
import Edit from "./views/Edit.vue";
import Show from "./views/Show.vue";
import Tasks from "./views/Tasks.vue";

Vue.use(Router)
//declare routers
const router = new Router({
    mode: 'history',
   routes: [
      {
         path: '/',
         redirect: '/tasks'
      },
      {
         path: '/tasks',
         name: 'Tasks',
         component: Tasks
      },
      {
         path: '/tasks/add',
         name: 'Add',
         component: Add
      },
      {
         path: '/tasks/show/:id',
         name: 'Show',
         component: Show
      },
      {
         path: '/tasks/edit/:id',
         name: 'Edit',
         component: Edit
      },
   ]
})

export default router