// API utility for submitting form data to Google Apps Script
export const submitFormData = async (formData) => {
  const apiUrl = "https://script.google.com/macros/s/AKfycbzjfJIq4C1YlhKROMGY2AmsLTK-uvAUGaxNSbcgtcTycRzViy-j6V25c1ZAC0tLc9y5/exec";
  
  // Map form data to match your API structure
  const payload = {
    SheetID: "105KuxnDPJqhBSk0xGiLfro6KVbq4OMxTTuET-eSSj6k",
    Field: {
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      "kind of property": formData.propertyType || "",
      "preferred location": formData.preferredLocation || "",
      "budget range": formData.budget || "",
      "must-have": formData.requirements || "",
      language: "English",
      Status: "NEW LEAD"
    }
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