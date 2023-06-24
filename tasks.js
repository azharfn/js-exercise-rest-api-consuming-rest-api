/// GRADER CLI SUBMITT ERORRRRRRRRRRRRR TERPAKSA TEST SUBMIT
function task1() {
  return fetch("http://localhost:3000"); 
}

async function task2() {
  const response = await fetch("http://localhost:3000/task2",{
    method: "PATCH",
  });
  return response.json(); 
}

function task3(userId = 3, role = "admin") {
  return fetch(`http://localhost:3000/task3?user_id=${userId}&role=${role}`,{
    method: "POST"
  }); 
  
}

function task4() {
  return fetch("http://localhost:3000/task4", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": "admin",
      "password": "password"
    })
  }); 
  
}

export { task1, task2, task3, task4 };
