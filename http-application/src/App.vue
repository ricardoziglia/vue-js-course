<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Vue Http</h1>
                    <div class="form-group"> 
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="userName" class="form-control" v-model="user.username">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" id="email" class="form-control" v-model="user.email">
                        </div>
                        <button type="submit" @click.prevent="submitForm">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <input type="text" class="form-control" v-model="node">
        <br>
        <br>
        <button type="submit" @click="fetchData">Get data</button>
        <br/><br/>
        <ul class="list-group">
            <li class="list-group-item" v-for="(u, index) in users" :key="index">{{u.username}} - {{u.email}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: ''
            }
        },
        methods: {
            submitForm() {
                // this.$http
                //     .post('data.json', this.user)
                //     .then(response => {
                //         console.log(response);
                //     }, error => {
                //         console.log(error);
                //     });
                //this.resource.save({}, this.user);
                this.resource.customSave(this.user);
            },
            fetchData() {
                // this.$http
                //     .get('data.json')
                //     .then(response => {
                //         return response.json();
                //     }, error => {
                //         console.log(error);
                //     })
                //     .then(data => {
                //         const result = [];

                //         for (const key in data) {
                //             if (data.hasOwnProperty(key)) {
                //                 const element = data[key];
                //                 result.push(element);
                //             }
                //         }

                //         this.users = result;
                //     });
                this.resource
                    .getData({node: this.node})
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const result = [];

                        for (const key in data) {
                            if (data.hasOwnProperty(key)) {
                                const element = data[key];
                                result.push(element);
                            }
                        }

                        this.users = result;
                    });
            }
        },
        created() {
            const customActions = {
                customSave: {
                    method: 'POST',
                    url: 'custom.json'
                },
                getData: {
                    method: 'GET'
                }
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        },
    }
</script>

<style>
</style>
