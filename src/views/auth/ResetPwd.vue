<template>
    <div>
        <ResetPwdForm @on-submit="resetPwd" button="change"></ResetPwdForm>
    </div>
</template>

<script>
    import ResetPwdForm from "../../components/forms/auth/ResetPwdForm";

    export default {
        name: 'ResetPwd',
        components: {ResetPwdForm},
        methods: {
            resetPwd(form) {
                console.log(form)
            }
        }
    }
</script>

<style scoped>

</style>
