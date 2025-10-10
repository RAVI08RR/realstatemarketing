import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    const apiUrl = "https://script.google.com/macros/s/AKfycbzjfJIq4C1YlhKROMGY2AmsLTK-uvAUGaxNSbcgtcTycRzViy-j6V25c1ZAC0tLc9y5/exec";
    
    // Map form data to match your API structure
    const payload = {
      SheetID: "105KuxnDPJqhBSk0xGiLfro6KVbq4OMxTTuET-eSSj6k",
      Field: {
        Name: formData.name || "",
        Email: formData.email || "",
        Phone: formData.phone || "",
        "kind of property": formData.propertyType || "",
        "preferred location": formData.preferredLocation || "",
        "budget range": formData.budget || "",
        "must-have": formData.requirements || formData.message || "",
        language: "English",
        Status: formData.source === "hero" ? "HERO FORM LEAD" : "NEW LEAD"
      }
    };

    console.log('Sending payload to Google Apps Script:', payload);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Google Apps Script response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Apps Script error:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const result = await response.json();
    console.log('Google Apps Script result:', result);

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
      data: result 
    });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit form',
        error: error.message 
      },
      { status: 500 }
    );
  }
}