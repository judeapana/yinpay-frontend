<template>
    <div>
        <v-container>
            <v-row>
                <v-col class="mx-auto mt-6" cols="12" md="5">
                    <v-card :disabled="getLoading" :loading="getLoading">
                        <v-img
                                class="white--text align-end"
                                height="200px"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-card-title>Welcome to YINPAY <br>(Human Resource and Payroll System)</v-card-title>
                            <v-card-title>Sign In</v-card-title>
                            <v-card-text>Please enter your username and password</v-card-text>
                        </v-img>
                        <v-card-text>
                            <SignInForm @on-submit="LoginUser" button="Sign In"></SignInForm>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn :to="{name:'SignUp'}" color="blue" text>Sign Up</v-btn>
                            <v-btn :to="{name:'ForgotPwd'}" color="blue" text>Forgot password</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import SignInForm from "../../components/forms/auth/SignInForm";
    import {mapActions, mapGetters} from "vuex";
    import {getCurrentUser} from "../../utils";

    export default {
        name: 'SignIn',
        components: {SignInForm},
        methods: {
            ...mapActions('auth', ['_auth']),
            LoginUser(form) {
                this._auth(form).then(() => {
                    let user = getCurrentUser()
                    this.$message.loading(`logging you in [${user.username}]`, 1).then(() => {
                        let returnEp = this.$route.query?.return || null
                        if (!returnEp) {
                            this.$router.push({name: 'admin_dashboard'})
                        } else {
                            this.$router.push(returnEp)
                        }
                    })
                }).catch(() => {

                })
            }
        }, computed: {
            ...mapGetters('auth', ['getLoading'])
        }
    }
</script>

<style scoped>

</style>
