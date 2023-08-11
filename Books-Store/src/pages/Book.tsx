 

function Book() {

    const imagePath = 'Nilesh\\images\\image-1691761250974-931887764'
  return (
    <>
      <h1>Nilesh</h1>
      <img src={`http://localhost:5000/${imagePath}`} alt="No image" />
    </>
  )
}

export default Book
