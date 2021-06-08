<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

    import {mapGetters} from "vuex";
    import {getCurrentUser, logoutUser} from "../../utils";

    export default {
        name: 'index',
        mounted() {
            let user = getCurrentUser()
            if (user) {
                this.$confirm({
                    title: "Authentication",
                    content: "You are already logged in, do you want to log out",
                    onCancel: () => {
                        this.$message.loading('Logged you in', 1).then(() => {
                            this.$router.push({name: 'admin_dashboard'})
                        })
                    },
                    onOk: () => {
                        this.$message.info("You have successfully logged out").then(() => {
                            logoutUser();
                        })

                    }
                })

            }
        },
        computed: {
            ...mapGetters('auth', ['getMsg', 'getErrors'])
        },
        watch: {
            getMsg(value) {
                if (value) {
                    if (typeof (value.message) === "string")
                        this.$message.info(value.message, 10);
                    if (typeof (value.message) === "object") {
                        value.message.forEach(x => this.$message.info(x, 10))
                    }
                }
            },
            getErrors(value) {
                if (value) {
                    if (typeof (value.message) === "string")
                        this.$message.error(value.message, 10);
                    if (typeof (value.message) === "object") {
                        value.message.forEach(x => this.$message.error(x, 10))
                    }
                }
            }

        }
    }
</script>

<style scoped>

</style>
