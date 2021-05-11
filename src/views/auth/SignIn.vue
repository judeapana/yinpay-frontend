<template>
    <div>
        <SignInForm @on-submit="LoginUser" button="Sign In"></SignInForm>
    </div>
</template>

<script>
    import SignInForm from "../../components/forms/auth/SignInForm";

    export default {
        name: 'SignIn',
        components: {SignInForm},
        methods: {
            LoginUser(form) {
                console.log(form)
            }
        }
    }
</script>

<style scoped>

</style>
