<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="pf" v-model="valid">
        <v-text-field :rules="rules.name" label="Personnel Group Name"
                      v-model.trim="form.name">

        </v-text-field>
        <v-select :items="category" :rules="rules.category" label="Personnel Category"
                  v-model.trim="form.category">
        </v-select>
        <v-textarea :rows="3" :rules=rules.description label="Description" v-model.trim="form.description"></v-textarea>
        <v-switch :rules="rules.disabled" label="Disable" v-model="form.disabled"></v-switch>

        <v-btn :disabled="!valid" class="mt-5" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'PersonnelGroupForm',
        props: {
            errors: {
                type: Object
            },
            personnel_group: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$ref.pf, value.errors)
            }
        },
        data() {
            return {
                valid: false,
                category: ['FullTime', 'PartTime', 'Intern', 'Contract'],
                rules: {
                    name: [this.required(), this.api('name')],
                    category: [this.required(), this.api('category')],
                    description: [],
                    disabled: [],
                },
                form: {
                    name: this.personnel_group?.name || '',
                    category: this.personnel_group?.category || '',
                    description: this.personnel_group?.description || '',
                    disabled: this.personnel_group?.disabled || false
                }
            }
        },
    }
</script>

<style scoped>

</style>
