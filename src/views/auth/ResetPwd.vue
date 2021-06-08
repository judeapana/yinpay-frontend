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
                            <v-card-title>Reset Your account information</v-card-title>
                            <v-card-text>Kindly provide a new password for your account
                            </v-card-text>
                        </v-img>
                        <v-card-text>
                            <ResetPwdForm :errors="errors" @on-submit="resetPwd" button="change"></ResetPwdForm>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import ResetPwdForm from "../../components/forms/auth/ResetPwdForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'ResetPwd',
        mounted() {
            this.token = this.$route.query?.token || null
            if (!this.token) {
                this.$message.error('Link is not valid,please request a new one')
                this.$router.push({name: 'ForgotPwd'})
            } else {
                this._reset_pwd({token: this.token}).catch(() => {
                    this.$router.push({name: 'ForgotPwd'})
                })
            }
        },
        components: {ResetPwdForm},
        data() {
            return {
                token: null,
                errors: null
            }
        },
        methods: {
            ...mapActions('auth', ['_reset_pwd', '_put_reset_pwd']),
            resetPwd(form) {
                this._put_reset_pwd({...form, token: this.token}).then(() => {
                    this.$router.push({name: 'SignIn'})
                }).catch((error) => {
                    this.errors = error
                })
            }
        },
        computed: {
            ...mapGetters('auth', ['getLoading'])
        }
    }
</script>

<style scoped>

</style>
