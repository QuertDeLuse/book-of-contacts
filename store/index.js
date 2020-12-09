export const state = () => ({
    contacts: [{ id: 1, name: 'Bob', email: 'email@mail.com', phoneNumber: '123123123' },
    { id: 2, name: 'Bob', email: 'email@mail.com', phoneNumber: '123123123' },
    { id: 3, name: 'Bob', email: 'email@mail.com', phoneNumber: '123123123' },],

    stepBackContacts: [],
});

export const getters = {
    getContactById: state => id => state.contacts.find(item => item.id == id),

};

export const actions = {

    //contacts functions
    addContact({ commit, state }) {

        try {
            let newContacts = [...state.contacts];

            let id;
            while (true) {
                id = Math.round(100 + Math.random() * (999 - 100));

                if (state.contacts.find(item => item.id == id)) { } else {
                    break;
                }
            }

            let contactObj = { id: id, name: `New user with id = ${id}`, phoneNumber: 0 };

            newContacts.push(contactObj);

            commit('SET_CONTACTS', newContacts);
        } catch {

        }


    },

    removeContact({ commit, state }, id) {
        try {
            let newContacts = [...state.contacts];

            newContacts = newContacts.filter(item => item.id != id);

            commit('SET_CONTACTS', newContacts);
        } catch {

        }
    },

    //contacts property functions
    removeProperty({ commit, state }, propObj) {
        try {            
            let newStepBackContacts = JSON.parse(JSON.stringify(state.contacts))
            commit('SET_STEP_BACK_CONTACTS', newStepBackContacts);

            console.log('newStepBackContacts', newStepBackContacts);

            let editingContact = state.contacts.find(item => item.id == propObj.id);
            let newContacts = state.contacts.filter(item => item.id != propObj.id);

            delete editingContact[`${propObj.name}`];

            newContacts.push(editingContact);

            commit('SET_CONTACTS', newContacts);
        } catch {
            console.log('Deleting property error');
        }
    },

    addProperty({ commit, state }, propObj) {

        try {
            let newStepBackContacts = JSON.parse(JSON.stringify(state.contacts))
            commit('SET_STEP_BACK_CONTACTS', newStepBackContacts);

            let editingContact = state.contacts.find(item => item.id == propObj.id);
            let newContacts = state.contacts.filter(item => item.id != propObj.id);

            editingContact[`${propObj.name}`] = propObj.value;

            newContacts.push(editingContact);

            commit('SET_CONTACTS', newContacts);
        } catch {
            console.log('Deleting property error');
        }
    },

    returnStepBack({ commit, state }) {  
        try {
            let newContacts = [...state.stepBackContacts];
            commit('SET_CONTACTS', newContacts);
        } catch {

        }   
    },
};

export const mutations = {
    SET_CONTACTS(state, newContacts) {
        state.contacts = newContacts;
    },
    SET_STEP_BACK_CONTACTS(state, newValue) {
        state.stepBackContacts = newValue;
    },
};