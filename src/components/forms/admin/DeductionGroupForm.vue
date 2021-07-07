<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Name Of Deduction" v-model="form.name"></v-text-field>
        <v-select :items="personnel_group" :rules="rules.personnel_group_id" item-text="name" item-value="id"
                  label="Personnel Group"
                  v-model="form.personnel_group_id"></v-select>
        <v-switch :rules="rules.disabled" label="Disable" v-model="form.disabled"></v-switch>
        <v-switch :rules="rules.per_day" label="Per Day" v-model="form.per_day"></v-switch>
        <v-textarea :rules="rules.notes" label="Notes" v-model="form.notes"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name: 'DeductionGroupForm',
        props: {
            errors: {
                type: Object
            },
            deduction: {
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
            this._get_personnel_group({page: -1}).then((personnel_groups) => {
                this.personnel_group = personnel_groups.data
            })
        },
        methods: {
            ...mapActions('personnel_group', ['_get_personnel_group'])
        },
        data() {
            return {
                personnel_group: [],
                valid: false,
                rules: {
                    name: [this.api('name'), this.required()],
                    personnel_group_id: [this.api('personnel_group_id'), this.required()],
                    disabled: [this.api('disabled')],
                    per_day: [this.api('per_day')],
                    notes: [this.api('notes')],
                },
                form: {
                    name: this.deduction?.name || "",
                    personnel_group_id: this.deduction?.personnel_group_id || "",
                    disabled: this.deduction?.disabled || false,
                    notes: this.deduction?.notes || "",
                    per_day: this.deduction?.per_day || false,
                }
            }
        }
    }
</script>
