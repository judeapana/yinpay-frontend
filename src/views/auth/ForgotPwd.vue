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
                            <v-card-title>Forgot password</v-card-title>
                            <v-card-text>Please enter your email address</v-card-text>
                        </v-img>
                        <v-card-text>
                            <ForgotPwdForm :errors="errors" @on-submit="forgotPwd" button="submit"></ForgotPwdForm>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn :to="{name:'SignIn'}" color="blue" text>Sign In</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import ForgotPwdForm from "../../components/forms/auth/ForgotPwdForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'ForgotPwd',
        components: {ForgotPwdForm},
        data() {
            return {
                errors: null
            }
        },
        methods: {
            ...mapActions('auth', ['_forgot_pwd']),
            forgotPwd(form) {
                this._forgot_pwd(form).then(() => {
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
