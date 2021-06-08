<template>
    <div>
        <v-container>
            <v-row>
                <v-col class="mx-auto mt-6" cols="12" md="6">
                    <v-card :loading="getLoading">
                        <v-img
                                class="white--text align-end"
                                height="200px"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-card-title>Sign Up</v-card-title>
                            <v-card-text>To create a new account enter your please provide your information
                            </v-card-text>
                        </v-img>
                        <v-card-text>
                            <SignUpForm :errors="errors" @on-submit="joinUser" button="join us"></SignUpForm>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn :to="{name:'ForgotPwd'}" color="blue" text>Forgot password</v-btn>
                            <v-btn :to="{name:'SignIn'}" color="blue" text>Sign In</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
    import SignUpForm from "../../components/forms/auth/SignUpForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'SignUp',
        components: {SignUpForm},
        data() {
            return {
                errors: null
            }
        },
        methods: {
            ...mapActions('auth', ['_register', '_auth']),
            joinUser(form) {
                this._register(form).then(() => {
                    this.$message.loading('redirecting..', 1).then(() => {
                        this.$router.push({name: 'SignIn'})
                    })
                }).catch((errors) => {
                    this.errors = errors
                })
            }
        }, computed: {
            ...mapGetters('auth', ['getLoading'])
        }
    }
</script>

<style scoped>

</style>
