<template>
    <div class="container mt-3">
        <div class="row">
            <div class="card">
                <div class="card-header text-center">
                    <h4>Update Post</h4>
                </div>
                <div class="card-body">
                    <form id="form" action="/dashboard/post/" method="post" @submit.prevent="onSubmit(form.id)" @keydown="clear($event.target.name)">
                        <div class="row mb-3">
                            <label for="title"></label>
                            <input type="text" class="form-control" name="title" id="title" placeholder="title" v-model="form.title">
                            <span class="text-danger" v-if="has('title')" v-text="get('title')"></span>
                        </div>
                        <div class="row mb-3">
                            <label for="description"></label>
                            <input type="text" class="form-control" name="description" id="description" placeholder="description" v-model="form.description">
                            <span class="text-danger" v-if="has('description')" v-text="get('description')"></span>
                        </div>
                        <div class="row mb-3">
                            <label for="body"></label>
                            <input type="text" class="form-control" name="body" id="body" placeholder="body" v-model="form.body">
                            <span class="text-danger" v-if="has('body')" v-text="get('body')"></span>
                        </div>
                        <div class="row mb-3">
                            <button type="submit" id="submit" class="btn btn-success" :disabled="any()">update post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['post'],
    data(){
        return{
            form:{
                id: this.post.id,
                title: this.post.title,
                description: this.post.description,
                body: this.post.body,
            },
            errors : {}
        }
    },
    methods: {
        onSubmit(id) {
            axios.patch('/dashboard/post/' + id , this.form)
                .then(response => this.onSuccess(response.data.message))
                .catch(error => this.record(error.response.data.errors));
        },
        onSuccess(response) {
            alert(response);
            window.location = "/dashboard/post";
        },
        has(field) {
            return this.errors.hasOwnProperty(field);
        },

        any() {
            return Object.keys(this.errors).length > 0;
        },

        get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        },

        clear(field) {
            delete this.errors[field];
        },

        record(errors) {
            this.errors = errors;
        },
    },
}
</script>

<style scoped>

</style>
