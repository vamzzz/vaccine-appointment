export const state = () => ({
  currentPlace: {lat:34.067680, lng:-84.235060},
  test: '',
  formAttributes: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    dob: '',
    insurance: '',
    occupation: '',
    vaccineType: '',
  },
  pageSelected: 1,
})

export const mutations = {
  setPlace: (state, place) => state.currentPlace = place,
  setTest: (state, value) => state.test = value,
  setFormAttributes: (state, payload) => state.formAttributes[payload.attribute] = payload.value,
  setPageSelected: (state, payload) => state.pageSelected = payload,
  increasePage: (state) => state.pageSelected = state.pageSelected + 1,
  decreasePage: (state) => state.pageSelected--,
}

export const getters ={
  currentPlace: state => state.currentPlace,
  formAttributes: state => state.formAttributes,
  pageSelected: state => state.pageSelected,
}