<template>
    <div>
        <ForgotPwdForm @on-submit="forgotPwd" button="submit"></ForgotPwdForm>
    </div>
</template>

<script>
    import ForgotPwdForm from "../../components/forms/auth/ForgotPwdForm";

    export default {
        name: 'ForgotPwd',
        components: {ForgotPwdForm},
        methods: {
            forgotPwd(form) {
                console.log(form)
            }
        }
    }
</script>

<style scoped>

</style>
