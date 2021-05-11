<template>
    <AppLayout>
        <template v-slot:content>
            <router-view></router-view>
        </template>
    </AppLayout>
</template>

<script>

    import AppLayout from "../../components/layout/AppLayout";

    export default {
        name: 'index',
        components: {AppLayout},
        computed: {}
    }
</script>

<style scoped>

</style>
