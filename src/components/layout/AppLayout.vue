<template>
    <a-spin :spinning="getLoading" tip="Processing">
        <div class="spin-content">

            <v-sheet>

                <v-app-bar app color="white" elevation="1" v-if="getCurrentBs">
                    <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
                    <v-app-bar-title v-text="title"></v-app-bar-title>
                    <v-spacer></v-spacer>
                    <v-btn @click="visible=!visible" rounded>
                        Business
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn :to="{name:'reports'}" class="mx-2" rounded>
                        Reports
                        <v-icon>mdi-content-paste</v-icon>
                    </v-btn>

                    <AvatarDropdown/>
                </v-app-bar>

                <!--    navigation-->
                <v-navigation-drawer app light v-if="getCurrentBs" v-model="drawer">
                    <template v-slot:prepend>
                        <v-list-item :to="{name:'admin_dashboard'}" two-line>
                            <v-list-item-avatar>
                                <v-img :src="logo"/>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-skeleton-loader class="mx-auto" max-width="300" type="text@2"
                                                   v-if="!getCurrentBs"></v-skeleton-loader>
                                <v-list-item-title v-if="getCurrentBs">{{getCurrentBs.name}}</v-list-item-title>
                                <v-list-item-subtitle v-if="getCurrentBs">{{getCurrentBs.btype}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>

                    <v-list dense rounded v-if="getCurrentBs">
                        <template v-for="item in items">
                            <v-list-group :key="item.title" :prepend-icon="item.icon" :to="item.to"
                                          v-if="item.subs">
                                <template v-slot:activator>
                                    <v-list-item-title v-text="item.title"/>
                                </template>
                                <v-list-item :key="sub.title" :to="sub.to" link
                                             v-for="sub in item.subs">
                                    <v-list-item-icon>
                                        <v-icon v-text="sub.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title v-text="sub.title"></v-list-item-title>
                                </v-list-item>
                            </v-list-group>

                            <v-list-item :key="item.title" :to="item.to" v-else>
                                <v-list-item-icon>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-navigation-drawer>

                <v-main tag="main" v-if="getCurrentBs">
                    <div class="mx-5 mt-5">
                        <slot name="content"></slot>
                    </div>
                </v-main>
                <modal :destroyOnClose="true" :dialog-style="{ top: '20px' }"
                       :mask-style="{backgroundColor:'rgba(29,25,25,0.53)'}"
                       :visible="visible"

                       title="Setup A New Business" width="700px">
                    <template v-slot:closeIcon>
                        <v-btn @click="visible =!visible" depressed icon v-if="getCurrentBs">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </template>
                    <template v-slot:footer>
                        <v-btn @click="logout" depressed v-if="!getCurrentBs">Logout</v-btn>
                        <v-btn @click="visible =!visible" depressed v-if="getCurrentBs">Close</v-btn>
                    </template>
                    <BusinessForm :errors="errors" @on-submit="submit" button="Create"></BusinessForm>
                </modal>

                <Footer v-if="getCurrentBs"/>
            </v-sheet>
        </div>
    </a-spin>
</template>

<script>
    import Footer from "./Footer";
    import {menus} from "../../utils/menu";
    import AvatarDropdown from "../AvatarDropdown";
    import {mapActions, mapGetters} from "vuex";
    import {Modal} from 'ant-design-vue'
    import BusinessForm from "../../components/forms/admin/BusinessForm";

    export default {
        name: 'AppLayout',
        methods: {
            ...mapActions('business', ['_getBusiness', 'setBusiness', '_postBusiness']),
            ...mapActions('upload', ['_post_upload_img',]),
            ...mapActions('auth', ['_logout']),
            logout() {
                this._logout().then(() => {
                    this.$router.push({name: 'SignIn'})
                }).catch(() => {
                    this.$message.error('Something went wrong')
                })
            },
            submit(form) {
                let formData = new FormData();
                formData.append('img', form.logo);
                delete form.logo
                this._postBusiness(form).then((data) => {
                    let payload = {
                        loc: 'logo',
                        id: data.id,
                        img: formData
                    }
                    this._post_upload_img(payload).then((data) => {
                        this.setBusiness(data)
                        this.visible = false
                    })
                }).catch((errors) => {
                    this.errors = errors
                })
            }
        },
        data() {
            return {
                visible: false,
                errors: null,
                menus,
                title: 'Dashboard',
                drawer: true,
                items: menus,
            }
        },
        created() {
            this._getBusiness({page: -1}).catch(() => {
                this.$message.error('Something went wrong')
            })
        },
        components: {BusinessForm, Modal, Footer, AvatarDropdown},
        computed: {
            ...mapGetters('business', ['getCurrentBs', 'getBs', 'getLoading']),
            logo() {
                return this.getCurrentBs?.logo
            }
        },

        watch: {
            getBs(business) {
                if (business.data.length <= 0) {
                    this.visible = true
                    this.$message.warning('No Business found')
                    this.setBusiness(null)

                } else {
                    if (!this.getCurrentBs)
                        this.setBusiness(business.data[0])
                }

            }
        },

    }
</script>

<style scoped>

</style>
