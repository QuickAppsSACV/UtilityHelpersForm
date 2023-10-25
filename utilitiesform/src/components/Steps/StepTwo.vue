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
                    outlined
                    dense
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
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
                    label="2. Available Gas Provider"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    label="3. Available Water/Sewer Service"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
                    dense
                    label="4. Available Trash Provider"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
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
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    outlined
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