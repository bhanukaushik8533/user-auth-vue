<template>
  <div class="">
    <h1>Task Form</h1>
    <input type="text" v-model="taskName" placeholder="Task Name" />
    <br />
    <input type="text" v-model="taskDetails" placeholder="Task Details" />
    <br />
    <input type="text" v-model="urgent" placeholder="Urgent/Not-Urgent" />
    <br />
    <input type="text" v-model="assignedTo" placeholder="Email" />
    <br />
    <button v-on:click="taskform">Submit</button>
  </div>
</template>
<script>
export default {
  name: "taskform",
  data() {
    return {
      taskName: "",
      taskDetails: "",
      urgent: "",
      assignedTo: "",
    };
  },
  methods: {
    submitTask() {
      console.warn(this.taskform);
    },
  },
};
</script>
