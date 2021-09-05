<template>
    <div class="container">
        <div class="row">
            <ul>
                <li v-for="user in users">{{ user.name }}</li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        axios.get('/users')
            .then(response => this.users = response.data)
            .catch(error => console.log(error))
    }
}
</script>

<style scoped>

</style>
