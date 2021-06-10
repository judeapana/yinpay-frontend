<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-select label="User" v-model="form.user_meta"></v-select>
        <v-select label="Earning Group" v-model="form.earning_group"></v-select>
        <v-text-field label="Rate" type="number" v-model="form.rate"></v-text-field>
        <v-switch label="Disabled" v-model="form.disabled"></v-switch>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'UserEarningForm',
        props: {
            earning: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    user_meta: {},
                    earning_group: {},
                    rate: 0,
                    disabled: false
                }
            }
        }
    }
</script>
