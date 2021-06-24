<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :rules="rules.user_meta_id" items="" label="User" v-model="form.user_meta_id"/>
        <v-select :rules="rules.attendance" items="" label="Attendance" v-model="form.attendance"/>
        <v-select :items="['Absent', 'Excused Duty', 'Present']" :rules="rules.attype" label="Attendance Type"
                  v-model="form.attype"></v-select>
        <v-date-picker :rules="rules.time" label="Time" v-model="form.time"></v-date-picker>
        <v-select :items="['Clock In', 'Clock Out']" :rules="rules.type" label="Option" v-model="form.type"></v-select>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'UserAttendanceForm',
        props: {
            errors: {
                type: Object
            },
            attendance: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            }
        },
        data() {
            return {
                rules: {
                    user_meta_id: [this.api('user_meta_id'), this.required()],
                    attendance: [this.api('attendance'), this.required()],
                    attype: [this.api('attype'), this.required()],
                    time: [this.api('time'), this.required()],
                    type: [this.api('type'), this.required()],
                },
                valid: false,
                form: {
                    user_meta_id: "",
                    attendance_id: "",
                    attype: '',
                    time: '',
                    type: ''
                }
            }
        }
    }
</script>
