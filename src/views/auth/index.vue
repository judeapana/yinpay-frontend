<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

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

    }
</script>

<style scoped>

</style>
