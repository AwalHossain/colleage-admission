// src/services/admissionService.js
export const submitAdmission = async (formData) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Submitted admission form:", formData);
};
