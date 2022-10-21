<template>
  <div>
    <h1>Your profile</h1>
    <RegistrationForm v-if="editable == true" @changeEditable="notEditUser" />
    <UserRegistered v-if="editable == false" />
    <button v-if="editable == false" @click="editUser" class="edit">
      Edit personal data
    </button>
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

<style scoped>
h1 {
  margin-top: 40px;
}
.edit {
  background: #637a30;
  box-shadow: 0px 0px 30px rgb(99 122 48 / 40%);
  border-radius: 4px;
  max-width: 250px;
  margin: auto;
  height: 40px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Prompt";
  transform: translate(0%, -100%);
}
</style>
