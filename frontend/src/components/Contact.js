const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contact', {
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
