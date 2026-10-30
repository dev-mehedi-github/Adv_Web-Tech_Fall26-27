// promise
function getstudent(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = { id, name: "John Doe" };
      resolve(student);
    }, 1000);
  });
}

// async/await
async function fetchStudent(id: number): Promise<{ id: number; name: string }> {
  try {
    const student = await getstudent(id);
    return student;
  } catch (error) {
    throw new Error("Failed to fetch student");
  }
}

// Example usage
fetchStudent(1)
  .then(student => console.log(student))
  .catch(error => console.error(error));

  