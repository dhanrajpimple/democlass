import { z } from "zod";

// Lead form schema
const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  targetExam: z.string().min(1, "Please select a target exam"),
});

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Registration form schema
const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  course: z.string().min(1, "Please select a course"),
  parentName: z.string().optional(),
  parentPhone: z.string().optional(),
  address: z.string().min(10, "Address must be at least 10 characters"),
});

// API routes definition
export const api = {
  leads: {
    create: {
      path: "/api/leads",
      method: "POST",
      input: leadSchema,
    },
  },
  contact: {
    create: {
      path: "/api/contact",
      method: "POST",
      input: contactSchema,
    },
  },
  registrations: {
    create: {
      path: "/api/registrations",
      method: "POST",
      input: registrationSchema,
    },
  },
};

// Export types
export type LeadInput = z.infer<typeof leadSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type RegistrationInput = z.infer<typeof registrationSchema>;
