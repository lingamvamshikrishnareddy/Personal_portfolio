const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent page reload on form submit

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, { // Update here
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setResponseMessage("Contact form submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      const { message } = await response.json();
      setResponseMessage(`Error: ${message}`);
    }
  } catch (error) {
    setResponseMessage("An error occurred while submitting the form.");
  }
};
