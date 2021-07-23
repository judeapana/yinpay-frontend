<template>
    <AppLayout>
        <template v-slot:content>
            <router-view></router-view>
        </template>
    </AppLayout>
</template>

<script>

    import AppLayout from "../../components/layout/AppLayout";
    import axios from "axios";
    import {logoutUser} from "../../utils";

    export default {
        name: 'index',
        components: {AppLayout},
        beforeCreate() {
            axios.interceptors.response.use(response => {
                return response
            }, error => {
                const {response: {status}} = error;
                if (status === 401) {
                    logoutUser()
                    this.$router.push({name:'SignIn'})
                    return Promise.reject(error)
                }
                return Promise.reject(error)
            })
        },
    }
</script>

<style scoped>

</style>
