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
                    disabled
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
                    disabled
                    label="1. Available Power Provider(s)"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    disabled
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
                    disabled
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
                    disabled
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
                    disabled
                    label="Trash Days"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    disabled
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
                    disabled
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
                    disabled
                    label="Yard Days"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    disabled
                    persistent-hint
                    v-model="yardIsCollected"
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
        menu2: false,
        
    }),
    watch: {
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
        yardIsCollected: {
            get() {
                return this.$store.state.stepTwo.yardIsCollected;
            },
            set(value) {
                this.$store.state.stepTwo.yardIsCollected = value;
            },
        },
       
    },
    methods: {
    
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