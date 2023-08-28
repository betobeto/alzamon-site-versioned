function generateRandomEmails() {
    const emailPattern = "betobeto+";
    const domain = "@gmail.com";
    const emailAddresses = [];
  
    for (let i = 0; i < 10; i++) {
      let randomNumbers = '';
      for (let j = 0; j < 8; j++) {
        randomNumbers += Math.floor(Math.random() * 10); // Generate random digits
      }
  
      const emailAddress = emailPattern + randomNumbers + domain;
      emailAddresses.push(emailAddress);
    }
  
    return emailAddresses;
  }
  
  // Generate 10 random email addresses and store them in an array
  const randomEmails = generateRandomEmails();
  
  // Log the generated email addresses
  console.log(randomEmails); 