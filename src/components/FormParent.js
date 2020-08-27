import React from 'react';
import Form from './Form';

class FormParent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: []
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }

//   handleLastNameChange = event => {
//     console.dir(event);
//     this.setState({
//       lastName: event.target.value
//     })
//   }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
        <>
            <Form 
                formData={this.state}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
            />
        {this.listOfSubmissions()}
        </>
    )
  }
}

export default FormParent;