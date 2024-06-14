"use client"
const TestButton = () => {

  const createPost = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'My first created post', 
      content: '<h2 class="text-2xl">This is the content blabla</h2><p>Bla bla</p>'})
  };
    await fetch('http://localhost:3000/api/post', requestOptions)
  }

  return <button onClick={createPost}>YEAH CLIC</button>
}

export default TestButton
