<template>
    <div class="container mt-3">
        <div class="row">
            <div class="card">
                <div class="card-header text-center">
                    <h4>Create New Post</h4>
                </div>
                <div class="card-body">
                    <form action="dashboard/post" method="post" @submit.prevent="onsubmit">

                        <div class="row mb-3">
                            <label for="title"></label>
                            <input type="text" class="form-control" id="title" v-model="title" placeholder="title">
                        </div>
                        <div class="row mb-3">
                            <label for="description"></label>
                            <input type="text" class="form-control" id="description" v-model="description" placeholder="description">
                        </div>
                        <div class="row mb-3">
                            <label for="body"></label>
                            <input type="text" class="form-control" id="body" v-model="body" placeholder="body">
                        </div>
                        <div class="row mb-3">
                            <button type="submit" id="submit" class="btn btn-success">save post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: '',
            description: '',
            body: '',
            errors: {}
        }
    },
    methods:{
        onsubmit(){
            axios.post('/dashboard/post' , this.$data)
                .then(response => console.log(response.data))
                .catch(error => this.errors = error.response.data );
        }
    }
}
</script>

<style scoped>

</style>
