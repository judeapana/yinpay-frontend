<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="users" :rules="rules.user_meta_id" item-text="username" item-value="user_meta.id" label="User"
                  v-model="form.user_meta_id"/>
        <v-select :items="attendances" :rules="rules.attendance" item-text="name" item-value="id" label="Attendance"
                  v-model="form.attendance_id"/>
        <v-select :items="['Absent', 'Excused Duty', 'Present']" :rules="rules.attype" label="Attendance Type"
                  v-model="form.attype"></v-select>

        <v-menu :close-on-content-click="false" :nudge-right="40" min-width="auto" offset-y
                transition="scale-transition" v-model="dateMenu">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                        :rules="rules.time"
                        label="Time"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-model="form.time"
                        v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker @input="dateMenu = false" use-seconds v-model="form.time"></v-time-picker>
        </v-menu>
        <v-select :items="['Clock In', 'Clock Out']" :rules="rules.type" label="Option" v-model="form.type"></v-select>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

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
        mounted() {
            this._get_user({page: -1}).then((users) => {
                this.users = users.data
            })
            this._get_attendance({page: -1}).then((attendances) => {
                this.attendances = attendances.data
            })
        },
        methods: {
            ...mapActions('attendance', ['_get_attendance']),
            ...mapActions('user', ['_get_user'])
        },

        data() {
            return {
                users: [],
                attendances: [],
                dateMenu: false,
                rules: {
                    user_meta_id: [this.api('user_meta_id'), this.required()],
                    attendance: [this.api('attendance'), this.required()],
                    attype: [this.api('attype'), this.required()],
                    time: [this.api('time'), this.required()],
                    type: [this.api('type'), this.required()],
                },
                valid: false,
                form: {
                    user_meta_id: this.attendance?.user_meta_id || "",
                    attendance_id: this.attendance?.attendance_id || "",
                    attype: this.attendance?.attype || '',
                    time: this.attendance?.time || '',
                    type: this.attendance?.type || ''
                }
            }
        }
    }
</script>
