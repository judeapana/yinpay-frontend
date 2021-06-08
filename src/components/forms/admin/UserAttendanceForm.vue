<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'UserAttendanceForm',
        props: {
            attendance: {
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
                    attendance: {},
                    attype: '',
                    time: '',
                    type: ''
                }
            }
        }
    }
</script>
