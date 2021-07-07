<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Period Name" v-model="form.name"></v-text-field>

        <v-menu :close-on-content-click="false" :nudge-right="40" min-width="auto" offset-y
                transition="scale-transition" v-model="dateMenu">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                        :rules="rules.month"
                        label="Month"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-model="form.month"
                        v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker @input="dateMenu = false"
                           type="month"
                           v-model="form.month"
            ></v-date-picker>
        </v-menu>
        <v-switch :rules="rules.make_payment" label="Issue Payment" v-model="form.make_payment"></v-switch>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea :rules="rules.notes" label="Notes" rows="3" v-model="form.notes"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'PeriodForm',
        props: {
            errors: {
                type: Object
            },
            period: {
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
                dateMenu: false,
                valid: false,
                rules: {
                    name: [this.api('name'), this.required()],
                    month: [this.api('month'), this.required()],
                    make_payment: [this.api('make_payment')],
                    disabled: [this.api('disabled')],
                    notes: [this.api('notes'), this.required()],
                },
                form: {
                    name: this.period?.name || "",
                    month: this.period?.month || "",
                    make_payment: this.period?.make_payment || false,
                    disabled: this.period?.disabled || false,
                    notes: this.period?.notes || ""
                }
            }
        }
    }
</script>
