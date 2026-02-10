// Form Validation and Submission Handler

class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (!this.form) return;

        this.fields = {
            fullName: this.form.querySelector('#fullName'),
            email: this.form.querySelector('#email'),
            company: this.form.querySelector('#company'),
            jobTitle: this.form.querySelector('#jobTitle'),
            useCase: this.form.querySelector('#useCase'),
            problemScale: this.form.querySelector('#problemScale'),
            agreeTerms: this.form.querySelector('#agreeTerms')
        };

        this.init();
    }

    init() {
        // Add real-time validation
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            if (!field) return;

            field.addEventListener('blur', () => this.validateField(fieldName));
            field.addEventListener('input', () => {
                if (field.classList.contains('error')) {
                    this.validateField(fieldName);
                }
            });
        });

        // Handle form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    validateField(fieldName) {
        const field = this.fields[fieldName];
        const formGroup = field.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');

        let isValid = true;
        let message = '';

        switch (fieldName) {
            case 'fullName':
                if (!field.value.trim()) {
                    isValid = false;
                    message = 'Full name is required';
                } else if (field.value.trim().length < 2) {
                    isValid = false;
                    message = 'Full name must be at least 2 characters';
                }
                break;

            case 'email':
                if (!field.value.trim()) {
                    isValid = false;
                    message = 'Email address is required';
                } else if (!this.isValidEmail(field.value)) {
                    isValid = false;
                    message = 'Please enter a valid email address';
                }
                break;

            case 'company':
                if (!field.value.trim()) {
                    isValid = false;
                    message = 'Company name is required';
                }
                break;

            case 'problemScale':
                if (!field.value) {
                    isValid = false;
                    message = 'Please select a problem scale';
                }
                break;

            case 'agreeTerms':
                if (!field.checked) {
                    isValid = false;
                    message = 'You must agree to the terms and conditions';
                }
                break;
        }

        if (isValid) {
            field.classList.remove('error');
            formGroup.classList.remove('has-error');
            errorMessage.textContent = '';
        } else {
            field.classList.add('error');
            formGroup.classList.add('has-error');
            errorMessage.textContent = message;
        }

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validateAllFields() {
        let isValid = true;
        const requiredFields = ['fullName', 'email', 'company', 'problemScale', 'agreeTerms'];

        requiredFields.forEach(fieldName => {
            if (!this.validateField(fieldName)) {
                isValid = false;
            }
        });

        return isValid;
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Validate all fields
        if (!this.validateAllFields()) {
            // Scroll to first error
            const firstError = this.form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Get form data
        const formData = {
            fullName: this.fields.fullName.value.trim(),
            email: this.fields.email.value.trim(),
            company: this.fields.company.value.trim(),
            jobTitle: this.fields.jobTitle.value.trim(),
            useCase: this.fields.useCase.value.trim(),
            problemScale: this.fields.problemScale.value
        };

        // Show loading state
        const submitButton = this.form.querySelector('.btn-submit');
        submitButton.classList.add('loading');

        // Simulate API call (client-side demo)
        await this.simulateSubmission(formData);

        // Hide loading state
        submitButton.classList.remove('loading');

        // Show success modal
        this.showSuccessModal(formData.email);

        // Reset form
        this.form.reset();
    }

    simulateSubmission(formData) {
        return new Promise((resolve) => {
            // Simulate network delay
            setTimeout(() => {
                // In production, this would send data to the backend
                resolve();
            }, 1500);
        });
    }

    showSuccessModal(email) {
        const modal = document.getElementById('success-modal');
        const emailSpan = document.getElementById('submitted-email');

        if (modal && emailSpan) {
            emailSpan.textContent = email;
            modal.classList.add('active');
        }
    }
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Initialize close button event listener
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
});

// Close modal on background click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('success-modal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize form validator when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new FormValidator('trial-form');
    });
} else {
    new FormValidator('trial-form');
}
