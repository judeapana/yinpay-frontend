<template>
    <v-form @submit.prevent="$emit('on-submit',form)">

        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>

</template>
<script>
    export default {
        name: 'AttendanceForm',
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
                    name: "",
                    day: "",
                    period: {},
                    disabled: false,
                    notes: ""
                }
            }
        }
    }
</script>
