import { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
function Forms() {
  const [username, setusername] = useState("")
  const handleUserName=(e)=>{
    setusername(e.target.value)

  }
console.log(username);
  return (
    <Form>
      <h1 className="text-danger text-center">FORMS</h1>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>{username}</Form.Label>
        <Form.Control type="text" placeholder="User Name" onChange={handleUserName}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Checkbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Forms
