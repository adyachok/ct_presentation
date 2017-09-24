<template>
    <div>
        <h2>Mannagers Selection</h2>
        <v-flex xs12 sm6>
            <v-form v-model="valid" ref="form">

                <v-select
                        label="Select"
                        v-bind:items="managers"
                        v-model="e7"
                        multiple
                        chips
                        hint="What is/are trial manager/-s"
                        persistent-hint
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
                e7: [],
                valid: false,
                managers: [
                    'Tiffany	George',
                    'April	Reed',
                    'Beulah	Grant',
                    'Frederick	Neal',
                    'Sherry	Jackson',
                    'Christopher	Hammond',
                    'Bridget	Conner',
                    'Tanya	Edwards',
                    'Shawna	Cole',
                    'Lindsay	Wilson'
                ]
            }
        },
    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                this.$router.push("sites-selection")
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    }
    }
</script>