// API utility for submitting form data to n8n webhook
export const submitFormData = async (formData) => {
  const apiUrl = "https://n8n.srv1029267.hstgr.cloud/webhook/b652fd37-6679-4d9a-a3ab-ade17814fcb5";
  
  // Map form data to match n8n webhook structure
  const payload = {
    Email: formData.email,
    FirstName: formData.name.split(' ')[0] || formData.name,
    LastName: formData.name.split(' ').slice(1).join(' ') || '',
    PhoneNumber: formData.phone,
    PreferredLanguage: formData.language === 'Hindi' ? 'hi' : 'en',
    PropertyType: formData.propertyType !== 'Select Property Type' ? formData.propertyType : '',
    PreferredLocation: formData.preferredLocation || '',
    BudgetRange: formData.budget !== 'Select Budget Range' ? formData.budget : '',
    Requirements: formData.requirements || ''
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};