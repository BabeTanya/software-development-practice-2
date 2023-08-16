function submitForm() {
  const errorArray = [];
  const companyNameElem = document.forms["registration_form"]["company_name"];
  if (!companyNameElem.value) {
    errorArray.push("Company name cannot be empty");
  }

  const contactNameElem = document.forms["registration_form"]["contact_name"];
  if (!contactNameElem.value) {
    errorArray.push("Company name cannot be empty");
  }

  const contactNumberElem =
    document.forms["registration_form"]["contact_number"];
  if (!contactNumberElem.value) {
    errorArray.push("Contact number cannot be empty");
  }

  const bootSizeElem = document.forms["registration_form"]["booth_size"];
  if (!bootSizeElem.value) {
    errorArray.push("Boot size cannot be empty");
  }

  const seatCountElem = document.forms["registration_form"]["seat_count"];
  if (seatCountElem.value) {
    const seatCount = Number(seatCountElem.value);
    if (!(seatCount >= 1 && seatCount <= 10)) {
      errorArray.push("Seat count must be number number 1-10");
    }
  } else {
    errorArray.push("Seat count cannot be empty");
  }

  if (errorArray.length > 0) {
    alert(errorArray.join("\n"));
    return false;
  }

  alert("Validation passed");
  return true;
}
