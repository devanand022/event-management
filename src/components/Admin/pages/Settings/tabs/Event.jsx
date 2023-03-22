import React from 'react'
import { Button, Card, Form, Table } from 'react-bootstrap'

const Event = () => {
  return (
    <Card style={{width: '100%', height: '88vh', border: 'none', display: 'flex', alignItems: 'center'}}>
      <Card 
        className='mb-3'
        style={{width: '97%', height: '20vh', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', border: 'none'}}>
        <Card style={{width: '70%', height: '18vh', border: 'none'}}>
          <h3 className='mb-3 mx-3 my-1'>Add Event</h3>
          <Form className='d-flex' style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Form.Group style={{width: '85%'}}>
              <Form.Control placeholder='Enter the event name' />
            </Form.Group>
            <Button style={{width: '10%'}}>Add</Button>
          </Form>
        </Card>
      </Card>
      <Card style={{width: '97%', height: '68vh', border: 'none', display: 'flex', alignItems: 'center'}}>
        <Table striped borderless hover style={{width : '97%'}}>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event 1</td>
              <td><Button variant='success' style={{width: '20%'}}>Active</Button></td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Card>
  )
}

export default Event