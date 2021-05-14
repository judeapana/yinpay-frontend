<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'UserTinForm',
        data() {
            return {
                form: {
                    user_id: {},
                    no: '',
                    notes: '',
                    active: false
                }
            }
        },
    }
</script>

<style scoped>

</style>
