import { useState, ChangeEvent, FormEvent } from 'react';

export interface LeadFormData {
  name: string;
  phone: string;
  role?: string;
}

export interface LeadFormErrors {
  name?: string;
  phone?: string;
  role?: string;
}

interface UseLeadFormProps {
  initialRole?: string;
  onSubmitSuccess?: (data: LeadFormData) => void;
}

export function useLeadForm({ initialRole = '', onSubmitSuccess }: UseLeadFormProps = {}) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    role: initialRole,
  });

  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: LeadFormErrors = {};
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone) {
      tempErrors.phone = 'Phone number is required';
    } else if (phoneDigits.length !== 10) {
      tempErrors.phone = 'Phone number must be exactly 10 digits';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // For phone, only allow digits
    if (name === 'phone') {
      const sanitized = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: sanitized }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error for field on change
    if (errors[name as keyof LeadFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
    if (errors.role) {
      setErrors(prev => ({ ...prev, role: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API submission
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      setIsSuccess(true);
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        role: initialRole,
      });
      setErrors({});
    } catch (err) {
      console.error('Submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleRoleChange,
    handleSubmit,
  };
}
