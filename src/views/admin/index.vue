<template>
    <AppLayout>
        <template v-slot:content>
            <modal :destroyOnClose="true" :dialog-style="{ top: '20px' }"
                   :mask-style="{backgroundColor:'rgba(29,25,25,0.53)'}"
                   :visible="visible"
                   title="Setup A New Business" width="700px">
                <template v-slot:footer>
                    <v-btn @click="logout" depressed>Logout</v-btn>
                </template>
                <BusinessForm :errors="errors" @on-submit="submit" button="Create"></BusinessForm>
            </modal>
            <router-view></router-view>
        </template>
    </AppLayout>
</template>

<script>

    import AppLayout from "../../components/layout/AppLayout";
    import {mapActions, mapGetters} from "vuex";
    import {Modal} from 'ant-design-vue'
    import BusinessForm from "../../components/forms/admin/BusinessForm";

    export default {
        name: 'index',
        data() {
            return {
                visible: false,
                errors: null,
            }
        },

        created() {
            this._getBusiness({page: -1}).then((business) => {
                if (business.data.length <= 0) {
                    this.visible = true
                    this.$message.warning('No Business found')
                } else {
                    if (!this.getCurrentBs)
                        this.setBusiness(business.data[0])
                }
            }).catch(() => {

            })
        },
        components: {BusinessForm, AppLayout, Modal},
        computed: {
            ...mapGetters('business', ['getCurrentBs'])
        },
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
    }
</script>

<style scoped>

</style>
