<template>
    <div>
        <v-container>
            <v-row>
                <v-col class="mx-auto mt-6" cols="12" md="6">
                    <v-card :loading="getLoading">
                        <v-card-title>Activating Your account</v-card-title>
                        <v-card-text>
                            <p>This will not take long</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'ActivateAccount',
        components: {},
        mounted() {
            this.token = this.$route.query?.token || null
            if (!this.token) {
                this.$router.push({name: 'SignIn'})
            } else {
                this._activate_account({token: this.token}).then(() => {
                    this.$message.loading('redirecting...').then(() => {
                        this.$router.push({name: 'SignIn'})
                    })
                }).catch(() => {
                    this.$message.loading('redirecting...').then(() => {
                        this.$router.push({name: 'SignIn'})
                    })
                })
            }
        },
        data() {
            return {
                token: null
            }
        },
        methods: {
            ...mapActions('auth', ['_activate_account']),
        },
        computed: {
            ...mapGetters('auth', ['getLoading'])
        }
    }
</script>

<style scoped>

</style>
