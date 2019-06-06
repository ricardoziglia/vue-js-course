<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <div class="form-group"> 
                        <!-- Full Name (First Name + Last Name)
                        <div class="form-group">
                            <label for="email">First Name</label>
                            <input type="text" id="fname" class="form-control" v-model="firstName">
                        </div>
                        <div class="form-group">
                            <label for="email">Last Name</label>
                            <input type="text" id="lname" class="form-control" v-model="lastName">
                        </div>
                         -->
                        <!-- Exercise 3 -->
                        <!-- Edit the Example from above and create a custom "Full Name" Control -->
                        <!-- which still holds the First Name and Last Name Input Field -->
                        <app-full-name-input v-model="fullName"></app-full-name-input>
                        <!-- Mail -->
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" id="email" class="form-control" v-model="email">
                        </div>
                        <!-- Password -->
                        <div class="form-group">
                            <label for="email">Password</label>
                            <input type="password" id="password" class="form-control" v-model="password">
                        </div>

                        <!-- Store Data? Yes/No -->
                        <div class="form-group">
                            <div class="row">
                                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                                    <p>Store Data?</p>
                                    <label for="no">
                                        <input type="radio" id="storedatano" value="Nope" v-model="storeData"> No
                                    </label>
                                    <label for="yes">
                                        <input type="radio" id="storedatayes" value="Yep" v-model="storeData"> Yes
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" @click.prevent="submitForm">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <!-- Exercise 2 -->
        <!-- Only display the Form if it has NOT been submitted -->
        <!-- Display the Data Summary ONCE the Form HAS been submitted -->
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName.firstName}} {{fullName.lastName}}</p>
                             
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullNameInput from './components/FullNameInput.vue';
    export default {
        data() {
            return {
                fullName: {
                    firstName: 'Ricardo',
                    lastName: 'Ziglia'
                },
                email: 'ricardoziglia@vue.org',
                password: '',
                isSubmitted: false,
                storeData: 'Nope'
            };
        },
        methods: {
            submitForm() {
                this.isSubmitted = true;
            }
        },
        components: {
            appFullNameInput: FullNameInput
        }
    }
</script>

<style>
</style>
