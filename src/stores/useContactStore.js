import { create } from 'zustand';

const useContactStore = create((set) => ({
    // 🌱 Form Fields
    name: '',
    email: '',
    subject: '',
    message: '',

    // 🔄 Status
    loading: false,
    success: false,
    error: null,

    // ✏️ Input Handlers
    setName: (value) => set({ name: value }),
    setEmail: (value) => set({ email: value }),
    setSubject: (value) => set({ subject: value }),
    setMessage: (value) => set({ message: value }),

    // 🚀 Form Submission
    submitForm: async () => {
        set({ loading: true, success: false, error: null });
        // Form submission is handled in the component
    },

    // ♻️ Reset all fields
    clearForm: () => {
        set({
            name: '',
            email: '',
            subject: '',
            message: '',
            loading: false,
            success: false,
            error: null
        });
    }
}));

export default useContactStore;

