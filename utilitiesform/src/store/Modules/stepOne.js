const stepOne = {
    namespaced: true,
    state: {
        templateInstructions:'',
        zohoCRM:'',
        primaryEmail:'',
        primaryFirstName:'',
        primaryLastName:'',
        primaryPhone:'',
        secondaryEmail:'',
        secondaryFirstName:'',
        secondaryLastName:'',
        secondaryPhone:'',
        whoamISpeaking:'',
        willanyService:'',
        whosubmittedRequest:'',
        referrallPartner:'',
        brokerageCompany:'',
        builder:'',
        landlord:'',
        agentFirstName:'',
        agentLastName:'',
        assistantFirstName:'',
        assistantLastName:'',
        titleRepFirstName:'',
        titleRepLastName:'',
        lenderFirstName:'',
        lenderLastName:'',
        streetAddress:'',
        city:'',
        stateRegion:'',
        zipCode:'',
        closingDate:'',
        TCEmail:'',
        logoArea:null,
        collectiveAdress:'',
        fontSize:12,
        fontSelected:'Roboto',
        specialInstructions: '',
        hideQRLogo:false,
        dateFormattedStore:"",
        someServicesWill:'',
        formType:'',
        leadID:'',
        Security_Answer_Internet:'',
        ownerEmail:'',
        ownerName: '',
        
    },
    mutations: {
        setBuilder: (state, payload) =>{
            state.builder = payload
        },
        setAddressInfo: (state, payload) =>{
            state.addressArea = payload
        },
        setLogoArea: (state,payload) =>{
            state.logoArea = payload
        },
        setClimate: (state,payload) => {
            state.climateSelected = payload
        },
        setColectiveAddress:(state,payload)=>{
            state.collectiveAdress = payload
        },
        setSpecialInstructions:(state,payload)=>{
            state.specialInstructions = payload
        }
    }
};
export default stepOne;