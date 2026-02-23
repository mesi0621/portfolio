import type { ContactFormData, ContactFormErrors } from '../types';

export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
    const errors: ContactFormErrors = {};

    // Name validation
    if (!data.name || data.name.trim().length === 0) {
        errors.name = 'validation.nameRequired';
    } else if (data.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!data.email || data.email.trim().length === 0) {
        errors.email = 'validation.emailRequired';
    } else if (!isValidEmail(data.email)) {
        errors.email = 'validation.emailInvalid';
    }

    // Message validation
    if (!data.message || data.message.trim().length === 0) {
        errors.message = 'validation.messageRequired';
    } else if (data.message.trim().length < 10) {
        errors.message = 'validation.messageTooShort';
    }

    return errors;
}
