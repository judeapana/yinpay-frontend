<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        name: 'index',
        computed: {
            ...mapGetters('auth', ['getLoggedIn'])
        },
        mounted() {
            if (this.getLoggedIn) {
                this.$router.push({name: 'admin_index'})
            }
        },

    }
</script>

<style scoped>

</style>
