<template>
    <div>
        <v-card
        flat
        >
        <v-card-title  class="bluelight-text">
            All Available Providers
        </v-card-title>
        <v-card-text>
            <v-row class="pt-0">
                <v-col cols="">
                    <v-textarea
                    label="Research Notes:"
                    v-model="researchNotes"
                    outlined
                    dense
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    v-model="availablePower"
                    dense
                    label="1. Available Power Provider(s)"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    v-model="availableGas"
                    label="2. Available Gas Provider"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    v-model="availableWater"
                    dense
                    label="3. Available Water/Sewer Service"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    v-model="availableTrash"
                    dense
                    label="4. Available Trash Provider"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    v-model="trashDays"
                    dense
                    label="Trash Days"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    label="Recycle Days"
                    v-model="recycleDays"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    v-model="recycleIsCollected"
                    dense
                    persistent-hint
                    hint="if blank (EVERY WEEK)"
                    label="Recycle is collected:"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    v-model="yardDays"
                    dense
                    label="Yard Days"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    persistent-hint
                    v-model="yardDaysIsCollected"
                    hint="if blank (EVERY WEEK)"
                    label="Yard is collected"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
        2/8
    </div>
</template>
<script>

export default {
    data: vm=>( {
     
       
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        menu2: false,
        
    }),
    watch: {
        date (val) {
            this.dateFormatted = this.formatDate(this.date)
        }
    },
    computed: {
        researchNotes: {
            get() {
                return this.$store.state.stepTwo.researchNotes;
            },
            set(value) {
                this.$store.state.stepTwo.researchNotes = value;
            },
        },
        availablePower: {
            get() {
                return this.$store.state.stepTwo.availablePower;
            },
            set(value) {
                this.$store.state.stepTwo.availablePower = value;
            },
        },
        availableGas: {
            get() {
                return this.$store.state.stepTwo.availableGas;
            },
            set(value) {
                this.$store.state.stepTwo.availableGas = value;
            },
        },
        availableWater: {
            get() {
                return this.$store.state.stepTwo.availableWater;
            },
            set(value) {
                this.$store.state.stepTwo.availableWater = value;
            },
        },
        availableTrash: {
            get() {
                return this.$store.state.stepTwo.availableTrash;
            },
            set(value) {
                this.$store.state.stepTwo.availableTrash = value;
            },
        },
        trashDays: {
            get() {
                return this.$store.state.stepTwo.trashDays;
            },
            set(value) {
                this.$store.state.stepTwo.trashDays = value;
            },
        },
        recycleDays: {
            get() {
                return this.$store.state.stepTwo.recycleDays;
            },
            set(value) {
                this.$store.state.stepTwo.recycleDays = value;
            },
        },
        recycleIsCollected: {
            get() {
                return this.$store.state.stepTwo.recycleIsCollected;
            },
            set(value) {
                this.$store.state.stepTwo.recycleIsCollected = value;
            },
        },
        yardDays: {
            get() {
                return this.$store.state.stepTwo.yardDays;
            },
            set(value) {
                this.$store.state.stepTwo.yardDays = value;
            },
        },
        yardDaysIsCollected: {
            get() {
                return this.$store.state.stepTwo.yardDaysIsCollected;
            },
            set(value) {
                this.$store.state.stepTwo.yardDaysIsCollected = value;
            },
        },
        computedDateFormatted () {
            return this.formatDate(this.date)
        },
       
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }
}
</script>
<style>
    .blue-text {
        color: blue;
    }
    .green-text{
        color: green;
    }
    .bluelight-text{
        color:#3399ff;
    }
    .comic-sans-font{
        font-family: 'Comic Sans MS';
    }
</style>