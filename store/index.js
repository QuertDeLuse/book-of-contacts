export const state = () => ({
    contacts: [{ id: 1, name: 'Bob', email: 'email@mail.com', phoneNumber: 123123123 },
    { id: 2, name: 'Bob', email: 'email@mail.com', phoneNumber: 123123123 },
    { id: 3, name: 'Bob', email: 'email@mail.com', phoneNumber: 123123123 },]
});

export const getters = {
    getContactById: state => id => state.contacts.find(item => item.id == id),
    
};

export const actions = {
    addNewContact({ commit, state }, contactObj) {
        let newContacts = [...state.contacts];

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