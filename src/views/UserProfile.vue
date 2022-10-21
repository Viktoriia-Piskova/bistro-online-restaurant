<template>
  <div>
    <h2>{{ editable }}</h2>
    <RegistrationForm v-if="editable == true" @changeEditable="notEditUser" />
    <UserRegistered v-if="editable == false" />
    <button v-if="editable == false" @click="editUser">Edit user data</button>
  </div>
</template>

<script>
import RegistrationForm from "../components/RegistrationForm.vue";
import UserRegistered from "../components/UserRegistered.vue";
export default {
  name: "UserProfile",
  data() {
    return {
      editable: true,
    };
  },
  components: {
    RegistrationForm,
    UserRegistered,
  },
  methods: {
    editUser() {
      this.editable = true;
    },
    notEditUser() {
      this.editable = false;
    },
  },
};
</script>
