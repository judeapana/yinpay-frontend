<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="business" v-model="valid">
        <v-row>
            <v-col class="text-center" cols="12" md="12">
                <v-file-input :rules="rules.logo" accept="image/png, image/jpeg, image/bmp" label="Upload Logo"
                              prepend-icon="mdi-camera" v-model="form.logo"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.name" label="Name Of Business" v-model="form.name"/>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.support_email" label="Support Email Address" v-model="form.support_email"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field :rules="rules.phone_number" label="Phone Number" v-model="form.phone_number"/>
            </v-col>
            <v-col cols="12" md="6">
                <v-select :items="btypes" :rules="rules.btype" label="Business Type" v-model="form.btype"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-textarea :rules="rules.address" label="Address" rows="2" v-model="form.address"/>
            </v-col>
            <v-col cols="12" md="6">
                <v-textarea :rules="rules.description" label="Description" rows="2" v-model="form.description"/>
            </v-col>
        </v-row>

        <v-btn :disabled="!valid" :loading="uLoading || bsLoading" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'BusinessForm',
        props: {
            errors: {Object},
            business: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.business, value.errors)
            }
        },
        computed: {
            ...mapGetters('upload', {uLoading: 'getLoading'}),
            ...mapGetters('business', {bsLoading: 'getLoading'})
        },
        data() {
            return {
                valid: false,
                btypes: ['Nonprofit Organization', 'Sole Proprietorship', 'Partnership', 'Corporation', 'Limited Liability Company'],
                rules: {
                    name: [this.required(), this.api('name')],
                    address: [this.required(), this.api('address')],
                    support_email: [this.required(), this.email(), this.api('support_email')],
                    phone_number: [this.required(), this.phone(), this.api('phone_number')],
                    btype: [this.required(), this.api('btype')],
                    description: [this.required(), this.api('description')],
                    logo: [this.api('logo')]
                },

                form: {
                    logo: [],
                    name: this.business?.name || "",
                    address: this.business?.address || "",
                    support_email: this.business?.support_email || "",
                    phone_number: this.business?.phone_number || "",
                    btype: this.business?.btype || "",
                    description: this.business?.description || ""
                }
            }
        }
    }
</script>
