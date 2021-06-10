<template>
    <v-app>
        <n-progress-container/>
        <router-view/>
    </v-app>
</template>

<script>
    import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
    import {mapGetters} from "vuex";

    export default {
        name: 'App',
        components: {
            'n-progress-container': NprogressContainer
        },
        data: () => ({}),
        computed: {
            ...mapGetters('app', ['getLoading', 'getMsg', 'getErrors'])
        },
        watch: {
            getMsg(value) {
                if (value) {
                    if (typeof (value.message) === "string")
                        this.$message.info(value.message, 3);
                    if (typeof (value.message) === "object") {
                        value.message.forEach(x => this.$message.info(x, 3))
                    }
                }
            },
            getErrors(value) {
                if (value) {
                    if (typeof (value.message) === "string")
                        this.$message.error(value.message, 3);
                    if (typeof (value.message) === "object") {
                        value.message.forEach(x => this.$message.error(x, 3))
                    }
                }
            }

        }
    };
</script>
