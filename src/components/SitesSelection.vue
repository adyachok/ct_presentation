<template>
    <div>
        <h2>Hospitals Selection</h2>
        <v-flex xs12 sm6>
            <v-form v-model="valid" ref="form">
                <v-select
                        label="Select"
                        v-bind:items="hospitals"
                        v-model="e8"
                        multiple
                        chips
                        hint="What are trial hospitals"
                        :error-messages="selectErrors"
                        @change="$v.select.$touch()"
                        @blur="$v.select.$touch()"
                        persistent-hint
                        required
                ></v-select>

                <v-btn @click="submit" :class="{ green: valid, red: !valid }">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-form>
        </v-flex>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                e8: null,
                e8Rules: [(v) => v.length <= 0 || 'Please, select hospital'],
                valid: false,
                hospitals: [
                    'Bobby	Rogers Memorial Hospital',
                    'Laura	Campbell Memorial Hospital',
                    'Terry	King Memorial Hospital',
                    'Scott	Foster Memorial Hospital',
                    'Cynthia	Perez Memorial Hospital',
                    'Joyce	Watson Memorial Hospital',
                    'Mildred	Davis Memorial Hospital',
                    'Sandra	Coleman Memorial Hospital',
                    'Paula	Washington Memorial Hospital',
                    'Howard	Alexander Memorial Hospital',
                    'Diana	Harris Memorial Hospital',
                    'Amy	Cox Memorial Hospital',
                    'Donna	Martin Memorial Hospital',
                    'Kenneth	Ward Memorial Hospital',
                    'Lori	Gonzales Memorial Hospital',
                    'Steven	James Memorial Hospital',
                    'Harry	Lee Memorial Hospital',
                    'Martha	Perry Memorial Hospital',
                    'Jose	Flores Memorial Hospital',
                    'Walter	Thomas Memorial Hospital',
                    'Deborah	Williams Memorial Hospital',
                    'Christopher	Brown Memorial Hospital',
                    'Melissa	Diaz Memorial Hospital',
                    'Amanda	Torres Memorial Hospital',
                    'Karen	Johnson Memorial Hospital'
                ]
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    this.$router.push("trial-created")
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        },
        computed: {
            selectErrors () {
                const errors = []
//                if (!this.$v.select.$dirty) return errors
//                !this.$v.select.required && errors.push('Item is required')
                return errors
            }
        }
    }
</script>