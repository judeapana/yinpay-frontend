<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-list subheader three-line>
            <v-subheader>Preference</v-subheader>
            <v-list-item>
                <v-list-item-action>
                    <v-checkbox
                            v-model="form.notify_payment_by_sms"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title>Notify by sms</v-list-item-title>
                    <v-list-item-subtitle>Notify workers about updates on payment by SMS
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-action>
                    <v-checkbox
                            v-model="form.notify_payment_by_email">
                    </v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Notify by email</v-list-item-title>
                    <v-list-item-subtitle>Notify workers about updates on payment by their email addresses
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>

</template>

<script>
    import {mapActions} from "vuex";

    export default {
        props: {
            errors: {
                type: Object
            },
            button: {
                type: String
            },
        },
        name: 'SettingsForm',
        created() {
            this._getSetting().then((data) => {
                this.form = data
            }).catch((e) => {
                this.errors = e
            })
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            }
        },
        methods: {
            ...mapActions('business', ['_getSetting']),

        },
        data() {
            return {
                valid: false,
                form: {
                    notify_payment_by_sms: !!this.settings?.notify_payment_by_sms,
                    notify_payment_by_email: !!this.settings?.notify_payment_by_email,
                }
            }
        },
    }
</script>

<style scoped>

</style>
