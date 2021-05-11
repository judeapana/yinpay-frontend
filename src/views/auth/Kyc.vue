<template>
    <div>
        <KycForm @on-submit="KnowCustomer" button="Verify Me"></KycForm>
    </div>
</template>

<script>
    import KycForm from "../../components/forms/kyc/KycForm";

    export default {
        name: 'Kyc',
        components: {KycForm},
        methods: {
            KnowCustomer(form) {
                console.log(form)
            }
        }
    }
</script>

<style scoped>

</style>
