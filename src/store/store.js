import {
  createStore
} from 'vuex'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc
} from 'firebase/firestore'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable
} from "firebase/storage"
import {
  auth,
  db
} from '../plugins/firebase'
import uuid from 'uuid-random'
import {
  createUserWithEmailAndPassword
} from 'firebase/auth'

export default createStore({
  state: {
    step: 1,
    signupCredentials: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    loading: false,
    image: null,
    snackbar: false,
    text: '',
    color: 'green',
    textColor: 'white',
    evenForm: {
      name: '',
      email: '',
      phone: ''
    },
    evenFormLoading: false,
    registration: [],
    viewStudent: null,
    eventRegistration: []
  },

  getters: {
    registration: state => state.registration,
    eventRegistration: state => state.eventRegistration
  },

  mutations: {
    next: state => {
      if (state.step < 3) state.step += 1
    },

    prev: state => {
      if (state.step == 0) return
      state.step -= 1
    },

    closeSnackbar: state => state.snackbar = false,

    getStudent: (state, student) => state.viewStudent = student
  },

  actions: {
    async signUpUser() {
      let data = this.state.signupCredentials

      let passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (data.name == '' && !data.email.match(emailRegex) && !data.password.match(passwordRegex) && data.phone == '') {
        this.state.loading = false
        this.state.snackbar = true
        this.state.color = 'red'
        this.state.snackbar = 'white'
        this.state.text = 'Please complete the form and try again'
      } else {
        this.state.loading = true

        await createUserWithEmailAndPassword(auth, data.email, data.password)
          .then(async userCredential => {
            await setDoc(doc(db, 'users', userCredential.user.uid), {
              ...data,
              id: userCredential.user.uid,
              timestamp: serverTimestamp()
            })
          })

        this.state.loading = false
        this.state.snackbar = true
        this.state.color = 'green'
        this.state.snackbar = 'white'
        this.state.text = 'Sign Up Successful'
      }

    },

    async submitEventForm() {
      this.state.evenFormLoading = true

      await addDoc(collection(db, 'evenRegistration'), {
        ...this.state.evenForm,
        timestamp: serverTimestamp()
      })

      this.state.evenFormLoading = false
    },

    async getRegistrationForms() {
      this.state.registration = []
      let querySnapshot = await getDocs(collection(db, "registration"))
      querySnapshot.forEach((doc) => {
        this.state.registration.push({
          id: doc.id,
          ...doc.data()
        })
      })
    },

    async getStudent({
      commit
    }, id) {
      const student = await (await getDoc(doc(db, 'registration', id))).data()
      commit('getStudent', student)
    },

    async getRegistrationForms() {
      this.state.eventRegistration = []
      let querySnapshot = await getDocs(collection(db, "evenRegistration"))
      querySnapshot.forEach((doc) => {
        this.state.eventRegistration.push({
          id: doc.id,
          ...doc.data()
        })
      })
    },
  },
})