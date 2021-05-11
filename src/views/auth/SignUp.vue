<template>
    <div>
        <SignUpForm @on-submit="joinUser" button="join us"></SignUpForm>
    </div>
</template>

<script>
    import SignUpForm from "../../components/forms/auth/SignUpForm";

    export default {
        name: 'SignUp',
        components: {SignUpForm},
        methods:{
            joinUser(form){
                console.log(form)
            }
        }
    }
</script>

<style scoped>

</style>
