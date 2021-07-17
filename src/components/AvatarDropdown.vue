<template>
    <v-menu @input="showBusiness" bottom min-width="330px" offset-y rounded>
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-avatar color="brown" size="30">
                    <span class="white--text text-h6">{{ user.username[0] }}</span>
                </v-avatar>
            </v-btn>
        </template>

        <v-card :loading="getLoading">
            <v-list-item-content class="justify-center">
                <div class="mx-auto">
                    <div class="text-center mt-3">

                        <v-avatar color="green" size="80">
                            <span class="white--text text-h3">{{ user.username[0] }}</span>
                        </v-avatar>
                        <h3 class="mt-5">{{ user.email_address }}</h3>
                        <p class="text-caption mt-1">
                            {{ user.email }}
                        </p>
                        <v-btn :to="{name:'settings'}" color="grey" depressed outlined rounded small text>
                            <small class="text-sm-center text--darken-1 text-capitalize">
                                Manage your YinPay Account
                            </small>
                        </v-btn>
                    </div>
                    <v-divider class="mt-4 pb-0 mb-0"></v-divider>
                    <v-list tile>
                        <v-list-item-group color="primary" v-model="selectedItem">
                            <v-subheader light><small>Your Businesses</small></v-subheader>
                            <v-list-item :disabled="getCurrentBs.id===item.id" :key="i" @click="setBusiness(item)"
                                         v-for="(item, i) in business.data">
                                <v-list-item-avatar>
                                    <v-img :src="item.logo"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="text-sm-subtitle-2">{{item.name}}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>{{item.btype}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                    <v-divider class="mt-4 pb-0 mb-3"></v-divider>
                    <div class="text-center">
                        <v-btn @click="logout" color="grey" depressed outlined rounded> SignOut</v-btn>
                    </div>
                </div>

            </v-list-item-content>
        </v-card>
    </v-menu>
</template>

<script>
    import {getCurrentUser} from "../utils";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'avatar-dropdown',
        mounted() {

        },
        data() {
            return {
                selectedItem: -1,
                page: 1,
                business: [],

            }
        },
        methods: {
            ...mapActions('business', ['_getBusiness', 'setBusiness']),
            ...mapActions('auth', ['_logout']),
            showBusiness(e) {
                if (e) {
                    this._getBusiness({page: -1}).then((data) => {
                        this.business = data
                    }).catch(() => {
                        this.$message.error('something went wrong')
                    })
                }
            },
            logout() {
                this._logout().then(() => {
                    this.$router.push({name: 'SignIn'})
                }).catch(() => {
                    this.$message.error('Something went wrong')
                })
            }
        },
        computed: {
            ...mapGetters('business', ['getLoading', 'getCurrentBs']),
            user() {
                return getCurrentUser()
            }
        }
    }
</script>
