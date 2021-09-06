<template>
    <div class="container">
        <div class="row">
            <ul>
                <li v-for="post in posts">{{ post.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        axios.get('/index')
            .then(response => this.posts = response.data)
            .catch(error => console.log(error))
    }
}
</script>

<style scoped>

</style>
