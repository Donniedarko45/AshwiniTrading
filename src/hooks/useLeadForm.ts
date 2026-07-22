import { useState, ChangeEvent, FormEvent } from 'react';

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  role: string;
  learningGoal: string;
  learningMode: 'Online' | 'Classroom' | 'Hybrid';
}

export interface LeadFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  role?: string;
  learningGoal?: string;
  learningMode?: string;
}

interface UseLeadFormProps {
  initialRole?: string;
  initialLearningGoal?: string;
  initialLearningMode?: 'Online' | 'Classroom' | 'Hybrid';
  onSubmitSuccess?: (data: LeadFormData) => void;
}

export function useLeadForm({ 
  initialRole = 'Student', 
  initialLearningGoal = 'Learn Stock Market Basics',
  initialLearningMode = 'Online',
  onSubmitSuccess 
}: UseLeadFormProps = {}) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
    role: initialRole,
    learningGoal: initialLearningGoal,
    learningMode: initialLearningMode,
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

    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }

    // City optional for low-friction lead submission
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const handleLearningGoalChange = (value: string) => {
    setFormData(prev => ({ ...prev, learningGoal: value }));
    if (errors.learningGoal) {
      setErrors(prev => ({ ...prev, learningGoal: undefined }));
    }
  };

  const handleLearningModeChange = (value: 'Online' | 'Classroom' | 'Hybrid') => {
    setFormData(prev => ({ ...prev, learningMode: value }));
    if (errors.learningMode) {
      setErrors(prev => ({ ...prev, learningMode: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          interestedCourse: formData.learningGoal,
          learningMode: formData.learningMode,
          message: formData.message || `Role: ${formData.role}`
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit lead to backend.');
      }
      
      setIsSuccess(true);
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        message: '',
        role: initialRole,
        learningGoal: initialLearningGoal,
        learningMode: initialLearningMode,
      });
      setErrors({});
    } catch (err) {
      console.error('Submission failed:', err);
      setErrors(prev => ({ ...prev, name: 'Network connection failed. Please try again.' }));
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
    handleLearningGoalChange,
    handleLearningModeChange,
    handleSubmit,
  };
}
