export const state = () => ({
    contacts: [{ id: 1, name: 'Bob', email: 'email@mail.com', phoneNumber: 123123123 },
    { id: 2, name: 'Bob', email: 'email@mail.com', phoneNumber: 123123123 },
    { id: 3, name: 'Bob', email: 'email@mail.com', phoneNumber: 123123123 },]
});

export const getters = {
    getContactById: state => id => state.contacts.find(item => item.id == id),
    
};

export const actions = {
    
    addNewContact({ commit, state }) {
        let newContacts = [...state.contacts];

        let id;       
        while(true) {
            id = Math.round( 100 + Math.random() * (999 - 100) );

           if( state.contacts.find(item => item.id == id) ) {} else {
               break;
           }
        } 

        let contactObj = { id: id, name: `New user with id = ${id}` };

        newContacts.push(contactObj);

        commit('SET_CONTACTS', newContacts);
    },

    removeContact({ commit, state }, id) {
        let newContacts = [...state.contacts];

        newContacts = newContacts.filter(item => item.id != id);
        
        commit('SET_CONTACTS', newContacts);
    }
};

export const mutations = {
    SET_CONTACTS(state, newContacts) {
        state.contacts = newContacts;
    },
};