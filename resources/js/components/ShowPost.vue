<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">User List</div>
                    <div class="card-body">
                        <table>
                            <tr>
                                <th>title</th>
                                <th>desc</th>
                                <th>operate</th>
                            </tr>
                            <tr v-for="post in posts" :key="post.id">
                                <td>{{ post.title }}</td>
                                <td>{{ post.description }}</td>
                                <td>
                                    <button class="btn btn-danger" v-on:click="deletePost(post.id)">X</button>
                                    <button class="btn btn-primary" v-on:click="editPost(post.id)">E</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: {},
        }
    },
    methods:{
        getPosts(){
            axios.get('/dashboard/getPosts')
                .then(response => this.posts = response.data.posts)
                .catch(error => console.log(error));
        },
        deletePost(id){
            if(confirm("Do you really want to delete?")) {
                axios.delete('/dashboard/post/' + id)
                    .then(response => this.onSuccess(response))
                    .catch(error => error.response.data.errors)
            }
        },
        onSuccess(response){
            this.getPosts();
            alert(response.data);
        },
        editPost(id){
            window.location = "/dashboard/post/" + id + "/edit";
        }
    },
    mounted() {
        this.getPosts()
    }
}
</script>

<style scoped>

</style>
