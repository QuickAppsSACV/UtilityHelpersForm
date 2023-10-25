<template>
    <div>
        <v-card
        class="mb-12"
        flat
        >
        <v-card-title class="bluelight-text">
        PODS and/or Pro Movers:
    </v-card-title>
    <v-card-text>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="PODS or Pro Mover?"
                    :items="['PODS','Pro Mover','Both']"
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <h2>Rental Trucks</h2>
        <v-divider></v-divider>
        <br>
        <h2 class="bluelight-text">PODS</h2>
        <h3 class="red--text">(Complete w/ customer on the phone)</h3>
        <v-divider></v-divider>
        <br>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                    label="Unloading Zip Code"
                    hint="Verify this is where they want to UNLOAD their POD"
                    persistent-hint
                    outlined></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col class="d-flex justify-center mb-6 bg-surface-variant">
                <a 
            href="https://www.pods.com/partners/utilityhelpers?utm_medium=managed-referral&utm_source=utility_helpers&utm_campaign=utility_helper_website_referrals&utm_content=affiliate"
            class="green--text text-h6 text-center">CLICK HERE TO LAUNCH PODS OFFERS</a>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                    label="PODS Quote Number"
                    hint="Example: #P10050872"
                    persistent-hint
                    outlined></v-text-field>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="Rental Truck Company"
                    :items="['Uhaul']"
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-select
                    label="Type of Move"
                    :items="['One-Way','In-Town']"
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <v-row dense class="mt-0">
            <v-col cols="6">
                <v-text-field
                    label="Size & Equipment"
                    hint="(ie: 15' Truck, Pickup Truck, or Tow Dolly)(Also add-ons like Appliance Dolly, etc.)"
                    persistent-hint
                    outlined></v-text-field>
            </v-col>
        </v-row>
    </v-card-text>
    </v-card>
    </div>
</template>
<script>

export default {
    data: vm=>( {
     
        e1: 1,
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