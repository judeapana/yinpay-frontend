<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-select items="" label="User" v-model="form.user_meta"/>
        <v-select items="" label="Attendance" v-model="form.attendance"/>
        <v-select :items="['Absent', 'Excused Duty', 'Present']" label="Attendance Type"
                  v-model="form.attype"></v-select>
        <v-date-picker label="Time" v-model="form.time"></v-date-picker>
        <v-select :items="['Clock In', 'Clock Out']" label="Option" v-model="form.type"></v-select>
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
