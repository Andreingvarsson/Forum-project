<template>
<div>
    <div class="card">
      <div class="card-body ">
        <h5 class="card-title">{{user.username}}</h5>
        <p class="card-text">
         {{user.email}}
        </p>
        <span class="card-text">Role: {{user.roles}}</span>
      </div> 
    </div>
</div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component()
class UserListItem extends Vue {
      @Prop({
    required: true,
  })
  user;
    
}

export default UserListItem
</script>

<style scoped>

.card-text{
    font-size: 15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>