<template>
    <div>
        <ActivateAccountForm @on-submit="activateAccount" button="Activate"></ActivateAccountForm>
    </div>
</template>

<script>
    import ActivateAccountForm from "../../components/forms/auth/ActivateAccountForm";

    export default {
        name: 'ActivateAccount',
        components: {ActivateAccountForm},
        methods: {
            activateAccount(form) {
                console.log(form)
            }
        }
    }
</script>

<style scoped>

</style>
