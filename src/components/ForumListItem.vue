<template>
<div class="forum-list">
<div class="forum">{{forum.name}}</div> 
</div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component()
class ForumListItem extends Vue {
    @Prop({
   required: true,
    })
    forum;
   
}

export default ForumListItem
</script>

<style scoped>


.forum{
    color: Black;
    font: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    cursor: pointer;  
}
</style>