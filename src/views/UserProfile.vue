<template>
  <div>
    <RegistrationForm v-if="!$store.state.userData.name" />
    <UserRegistered v-if="$store.state.userData.name" />
  </div>
</template>

<script>
import RegistrationForm from "../components/RegistrationForm.vue";
import UserRegistered from "../components/UserRegistered.vue";
export default {
  name: "UserProfile",
  components: {
    RegistrationForm,
    UserRegistered,
  },
};
</script>
