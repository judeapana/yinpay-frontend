<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Allotted Name" v-model="form.name"></v-text-field>
        <v-select :items="period" :rules="rules.period" item-text="name" item-value="id" label="Period"
                  v-model="form.period_id"></v-select>
        <v-menu v-model="datemenu">
            <template v-slot:activator="{on}">
                <v-text-field
                        :rules="rules.day"
                        label="Attendance Date"
                        v-model="form.day"
                        v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker @input="datemenu=false" show-current v-model="form.day"></v-date-picker>
        </v-menu>

        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea :rules="rules.notes" label="Notes" v-model="form.notes"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>

</template>
<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'AttendanceForm',
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
        computed: {
            ...mapGetters('period', ['getLoading'])
        },
        methods: {
            ...mapActions('period', ['_get_period'])
        },
        mounted() {
            this._get_period({page: -1}).then((periods) => {
                this.period = periods.data
            })
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            }
        },
        data() {
            return {
                datemenu: false,
                period: [],
                rules: {
                    name: [this.api('name'), this.required()],
                    day: [this.api('day'), this.required()],
                    period: [this.api('period'), this.required()],
                    disabled: [this.api('disabled')],
                    notes: [this.api('notes')],
                },
                valid: false,
                form: {
                    name: this.attendance?.name || "",
                    day: this.attendance?.day || "",
                    period_id: this.attendance?.period_id || "",
                    disabled: this.attendance?.disabled || false,
                    notes: this.attendance?.notes || ""
                }
            }
        }
    }
</script>
